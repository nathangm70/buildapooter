/**
 * Created by natha on 2015-12-01.
 */

var express = require('express');
var router = express.Router();

var SocketConnetor = require('../Objects/SocketConnector');

router.post('/', function(req, res){
    //take the build from the session and then submit it to the database
    var socketConnector = new SocketConnetor();
    var socket = socketConnector.getSocket();

    req.session.build.name = req.body.buildName;

    socket.write('4\n');
   /* socket.write(req.session.user.email.toString() + '\n');
    socket.write(req.session.build.name.toString() + '\n');
    console.log(JSON.stringify(req.session.build.computercase));
    socket.write(JSON.stringify(req.session.build.computercase) + '\n');
    socket.write(JSON.stringify(req.session.build.processor) + '\n');
    socket.write(JSON.stringify(req.session.build.motherboard) + '\n');
    socket.write(JSON.stringify(req.session.build.ram) + '\n');
    socket.write(JSON.stringify(req.session.build.powersupply) + '\n');
    socket.write(JSON.stringify(req.session.build.graphicscard) + '\n');
    socket.write(JSON.stringify(req.session.build.harddrive) + '\n');
    socket.write(JSON.stringify(req.session.build.monitor) + '\n');
    socket.write(JSON.stringify(req.session.build.keyboard) + '\n');
    socket.write(JSON.stringify(req.session.build.webcam) + '\n');
    socket.write(JSON.stringify(req.session.build.headset) + '\n');
    socket.write(JSON.stringify(req.session.build.computermouse) + '\n');*/



    socket.write(JSON.stringify(req.session.build) + '\n');
    console.log(JSON.stringify(req.session.build));
    socket.write(req.session.user.email.toString() + '\n');



    socket.on('data', function(data){
       //do some things
        console.log('got some data');
        //we got data
        res.render('index', { title: 'Build A  Pooter' , user: req.session.user});
    });
});


module.exports = router;