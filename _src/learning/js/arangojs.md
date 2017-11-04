# Arangojs

_Reading through the sourcecode. This is only half the story. Open the arangojs repo alongside this chunk of writing and read through them together. Assuming they haven't fallen out of sync._

---

## `new arangojs.Database(configurationOptions)`

The first thing you do with this is to call `new arangojs.Database(configurationOptions)`.

**index.js** (this is `arangojs`)

```
import Database from './database'
import aqlQuery from './aql-query'

module.exports = (...args) => new Database(...args)
module.exports.Database = Database //this is the line that's of interest. So we follow it into ./database
module.exports.aqlQuery =
module.exports.aql = aqlQuery
```

**database.js**

These are the lines from database.js that get called (I've removed other stuff that doesn't run initially:

```
import Connection from './connection'

export default class Database {
  constructor (config) {
    this._connection = new Connection(config) //again we jump into a new file
```

**connection.js**

```
export default class Connection {
  constructor (config) {
    //Now some interesting stuff starts to happen! 
```

Defaults defined in here are merged with the config. All the work in the `constructor` function is to set up the values attached to this instance of the class. This is what it ends up looking like:

```
ConnectionValues = {
    config: {
        url: 'http://localhost:8529',
        databaseName: '_system',
        arangoVersion: 30000,
        retryConnection: false,
        agentOptions: {
            maxSockets: 3,
            keepAlive: true,
            keepAliveMsecs: 1000
        },
        headers: {
            'x-arango-version': 30000 //set to match arangoVersion
            'authorization': `Basic ${btoa(auth)}` //auth is extracted from the parsed url passed in
        },
        promise: //passed to ./utils/promisify - for now looks like an override for a promise library,
        agent: //will be created in createRequest
    }
    arangoMajor: 3, //floor arangoVersion / 10000,
    _baseUrl: //the parsed url string that was passed in 
    _request: //a function defined in request.node.js
    _databasePath: '/_db/_system', //_system by default, set by config.databaseName
    promisify: 
    retryOptions: {
        forever: this.config.retryConnection,
        retries: 0,
        minTimeout: 5000,
        randomize: true
    }
}
```

**./util/request.js as createRequest**

```
module.exports = require('./request.node') //into ./request.node.js we go!
```

**./request.node.js**

```
export default function (baseUrl, agentOptions, agent) {
```

Recall that back in the Connection class constructor there was this:

```
const {request, auth, url} = createRequest( //this is the function exported by request.node.js
    this.config.url,
    this.config.agentOptions,
    this.config.agent
)
```

`this.config.url` passing in as `baseUrl` is passed through [url](https://www.npmjs.com/package/url) to split it into the relevant parts (eg host / port / path / query / etc). 

`this.config.agent` is null unless you explicetly set one in the `new arangojs` function right at the start. If null a `new Agent` with `(this.config.agentOptions)` is created. ([Agent](https://nodejs.org/api/http.html#http_class_http_agent) being a native node http connectoin manager).

`queue` is craeated, a `new LinkedList()`, [LinkedList](https://www.npmjs.com/package/linkedlist) being something like an array with a few more functions.

`maxTasks` is set to double the `agent.maxSockets` or infinity!

`activeTasks` is set to 0. 

`drainQueue()` is defined - this is only called at the end of `request()` which is defined next.

```
return {
    request, //a function defined in here
    auth, //the username / password extracted from the passed in `this.config.url`
    url: baseUrlParts //the parsed `this.config.url`
}
```

**Summary of `new arangojs.Database(configurationOptions)`**

Nothing is actually run. No http requests have happened. No db calls have been made. We just have an object that is ready to be used.

---

##
