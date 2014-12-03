var console = require('./modules/console');

// Main window IDE object
window.Shinycode = window.Shinycode || {};
Shinycode.console = console;

console.log('-- bootstrappin\' --');

// Bind utils (extend, window._ (lodash)) -- UI templates
var Utils = require('./utils');
Shinycode.UI = {
    templates: require('./templates')
};

Shinycode.UI.general = require('./ui/general');
Shinycode.UI.editor = require('./ui/editor');

// Run UI code (mods, jquery stuff like that..)
Shinycode.UI.general.initAll();

Shinycode.UI.editor.init();
Shinycode.UI.editor.initAll();

// Create RPC

console.log('-- bootstrap\'d --');

less.watch();
console.log('less is watching..');
