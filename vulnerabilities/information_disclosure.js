// By default you should see the connect.sid header value

var express = require('express');
var DVNA = express();

DVNA.get('/', function(req, res) {
  // When using just Express we can disable the header values with this setting
  app.disable("x-powered-by");
});

// When using helmet.js the option to prevent information disclosure in header values is
// app.use(helmet.hidePoweredBy));

// change that default Set-Cookie header value (connect.sid)
// var session = require('express-session');
// app.use(session({
//   secret: "password123",
//   key: "sessionId",
// }));

// Show this kind of information only in development environment
// var connect = require('connect');
// var errorhandler = require('errorhandler');
// var DVNA = connect();
//
// if (process.env.NODE_ENV === 'development') {
//   DVNA.use(errorhandler);
// }

module.exports = {
  path: 'information_disclousure',
  server: DVNA
}
