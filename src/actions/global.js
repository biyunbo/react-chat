import instance from 'utils/instance';


export const userName = (userName) => ({
	type: 'USER_NAME',
	userName
})

export const addRoomId = (roomId) => ({
	type: 'ADD_ROOM_ID',
	roomId
})

export const roomId = (roomId) => ({
	type: 'ROOM_ID',
	roomId
})

export const msgC = (msgC) => ({
	type: 'MSGC',
	msgC
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