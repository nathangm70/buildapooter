/**
 * Created by nathaniel Murray on 2015-11-19.
 */

var net = require('net');

module.exports = function() {
    return {
        getSocket: function() {
            var socket = new net.Socket();
            socket.connect(50000, '10.48.15.35');
            //socket.connect(50000, 'localhost');
            return socket;
        }
    }
};
