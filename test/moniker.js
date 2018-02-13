var Assert = require('assert'),
    M = require('../lib/moniker');

describe('all', function() {
  it('the default generator works', function() {
      var G = M.generator([M.adjective, M.noun], { maxSize: 7, capitalize: true });
      console.log(G);
      var name = G.choose();
      console.log(name);
      Assert.equal(typeof name, 'string');
    });
  it('names are random', function() {
      var names = M.generator([M.adjective, M.noun], { maxSize: 7 });
      console.log(names);
      Assert.equal(typeof names.choose(), 'string');
      Assert.notEqual(names.choose(), names.choose());
    });
});
