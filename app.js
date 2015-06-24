var Vantage = require('vantage');
var server = new Vantage();

var timers = [];

server
    .command('add <description>')
    .option('-t, --time <time>', 'Countdown timer for this task.')
    .description('Add timer to set.')
    .action(function(args, cb) {
        timers.push({timer: args.options.time, description: args.description});
        console.log(timers);
        cb();
    });

server
    .delimiter('timer~$')
    .listen(8020)
    .show();