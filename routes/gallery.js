var express = require('express');
var router = express.Router();

/* GET Gallery page. */
router.get('/', function(req, res, next){
  res.render('gallery',{title: 'Our Showcase'});
});

module.exports = router;
