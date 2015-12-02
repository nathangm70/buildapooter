var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'Build A Pooter' , user: req.session.user});
});

module.exports = router;