var express = require('express');
var router = express.Router();

var countData = require('../data/countData');

/* GET users listing. */
router.get('/:id', function(req, res) {
	
	res.send(countData.get(req.params.id));
});

module.exports = router;