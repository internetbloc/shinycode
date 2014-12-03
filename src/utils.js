// expose underscore / lodash everywhere
var _ = require('lodash');

// very simple object extend copied from mozilla or somethin'
function extend(base, sub) {
  var origProto = sub.prototype;
  sub.prototype = Object.create(base.prototype);
  for (var key in origProto)  {
     sub.prototype[key] = origProto[key];
  }
  sub.prototype.constructor = sub;
  Object.defineProperty(sub.prototype, 'constructor', { 
    enumerable: false, 
    value: sub 
  });
}

// global (if running clientside)
if (window) {
    window._ = _;
    window.extend = extend;
}

module.exports = {
    extend: extend,
    _:_
}