# The API Mobile Automation Test Framework

> The following automation framework was created for providing the support of API tests.

## The main stack of technologies: 

- [typescript](https://www.typescriptlang.org)
- [superagent](https://visionmedia.github.io/superagent)
- [superagent-bluebird-promise](https://www.npmjs.com/package/superagent-bluebird-promise)
- [mochaJS](https://mochajs.org)
- [chaiJS](http://www.chaijs.com)

## The main config files:

- [package.json](package.json)
- [tsconfig.json](tsconfig.json)
- [tslint.json](tslint.json)
- [mocha.opts](mocha.opts)

### The general structure of test framework for API Mobile:

- [entities](src/entities)
> The `entities` is used for keeping the global entities e.g. `User`, `Guest` and etc. 
- [models](src/models)
> The `models` is used for keeping the structure of responses.
- [services](src/services)
> The `services` is used for keeping the actions of entities e.g. `getTickets()`.
- [utils](src/utils)
> The `utils` is used for keeping the helper files e.g. `requester`.
- [tests](test)
> The `test` contains the test scenarios e.g. `user-get-tickets`.

### Features

- [Timeouts](http://visionmedia.github.io/superagent/#timeouts)
> Recommended to use timeouts: Sometimes networks and servers get "stuck" and never respond after accepting a request.
  Set timeouts to avoid requests waiting forever.

### Readme files

 - [Requests](api/api-mobile-coverage.md)
 - [Readme](README.md)

### How to execute tests? 

```sh
$ npm install
$ npm run test
 ```

#### Environment Local:

```sh
$ npm install
$ ./node_modules/.bin/mocha test.js
```

#### Environment CircleCI:

- 

### Circle CI

- 

### Plugins

| Plugin | LINK |
| ------ | ------ |
| JSON Reporter | [JSON Reporter]() |





