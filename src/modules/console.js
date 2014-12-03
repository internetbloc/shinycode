window.originalConsole = window.originalConsole || console;

function IdeConsole()
{
    this.log('-- ide console created --');
}

IdeConsole.prototype.log = function(msg)
{
    originalConsole.log(msg);
}

IdeConsole.prototype.dir = function(o)
{
    originalConsole.dir(o);
}

if (!window.currentConsole)
{
    window.currentConsole = new IdeConsole();
}

module.exports = window.currentConsole;
