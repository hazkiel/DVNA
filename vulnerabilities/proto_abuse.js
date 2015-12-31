// This is a very common exploit that used to exist in express
// servers and plugins. It is based on how users of JavaScript abuse
// objects as maps.

function Cache() {
}

Cache.prototype.persist = function() {
  var conn = "MY_SECRET_REDIS_KEY"
    Object.keys(this).forEach(function(){
      // code that stores properties in redis
    });
}

var express = require('express');
var DVNA = express();
var cache = new Cache(); // note this is not a Map.

DVNA.get('/', function(req, res) {
  res.send(cache[req.query.id].toString());
  res.end();
});

module.exports = {
  path: 'proto_abuse',
  server: DVNA
}
