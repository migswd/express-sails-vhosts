//
// Module dependencies
//

var express = require('express');
var router = express.Router();


//
// Get home page
//

router.get('/', function(req, res) {
  res.render('index', {
    title: 'Page title',
    description: 'Page description'
  });
});


//
// Export module
//

module.exports = router;
