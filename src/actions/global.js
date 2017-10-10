import instance from 'utils/instance';

export const userName = (userName) => ({
	type: 'USER_NAME',
	userName
})

export const addRoomId = (roomId) => ({
	type: 'ROOM_ID',
	roomId
})