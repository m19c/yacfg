`yacfg`
=======
> yet another config

[![Code Climate](https://codeclimate.com/github/MrBoolean/yacfg/badges/gpa.svg)](https://codeclimate.com/github/MrBoolean/yacfg) [![Test Coverage](https://codeclimate.com/github/MrBoolean/yacfg/badges/coverage.svg)](https://codeclimate.com/github/MrBoolean/yacfg) [![Build Status](https://travis-ci.org/MrBoolean/yacfg.svg?branch=master)](https://travis-ci.org/MrBoolean/yacfg) [![Dependency Status](https://gemnasium.com/MrBoolean/yacfg.svg)](https://gemnasium.com/MrBoolean/yacfg) [![npm](https://img.shields.io/npm/v/yacfg.svg)](https://npmjs.org/yacfg)

[![NPM](https://nodei.co/npm/yacfg.png?downloads=true)](https://nodei.co/npm/yacfg/)

## Introduction
`yacfg` organizes the configuration for different deployment environments (e.g. `production`, `development` or `test`). It takes care of merging, caching and freezing your configuration (see [Options](#options)).

### Goals
- Simple
- Fast
- Lightweight
- Tested

## Install
```bash
npm i --save yacfg
```

## Quick Start
### Using the default behaviour
_lib/bootstrap.js_
```javascript
var yacfg = require('yacfg');

// init the configuration once
yacfg.init();
// ...
```

_routes/home.js_
```javascript
// use your config in each module you want
var config = require('yacfg').config;

module.exports = function home(req, res) {
  res.send('Application "' + config.name  + '" running');
};
```

### Using your own `config` module
_lib/config.js_
```javascript
var yacfg = require('yacfg');

yacfg.init({
  path: 'path/to/your/config-directory' // defaults to `process.cwd() + '/config'`
});

module.exports = yacfg.config;
```

### Using your own environment sequence
Rule: production > staging > development > test

```javascript
var yacfg = require('yacfg');

yacfg.init({
  environment: 'development',
  sequence: ['production', 'staging', 'development', 'test']
});
```

## Options
Option         | Description                                                             | Default
-------------- | ----------------------------------------------------------------------- | --------------------------
`environment`  | The current environment                                                 | `process.env.NODE_ENV || 'production'`
`path`         | The config base path                                                    | Defaults to `<CWD>/config`
`sequence`     | The sequence of your configuration e.g. production > development > test | `['production', 'development', 'test']`
`uncached`     | Force a clean configuration                                             | `false`
`freeze`       | Freezes the configuration                                               | `false`
`spec`         | The `tb` spec instance                                                  | `null`

## Contribute
You want to help us? Cool, thanks!

It ist important to watch the given coding standards and to implement them.

At bottom it is very simple.

1. Checkout of the repository.
2. Run `npm i`.
3. Define the content and write some test for it.
4. Implement the new functionality / resolve the bug.
5. Run `gulp test`
6. Create a pull-request

## License
The MIT License (MIT)

Copyright (c) 2014 - 2015 Marc Binder <marcandrebinder@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.