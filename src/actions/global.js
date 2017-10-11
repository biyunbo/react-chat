import instance from 'utils/instance';


export const userName = (userName) => ({
	type: 'USER_NAME',
	userName
})

export const addRoomId = (roomId) => ({
	type: 'ROOM_ID',
	roomId
})

//加入房间
export const join = (userName,socket) =>(dispatch,getState) => {
	socket.on('connect', function () {
        socket.emit('join', userName);
    });
}

export const leave = (userName,socket) =>(dispatch) => {
	socket.emit('leave',userName);
}

//消息
export const msg = (smg) => ({
	type: 'MSG',
	smg
})