/**
 * Created by natha on 2015-11-19.
 */

var net = require('net');

module.exports = function() {
    return{
        sendUser: function(user) {
            var finished = false;
            var socket = new net.Socket();
            socket.connect(50000, 'localhost', function () {
                socket.write('1/n');
                socket.write(JSON.stringify(user) + '/n');
            });
            socket.on('data', function () {
                socket.destroy();
                finished = true;
            });
            var tries = 0;
            while( !finished ){
                //for now just retry like 10000 times before giving up
                tries++;
                if(giveUp(tries)){
                    finished = true;
                }
            }


            //check the response for now just return true
            return true;
        },
        login: function(userInfo) {
            var socket = new net.Socket;
            socket.connect(50000, 'localhost', function(){
                socket.write('2\n');
                socket.write(JSON.stringify(userInfo) + '\n');
            });
            socket.on('data', function(){
                socket.destroy();
                return true;
            });
        }
    }
};



function giveUp(tries) {
    if (tries > 10000) {
        return true;
        console.log('gave up');
    }
    else{
        return false;
    }
}
