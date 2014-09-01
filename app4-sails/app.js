/**
 * app.js
 *
 * More info here :
 * http://stackoverflow.com/questions/25345423/node-js-express-with-vhost-conflict-with-sails-js-framework-app
 */

// Load sails app:
var sails = require('sails');
module.exports = function(cb) {
    process.chdir(__dirname);
    sails.load(cb);
};
