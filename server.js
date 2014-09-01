//server.express+sails-vhosts.js

// Module dependencies
var express = require('express');
var vhost = require('vhost');
var app = express();
var async = require('async');

async.auto({

		// use async or something similar to load all of the Sails apps
    app4: require('./app4-sails/app.js')

}, function doneLoadingApps(err, apps) {

	// then hook them up with vhost
    app
    	// Sails app
      .use(vhost('app4.io', apps.app4.hooks.http.app))
      
      // Mix in vanilla Express apps as well
      .use(vhost('app1.io', require('./app1-express/app.js')))
  		.use(vhost('app2.io', require('./app2-express/app.js')))
  		.use(vhost('app3.io', require('./app3-express/app.js')))
      
      .listen(8080);

});
