// 初始化状态
let Initialization = {
    userName : '',
    roomId : '',
    roomList : [{roomId:'默认房间'}],
    msgList : []
}

export function global(state = Initialization , action) {
	switch (action.type) {
		case 'USER_NAME':
			return Object.assign({},state,{
				userName : action.userName
			})
		case 'ROOM_ID':
			return Object.assign({},state,{
				roomId : action.roomId
			})
		case 'ADD_ROOM_ID':
			return Object.assign({},state,{
				roomList:[
					...state.roomList,
					{
						roomId : action.roomId
					}

				]
			})
		case 'MSG':
			return Object.assign({},state,{
				msgList:[
					...state.msgList,
					{
						msgList : action.msg
					}

				]
			})
		case 'MSGC':
			return Object.assign({},state,{
				msgList: action.msgC
			})
		default:
			return state
	}
}