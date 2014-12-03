var dnode = require('dnode'),
    fs = require('fs');

var server = dnode({
    transform : function (s, cb) {
        cb(s.replace(/[aeiou]{2,}/, 'oo').toUpperCase())
    }
});

module.exports = {

  init: function(server) {
    server.listen(port);
    console.log('rpc server listening on port: '+port);
  }

};
