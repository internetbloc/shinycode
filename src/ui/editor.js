var fs = require('fs');

// all active ace / editor instances
var console = Shinycode.console;
Shinycode.editors = [];

function ShinyEditor(editor)
{
  if (!editor)
  {
    editor = this.createEditor();
  }

  this.editor = editor;

  Shinycode.editors.push(this);
}

ShinyEditor.fetchById = function(id)
{
  for (var i=0;i<Shinycode.editors.length;i++)
  {
    var o = Shinycode.editors[i];
    if (o.editor_id == id || o.page_id == id)
      return o;
  }
}

ShinyEditor.prototype.setTitle = function(title)
{
  $('.file-title[x-editor="'+this.editor_id+'"]').text(title);
}

ShinyEditor.prototype.getEditor = function() { return this.editor; }

ShinyEditor.prototype.createEditor = function()
{
  this.page_id = _.uniqueId('page_');
  this.editor_id = _.uniqueId('codeeditor_');

  var html = Shinycode.UI.templates['editor'](this);

  $('#tabs').jqxTabs('addLast', '<span class="file-title" x-editor="'+this.editor_id+'">Loading..</span>', html);
  //$('#tabs').jqxTabs('ensureVisible', -1);

  var editor = ace.edit(this.editor_id);
  editor.setTheme("ace/theme/chaos");
  editor.getSession().setMode("ace/mode/javascript");

  $(editor).resize();

  return editor;
}

ShinyEditor.prototype.resize = function()
{
  $(this.editor).resize();
}

module.exports = {
  ShinyEditor: ShinyEditor,

  init: function() {
    window.ShinyEditor = ShinyEditor;
    console.log('-- inited shinyeditor base --');
  },

  resize: function(){
    for (var i=0;i<Shinycode.editors.length;i++)
      Shinycode.editors[i].resize();
  },

  initAll: function() {
    var welcome_msg = fs.readFileSync(__dirname + '/../../tmpl/welcome.html').toString();

    // Create the (test) editor
    var shiny = new ShinyEditor();
    shiny.setTitle('Welcome');
    shiny.getEditor().getSession().setMode("ace/mode/html");
    shiny.getEditor().setValue(welcome_msg);
  }
};
