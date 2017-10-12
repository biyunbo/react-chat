// 初始化状态
let Initialization = {
    userName : '',
    roomId : '',
    roomInfo : null,
    roomList : [{roomId:'默认房间'}],
    msgList : [],
    side : false
}

export function global(state = Initialization , action) {
	switch (action.type) {
		//用户名称
		case 'USER_NAME':
			return Object.assign({},state,{
				userName : action.userName
			})
		//房间ID
		case 'ROOM_ID':
			return Object.assign({},state,{
				roomId : action.roomId
			})
		//添加房间列表
		case 'ADD_ROOM_ID':
			return Object.assign({},state,{
				roomList:[
					...state.roomList,
					{
						roomId : action.roomId
					}

				]
			})
		//房间信息
		case 'ROOM_INFO':
			return Object.assign({},state,{
				roomInfo : action.roomInfo
			})
		//消息列表
		case 'MSG':
			return Object.assign({},state,{
				msgList:[
					...state.msgList,
					{
						msgList : action.msg
					}

				]
			})
		//清空消息
		case 'MSGC':
			return Object.assign({},state,{
				msgList: action.msgC
			})
		//侧边栏
		case 'SIDE':
			return Object.assign({},state,{
				side: action.side
			})
		default:
			return state
	}
}