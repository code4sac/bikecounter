var express = require('express');
var router = express.Router();

var countData = require('../data/countData');

/* GET users listing. */
router.get('/:id', function(req, res) {
	
	countData.get(req.params.id)
	.then(function (data) {

		res.send(data);
	});
});

module.exports = router;