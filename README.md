`yacfg`
=======
> yet another config

[![Code Climate](https://codeclimate.com/github/MrBoolean/yacfg/badges/gpa.svg)](https://codeclimate.com/github/MrBoolean/yacfg) [![Test Coverage](https://codeclimate.com/github/MrBoolean/yacfg/badges/coverage.svg)](https://codeclimate.com/github/MrBoolean/yacfg) [![Build Status](https://travis-ci.org/MrBoolean/yacfg.svg?branch=master)](https://travis-ci.org/MrBoolean/yacfg) [![Dependency Status](https://gemnasium.com/MrBoolean/yacfg.svg)](https://gemnasium.com/MrBoolean/yacfg) [![npm](https://img.shields.io/npm/v/yacfg.svg)](https://npmjs.org/yacfg)

[![NPM](https://nodei.co/npm/yacfg.png?downloads=true)](https://nodei.co/npm/yacfg/)

## Install
```bash
npm i --save yacfg
```

## Usage
```javascript
var yacfg = require('yacfg');

yacfg.init({
  path: 'path/to/your/config-directory' // defaults to `process.cwd() + '/config'`
});

module.exports = yacfg.config;
```

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