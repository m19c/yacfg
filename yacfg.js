/**
 * @module yacfg
 * @author Marc Binder <marcandrebinder@gmail.com>
 * @license MIT
 * @copyright 2015
 */

var path = require('path');
var defaults = require('lodash.defaultsdeep');
var take = require('lodash.take');
var prop = require('deep-property');
var freeze = require('deep-freeze-node');
var yacfg = {};

/**
 * Purges the cache for the given `fileName`
 *
 * @param  {string} fileName
 * @return {void}
 */
function purge(fileName) {
  fileName = require.resolve(fileName);

  if (require.cache[fileName]) {
    delete require.cache[fileName];
  }
}

yacfg.config = {};

/**
 * Extracts the `key` from the current configuration
 *
 * @param  {string} key
 * @param  {mixed} defaultValue
 * @return {mixed}
 */
yacfg.get = function get(key, defaultValue) {
  return prop.get(this.config, key, defaultValue);
};

/**
 * Checks the availability of the given `key`
 *
 * @param  {string}  key
 * @return {boolean}
 */
yacfg.has = function has(key) {
  return prop.has(this.config, key);
};

/**
 * Sets a value. Note that this function throws an error if the
 * configuration is locked.
 *
 * @param {string} key
 * @param {mixed} value
 * @return {yacfg}
 */
yacfg.set = function set(key, value) {
  prop.set(this.config, key, value);
  return this;
};

/**
 * Removes the given `key`
 *
 * @param  {string} key
 * @return {yacfg}
 */
yacfg.del = function del(key) {
  prop.remove(this.config, key);
  return this;
};

/**
 * Re(initializes) the configuration
 *
 * @param  {object} options
 * @return {object} The configuration
 */
yacfg.init = function init(options) {
  var stack = [];
  var affected;
  var config = {};

  options = defaults(options || {}, {
    environment: process.env.NODE_ENV || 'production',
    path: path.join(process.cwd(), 'config'),
    sequence: ['production', 'development', 'test'],
    spec: null,
    uncached: false,
    freeze: false
  });

  affected = take(options.sequence, options.sequence.indexOf(options.environment) + 1);

  affected.forEach(function eachAffected(environment) {
    var fileName = path.resolve(options.path, environment);

    if (options.uncached) {
      purge(fileName);
    }

    stack.push(require(fileName));
  });

  config = (stack.length > 1) ? defaults.apply(defaults, stack) : stack[0];

  if (options.spec) {
    config = options.spec.deploy(config);
  }

  if (options.freeze) {
    config = freeze(config);
  }

  this.config = config;

  return this.config;
};

module.exports = yacfg;