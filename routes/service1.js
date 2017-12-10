var express = require('express');
var router = express.Router();

/* GET Service 1 page. */
router.get('/', function(req, res, next){
  res.render('service1',{title: 'Service 1'});
});

module.exports = router;
