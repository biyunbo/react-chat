//用户名称
export const userName = (userName) => ({
	type: 'USER_NAME',
	userName
})

//添加房间列表
export const addRoomId = (roomId) => ({
	type: 'ADD_ROOM_ID',
	roomId
})

//房间ID
export const roomId = (roomId) => ({
	type: 'ROOM_ID',
	roomId
})

//清空消息
export const msgC = (msgC) => ({
	type: 'MSGC',
	msgC
})

//房间信息
export const roomInfo = (roomInfo) => ({
	type: 'ROOM_INFO',
	roomInfo
})

//加入房间
export const join = (userName,socket) =>(dispatch,getState) => {
	socket.on('connect', function () {
        socket.emit('join', userName);
    });
}

//离开房间
export const leave = (socket) =>(dispatch) => {
	socket.emit('leave');
}

//消息
export const msg = (msg) => ({
	type: 'MSG',
	msg
})

//侧边栏
export const side = (side) => ({
	type: 'SIDE',
	side
})