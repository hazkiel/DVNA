var express = require('express');
var DVNA = express();

// Challenge could be to pollute the namespace with the flag hashes
var global = 0

DVNA.get('/', function(req, res) {
  global = global + 1;
  res.send('<h2>Issue: Global Namespace Pollution</h2>'+'Global Scope Polluted Variable: ' + global)
});

module.exports = {
  path: 'global_namespace_pollution',
  server: DVNA
}
