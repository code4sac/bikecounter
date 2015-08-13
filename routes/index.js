var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var title = 'Bike Counter';
  var cacheBuster = parseInt(Math.random() * 10000);
  res.render('index', { title: title, cacheBuster: cacheBuster });
});

module.exports = router;
