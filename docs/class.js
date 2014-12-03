// Nice util
function extend(base, sub) {
  var origProto = sub.prototype;
  sub.prototype = Object.create(base.prototype);
  for (var key in origProto)  {
     sub.prototype[key] = origProto[key];
  }
  // Remember the constructor property was set wrong, let's fix it
  sub.prototype.constructor = sub;
  // In ECMAScript5+ (all modern browsers), you can make the constructor property
  // non-enumerable if you define it like this instead
  Object.defineProperty(sub.prototype, 'constructor', { 
    enumerable: false, 
    value: sub 
  });
}

// magical JS scoping, so nothing really becomes a global variable.
(function(){
    // Classes in JS (eg class Foo extends Bar)
    var el = document.getElementById("out");

    function Foo(name)
    {
        // this is the constructor so:
        this.name = name;
        
        if (!name)
            this.name = "lol";
    }

    Foo.prototype.say = function(msg) 
    {
        console.log(msg);
    }

    Foo.prototype.print = function(msg)
    {
        el.innerHTML += msg + "<br />";
    }
    
    function Animal(name)
    {
        // call parent constructor
        Foo.call(this, name);
    }
    
    Animal.prototype.print = function(msg)
    {
        el.innerHTML += this.name + msg + '- .' + "<br>";
    }
    
    Animal.prototype.shit = function()
    {
        console.log(this.name + ' shxting');
        console.dir(this);
    }
    
    extend(Foo, Animal);
    
    // now expose them somewhere
    window.Stuff = {
        Foo: Foo,
        Animal: Animal
    };
    
    // Same thing but for require
    module.exports = window.Stuff;
})();

function go() {
    // By the time we get here it's done so
    var one = new Stuff.Animal('Angry Beaver'),
        two = new Stuff.Foo('somedin else');

    one.print("yo");
    two.print("i dont give --- --");
    two.print("license and registration!");
    one.print("uh");
    one.shit();
}

module.exports.go = go;