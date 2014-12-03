// browserify load thru brfs, otherwise just regular ol' fs (hint: brfs doesn't work very good :/)
var fs = require('fs');
var _ = require('lodash');

var obj = {
  'files_tmpl': fs.readFileSync('tmpl/files.html').toString(),
  'header_tmpl': fs.readFileSync('tmpl/header.html').toString(),
  'panes_tmpl': fs.readFileSync('tmpl/panes.html').toString(),
  'editor_tmpl': fs.readFileSync('tmpl/code-editor.html').toString()
};
// an easy candidate for shortening if there's suddenly tons of templates..
obj['files'] = _.template(obj["files_tmpl"]);
obj['header'] = _.template(obj["header_tmpl"]);
obj['panes'] = _.template(obj["panes_tmpl"]);
obj['editor'] = _.template(obj["editor_tmpl"]);

module.exports = obj;
