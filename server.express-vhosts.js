//server.express-vhosts.js

//
// Module dependencies
// from https://github.com/loicsaintroch/express-vhosts
//

var express = require('express');
var vhost = require('vhost');
var app = express();


//
// vhosts
//

app
  .use(vhost('app1.io', require('./app1-express/app.js')))
  .use(vhost('app2.io', require('./app2-express/app.js')))
  .use(vhost('app3.io', require('./app3-express/app.js')))
  .listen(8080);