// Node.JS backend server - Optional
//var browserify = require('browserify-middleware');
var browserify = require('browserify');
var express = require('express');
var fs = require('fs');
var path = require('path');
var coffee = require('coffee-script');
var through = require('through');
var app = express();

var rpc_server = require('./server/rpc');

function test()
{
  var b = browserify('./src/app');
  b.transform('brfs');

  var x = b.bundle().toString();
  console.log('test bundle -- bundle ok')
}
test();

app.use(express.static(path.join(__dirname, '../tmpl/')));
app.use(express.static(path.join(__dirname, '../')));
//app.use('/js/app.js', browserify('../app.js'));

app.get('/', function(req, res){
  res.status(200).sendFile(path.join(__dirname, '../tmpl/editor.html'));
});

//Handles post requests
var bodyParser = require('body-parser')
app.use(bodyParser());

app.get('/js/coffee.js', function(req, res){
  var b = browserify('./src/coffee/all.coffee');
  b.transform(function (file) {
      var data = '';
      return through(write, end);

      function write (buf) { data += buf }
      function end () {
          this.queue(coffee.compile(data));
          this.queue(null);
      }
  });

  res.status(200);
  res.header("Content-Type", "text/javascript");
  b.bundle().pipe(res);
});

app.get('/js/app.js', function(req, res){
  var b = browserify('./src/app');
  b.transform('brfs');
  res.status(200);
  res.header("Content-Type", "text/javascript");
  b.bundle().pipe(res);
});

app.use(rpc_server.server.middleware());

app.disable('etag'); // no cache method #1

app.listen(8080);
console.log('fyi: the server is now available at 127.0.0.1:8080');
