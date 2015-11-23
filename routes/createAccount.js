var express = require('express');
var router = express.Router();
var SocketConnector = require('../Objects/SocketConnector');

/* GET home page. */
router.get('/', function(req, res, next)
{
    res.render('createAccount', { title: 'Build A Pooter' });
});

router.post('/', function(req, res)
{
    //here we want to take all the information form it into an object and then send that object off to the server
    //make a thing send the stuff win
    console.log('it did it');
    var socketSocket = new SocketConnector();

    var newUser;

    socketSocket.sendUser();
});

module.exports = router;
