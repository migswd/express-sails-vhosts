var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello Node.js!\n');
    if ('host' in req.headers) {
        var host = req.headers['host'];
        res.write('Vhost is ' + host.split(':')[0] + '\n');
    } else {
        res.write('No vhost specified\n');
    }
    res.end();
}).listen(8080);