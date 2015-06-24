var banner = '' +
    '                       _      _                     ____       _   \n' +
    '  ___ ___  _   _ _ __ | |_ __| | _____      ___ __ / ___|  ___| |_ \n' +
    ' / __/ _ \| | | | \'_ \| __/ _` |/ _ \ \ /\ / | \'_ \\___ \ / _ | __|\n' +
    '| (_| (_) | |_| | | | | || (_| | (_) \ V  V /| | | |___) |  __| |_ \n' +
    ' \___\___/ \__,_|_| |_|\__\__,_|\___/ \_/\_/ |_| |_|____/ \___|\__|\n'
    '' +
    '';


var Vantage = require('vantage');
var server = new Vantage();

var timers = [];

server
    .command('add <description>')
    .option('-t, --time <time>', 'Countdown timer for this task.')
    .description('Add timer to set.')
    .action(function(args, cb) {
        timers.push({timer: args.options.time, description: args.description});
        cb();
    });


server
    .command('show')
    .description('Show timers in set.')
    .action(function(args, cb) {
        timers.forEach(function(timer) {
            console.log('[%s] %s', timer.timer, timer.description);
        });

        cb();
    });

server
    .delimiter('timer~$')
    .banner(banner)
    .listen(8020)
    .show();