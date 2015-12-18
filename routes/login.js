//Created by Nathaniel Murray

var express = require('express');
var router = express.Router();

var SocketConnector = require('../Objects/SocketConnector');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Build A Pooter' , user: req.session.user});
});

router.post('/', function(req, res){
    var socketConnector = new SocketConnector();
    //take the user credntials store them in a json object and send that to the server
    //grab our information
    var userInfo = {userName: req.body.UserName, password: req.body.Password};
    //now that we have our object lets send this bad boy over
    var socket = socketConnector.getSocket();
    socket.write('2\n');
    socket.write(JSON.stringify(userInfo) + '\n');
    socket.write('yes\n');
    socket.on('data', function(data){
        console.log('Data: ' + data);

        switch( data.toString() ) {
            case '-1':
                //login failed
                res.render('login', {title: 'Build A Pooter', user: req.session.user});
                break;
            default :
                req.session.user = JSON.parse(data);
                res.render('index', {title: 'Build A Pooter', user: req.session.user});
                break;
        }
    });
});

module.exports = router;
