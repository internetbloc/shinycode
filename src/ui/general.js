/**
 * TODO: regarding section#container, the jqxSplitter module
 * is setting the width incorrectly in Firefox randomly.
 * It always sets it to 43px, though this is probably based on a
 * calculation. Still, it sets the element.style.width property
 * which is rendered as an inline style and therefore with highest
 * specificity.

 * tl;dr JAVASCRIPT BUG IN jqxSplitter, perhaps being called before
 * page is fully rendered.
 *
 * temp fix. ~tso 11/21/2014 11:46:05 AM */
function jsProblems()
{
    var problemChild = document.getElementById('container');
    if(problemChild.style.width == "43px")
        problemChild.style.width = "100%";
}

var templates = Shinycode.UI.templates,
    console = Shinycode.console;

// render the top level templates (header, files pane, tabs pane)
function renderTopLevel()
{
  $("#wrapper").prepend(templates['header']());
  $('#center_wrap').append(templates['files']());
  $('#center_wrap').append(templates['panes']());
  console.log('-- rendered top level UI html --');
}

function initTabs()
{
  // Main splitter (sidebar|content)
  $('#tabs').jqxTabs({ theme: 'metrodark', width: "100%" });
  $('#tabs').jqxTabs("removeFirst");
  $('#tabs').bind('selected', function(evt) {
      var item = evt.args.item,
          title = $('#tabs').jqxTabs('getTitleAt', item);

      Shinycode.UI.editor.resize();
  });
}

function initPanes()
{
  $('#center_wrap').jqxSplitter({ theme: 'metrodark', panels: [{ size: 250 }] });
  $('#list-menubar').jqxMenu({ theme: 'metrodark', width: "100%", height: 32 });
}

module.exports = {
  initAll: function() {
    // init / render main UI
    renderTopLevel();

    initPanes();
    initTabs();

    console.log('-- general ui init complete --');

    // ultimately maybe-should-fix ha
    setTimeout(function(){
      $("#container").css('width', '100%');
      jsProblems();
    }, 1000);
  }
}
