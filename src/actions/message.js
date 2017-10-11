var io=require('socket.io-client');
var socket = io();

export const join = (userName) =>(dispatch) => {
	socket.on('connect', function () {
        socket.emit('join', userName);
    });
}