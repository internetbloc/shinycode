var events = require('events');

function Filesystem(options)
{
    this.name = "Unknown";
    this.remote = false;

    _.extend(this, options);
}

// Make this specific file system instance an event emitter
Filesystem.prototype.__proto__ = events.EventEmitter.prototype;

// ------------------------------------
// Methods
// ------------------------------------

Filesystem.prototype.openFolder = function(cb)
{
  if (this.remote)
  {

  }
  else
  {

  }
}


//Filesystem.prototype.
