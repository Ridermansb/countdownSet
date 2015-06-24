var Vantage = require('./node_modules/vantage/lib/vantage');
var server = new Vantage();


server
    .command('foo')
    .description('Outputs "bar".')
    .action(function(args, cb) {
        console.log('bar');
        cb();
    });

server
    .delimiter('webapp~$')
    .listen(8020)
    .show();