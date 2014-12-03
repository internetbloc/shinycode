class Pane
  constructor: (targetEl) ->
    # Find and listen for the element target's
    # size changes, apply them to the absolutely
    # positioned contents.

    if not targetEl then targetEl = document.querySelector '.codeedit'
    
    console.log('Opening new pane with target:')
    console.dir(targetEl)