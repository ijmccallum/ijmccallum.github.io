# Arangojs

_Reading through the sourcecode._

The first thing you do with this is to call `new arangojs.Database(configurationOptions)`.

## index.js

This is `arangojs`. It exports the following: (sudo code)

```
    this: new Database(args), //so you can call new arangojs(args) 
    Database: ./database.js, //as well as new arangojs.Database(args)
    aqlQuery: ./aql-query.js,
    aql: ./aql-query.js,
```

The args are the configurationObject you pass in, they go into the ./database.js constructor

## database.js

When calling `new Database(configurationOptions)` the database class constructor doesn't do much:

```
//sudo code for Database
this._connection = new Connection(configurationOptions)
```

Connection comes from ./connection.js so lets go straight through to there

## connection.js

This exports a Connection class, the constructor for this class is where our `configurationOptions` are finally used. Any options we add to it will override a few defaults. This is what the defaults end up looking like (all of which you can override with `configurationOptions`:

```
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

Along with setting the default / overridden configuration the constructor sets a few values on the class itself:

```
//again sudo code ish
Connection = {
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
```