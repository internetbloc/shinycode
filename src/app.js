function startup_main()
{
    var console = require('./modules/console');
    console.log('startup_main');
    require('./bootstrap');
}

$(startup_main); // always start running after dom load
