var express = require('express');
var router = express.Router();

var data = require('../data/countData');

/* GET users listing. */
router.get('/:id', function(req, res) {
	res.send(data[0]);
});

module.exports = router;