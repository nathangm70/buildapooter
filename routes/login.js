var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Build A Pooter' });
});

router.post('/', function(req, res){

    //take the user credntials store them in a json object and send that to the server
    //grab our information
    var userInfo = {userName: req.body.UserName, passWord: req.body.Password};
    //now that we have our object lets send this bad boy over

});

module.exports = router;
