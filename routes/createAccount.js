var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
    res.render('createAccount', { title: 'Build A Pooter' });
});

router.post('/', function(req, res)
{
    //here we want to take all the information form it into an object and then send that object off to the server

});

module.exports = router;
