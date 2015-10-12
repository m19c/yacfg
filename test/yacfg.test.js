var path = require('path');
var resourcePath = path.join(__dirname, 'resource');
var yacfg = require('../');

describe('yacfg', function describeYacfg() {
  it('throws an error if a file of the sequence doesnt exist', function() {
    (function() {
      yacfg.init({
        environment: 'fake',
        path: resourcePath,
        sequence: ['production', 'fake']
      });
    }).should.throw(/Cannot find module \'(.*)\'/);
  });

  it('takes a spec file', function(done) {
    yacfg.init({
      path: resourcePath,
      spec: {
        deploy: function(data) {
          data.should.be.ok();
          done();
        }
      }
    });
  });

  it('cleans the cache if `uncached` is specified', function() {
    var production = require(path.join(resourcePath, 'production'));

    production.port = 1337;

    yacfg.init({ path: resourcePath });

    yacfg.config.port.should.equal(1337);

    yacfg.init({ path: resourcePath, uncached: true });

    yacfg.config.port.should.equal(1);
  });

  it('merges the configuration correctly', function() {
    yacfg.init({
      path: resourcePath,
      environment: 'test'
    });

    yacfg.config.port.should.equal(1);
    yacfg.config.productionOnly.should.be.ok();
    yacfg.config.developmentOnly.should.be.ok();
    yacfg.config.testOnly.should.be.ok();
  });

  it('ignore changes if the configuration is freezed', function() {
    yacfg.init({
      path: resourcePath,
      freeze: true
    });

    yacfg.config.port.should.equal(1);
    yacfg.config.port = 2;
    yacfg.config.port.should.equal(1);
  });

  describe('utility', function utility() {
    beforeEach(function() {
      yacfg.init({
        path: resourcePath,
        uncached: true
      });
    });

    it('provides the method `set`', function() {
      yacfg.config.port.should.equal(1);
      yacfg.set('port', 1337);
      yacfg.config.port.should.equal(1337);
    });

    it('provides the method `has`', function() {
      yacfg.has('port').should.be.true();
      yacfg.has('something').should.be.false();
    });

    it('provides the method `get`', function() {
      yacfg.get('port').should.equal(1);
    });

    it('provides the method `del`', function() {
      yacfg.del('port');
      yacfg.config.should.not.have.property('port');
    });
  });
});