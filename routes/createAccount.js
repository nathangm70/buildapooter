var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('createAccount', { title: 'Build A Pooter' });
});

module.exports = router;
