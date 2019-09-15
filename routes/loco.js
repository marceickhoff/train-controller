var express = require('express');
var router = express.Router();

/* GET loco page. */
router.get('/*', function(req, res, next) {
	res.render('loco', { title: 'Train Controller' });
});

module.exports = router;
