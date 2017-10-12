import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
/*actions*/
import * as global from 'actions/global';

/*组件*/


@connect(
    state => state,
    dispatch => bindActionCreators({...global}, dispatch)
)
export default class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.send = this.send.bind(this)
        this.msg = this.msg.bind(this)
        this.info = this.info.bind(this)
        this.side = this.side.bind(this)
        let {roomId} = props.match.params;
        this.socket = io.connect(`localhost:3000`,{query:`roomId=${roomId}`});
	}
	componentWillMount(){
        let {userName} = this.props.global
        let {roomId} = this.props.match.params;
        this.props.roomId(roomId);
        this.props.join(userName,this.socket)
        this.socket.on('msg',this.msg);
        this.socket.on('info',this.info);
	}
	componentWillReceiveProps(newProps) {
        //props改变触发此函数
        if (newProps.global.roomId !== this.props.global.roomId) {
        	var msg = [];
            this.props.msgC(msg);
        }
    }
	send(){
		let value = this.myvalue.value
        let {userName} = this.props.global
        let data = {userName:userName,msg:value}
        if(value != ""){
        	this.socket.send(data);
        }
        this.myvalue.value = '';
	}
    info(roomPer){
        this.props.roomInfo(roomPer);
    }
    side(e){
        if(this.props.global.side){
            this.props.side(false);
        }else{
            this.props.side(true);
        }
    }
    msg(data){
        this.props.msg(data);
        this.mylistdiv.scrollTop = this.mylistdiv.scrollHeight
    }
	render() {
        var {msgList,userName,roomId} = this.props.global;
		return(
			<div className="chat">
				<Header title={roomId} leftto="fanhui" {...this.props} socket={this.socket} side={this.side}/>
				<div className="chat-main" ref={(ref) => this.mylistdiv = ref}>
                    {
                        msgList.map((ele,index) => {
                            return (
                                <Chatli key={index} {...ele} user={userName}/>
                            )
                        })
                    }
				</div>
				<div className="send">
					<input ref={(ref) => this.myvalue = ref} />
					<div className="send-in" onClick={this.send}>发送</div>	
				</div>
                <Side {...this.props} side={this.side} />
			</div>
		)
	}
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        // this.props.history.push('/')
        var {socket} = this.props;
        history.go(-1);
        this.props.leave(socket)
    }
    render() {
        let { title,leftto } = this.props;
        let left = null;
        if(leftto == "kong"){
            left = (<div></div>)
        }else if(leftto == "fanhui"){
            left = (
                <div className="fanhui" onClick={this.handleClick}>
                    <i className="iconfont icon-fanhui"></i>
                </div>
            )
        }
        return(
            <div className="top">
                {left}
                <div className="title">{title}</div>
                <div className="gengduo" onClick={this.props.side}>更多</div>
            </div>     
        )
    }
}

class Chatli extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {userName,msg} = this.props.msgList
        let {user} = this.props
        var name = '';
        var cmsg = '';
        if(user == userName){
            name = 'name1'
            cmsg = 'cmsg1'
        }else{
            name = 'name'
            cmsg = 'cmsg'
        }
        return(
            <div className="li clear">
                <div className={name}>
                    {userName}
                </div>
                <div className={cmsg}>
                    {msg}
                </div>
            </div>
        )
    }
}

class Side extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {roomInfo,side} = this.props.global;
        console.log(roomInfo)
        let sidelist = '';
        let sideb ='';
        if(side){
            sidelist = 'side-list'
            sideb = 'side'
        }else{
            sidelist = 'side1'
            sideb = 'side1'
        }
        return(
            <div>
                <div className={sideb} onClick={(e) => this.props.side(e)}></div>
                <div className={sidelist}>
                    {
                        roomInfo == null ? <div></div> : <Sideli roomInfo={roomInfo}/>
                    }
                </div>
            </div>
        )
    }
}

class Sideli extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {roomInfo} = this.props
        return(
            <div className="sideli">
                <div className="sideli-top">房间在线人数：{roomInfo.length}</div>
                <div className="roomPer">房间在线成员</div>
                <div className="sideli-box">
                    {
                        roomInfo.map((ele,index) => {
                            return(
                                <div className="box-li" key={index}>{ele}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}