var express = require('express');
var router = express.Router();
var SocketConnector = require('../Objects/SocketConnector');

var User = require('../Objects/User');

/* GET home page. */
router.get('/', function(req, res, next)
{
    res.render('createAccount', { title: 'Build A Pooter' , passFail: false});
});

router.post('/', function(req, res)
{
    //here we want to take all the information form it into an object and then send that object off to the server
    //make a thing send the stuff win
    if(req.body.password == req.body.confirmPass) {
        var socketConnector = new SocketConnector();
        //create our user object and then put all the values into it
        var user = new User();
        user.userName = req.body.userName;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = req.body.passWord;

        var socket = socketConnector.getSocket();
        socket.write('1\n');
        socket.write(JSON.stringify(user) + '\n');
        socket.on('data', function(data){
            //read some data and then destroy our socket or something like that
            //the data
            console.log('we got data lets checkit');
            console.log('Data: ' + data);

            //do a thing where we check if it was added or not then we destroy it and return that
            if(data == 'success'){
                //we made an account
            } else {
                //we didn't make an account do some other stuff here
                //have dang send back an account creation failure
            }

            socket.destroy();
        });
    } else {
        //they goofed up the password post it back
        //display a passwords dont match message
        res.render('createAccount', { title: 'Build A Pooter', passFail: true});
    }

});

module.exports = router;
