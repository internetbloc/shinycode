var jayson = require('jayson'),
    fs = require('fs'),
    _ = require('lodash');

var methods = {
  add: function(a, b, callback) {
    callback(null, a + b);
  },

  echo: function(msg, callback)
  {
    console.log('echo: '+msg);
    callback(null, "Echo: "+msg);
  }
};

var server = jayson.server(methods);

module.exports = {
  server: server
};
