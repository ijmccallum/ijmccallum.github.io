# Arangojs

Reading through the sourcecode as we're using this for WL.

## index.js

 - Bring in the database
 - Bring in aql-query
 - export them both along with any args that are passed.

## database.js

Well this is a bit large. ~500 line file with a bunch of functions, starting off with a few imports:

 - util/all.js
 - util/btoa.js
 - util/multipart.js (as toFrom?)
 - ./connection.js
 - ./cursor (as ArrayCursor)
 - ./graph
 - constructCollection, DocumentCollection, and EdgeCollection from ./collection

It exports the `Database` class which takes an object `config`, one huge list of functions. In the constructor for this class: `this._connection = new Connection(config)` So into ./connection.js we go


## connection.js

### connection configuration

When you run `new Database(config)`, **config** is passed through the Database constructor into the Connection constructor. There's some spreading but this is what all the config object keys are by default:

```
//all of these can be overridden by the config object you pass to new Database(config)
config = {
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
      'authorization': `Basic ${btoa(auth)}` //default auth comes from ./util/request 
  },
  promise: //passed to ./utils/promisify - for now looks like an override for a promise library
}
```

Along with setting the configuration object overrides the constructor sets a few values on the class itself:

thisThings = {
    arangoMajor: 3, //floor arangoVersion / 10000,
    _baseUrl: //
    _request:
    _databasePath: '/_db/_system', //_system by default, set by config.databaseName
    promisify: 
    retryOptions: {
        forever: this.config.retryConnection,
        retries: 0,
        minTimeout: 5000,
        randomize: true
    }
}