var Assert = require('assert'),
    M = require('../lib/moniker');

module.exports = {
  'names are random': function() {
    var names = M.generator([M.adjective, M.noun], { size: 7 });
    Assert.notEqual(names.choose(), names.choose());
  }
};