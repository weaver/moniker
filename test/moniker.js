var Assert = require('assert'),
    M = require('../lib/moniker');

module.exports = {
  'names are random': function() {
    var names = M.generator([M.adjective, M.noun], { maxSize: 7 });
    Assert.equal(typeof names.choose(), 'string');
    Assert.notEqual(names.choose(), names.choose());
  }
};