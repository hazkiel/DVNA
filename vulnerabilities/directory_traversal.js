// Load a remote file in order to capture flag

var http = require('http');
var fs = require('fs');
var p = require('path');

var express = require('express');
var DVNA = express();

// TODO: Handle ENOENT error exception when the flag isn't loaded as this will crash node otherwise
DVNA.get('/', function(req, res){
  try {
    debugger
    var filePath = p.join(__dirname, '/' + req.query.traverse);
    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } catch (e) {
    res.send(404);
    console.log('File not found');
  }
});

module.exports = {
  path: 'directory_traversal',
  server: DVNA
}
