var express = require('express');
var router = express.Router();

var countData = require('../data/countData');

/* GET users listing. */
router.get('/:id', function(req, res) {
	
	countData.get(req.params.id)
	.then(function (data) {
		
		if (data == undefined) {
			res.status(404).send('No count found that matches supplied count ID.');
		} else {
			res.send(data);	
		}
	});
});

module.exports = router;