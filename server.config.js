var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);

var roomInfo = {};
var user = '';

io.sockets.on('connection', function (socket) {
	//获取当前房间id
  	var roomId = socket.request._query.roomId;
  	socket.on('join',function(userName){
		user = userName;
    	// 将用户昵称加入房间名单中
    	if (!roomInfo[roomId]) {
	     	roomInfo[roomId] = [];
	    }
    	roomInfo[roomId].push(user);
    	socket.join(roomId);    // 加入房间
    	// 通知房间内人员
    	//io.to(roomId).emit('sys', user + '加入了房间', roomInfo[roomId]);  
    	console.log(user + '加入了' + roomId);
    	//console.log(roomInfo);
	});
	socket.on('leave', function () {
		socket.emit('disconnect');
	});
	socket.on('disconnect', function () {
		// 从房间名单中移除
		var index = roomInfo[roomId].indexOf(user);
		if (index !== -1) {
			roomInfo[roomId].splice(index-1, 1);
		}
		socket.leave(roomId);    // 退出房间
		//io.to(roomId).emit('sys', user + '退出了房间', roomInfo[roomId]);
		console.log(user + '退出了' + roomId);
		//console.log(roomInfo)
	});

	// 接收用户消息,发送相应的房间
	socket.on('message', function (msg) {
		// 验证如果用户不在房间内则不给发送
		//console.log(msg,user)
		if (roomInfo[roomId].indexOf(user) === -1) {
			return false;
		}else{
			io.to(roomId).emit('msg',msg);
		}
	});

});
