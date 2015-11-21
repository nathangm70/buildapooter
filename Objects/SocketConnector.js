/**
 * Created by natha on 2015-11-19.
 */

var net = require('net');

module.exports = function() {
    return{

        sendUser: function(user) {
            var socket = new net.Socket();
            socket.connect(50000, 'localhost', function () {
                socket.write('1/n');
                socket.write(JSON.stringify(user) + '/n');
            });
            socket.on('data', function () {
                socket.destroy();
                return true;
            });
        },
        login: function(userInfo) {
            var socket = new net.Socket;
            socket.connect(50000, 'localhost', function(){
                socket.write('2\n');
                socket.write(JSON.stringify(userInfo) + '\n');
            });

        }
    }
};