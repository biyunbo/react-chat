import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
/*actions*/
import * as global from 'actions/global';

/*组件*/
import {Header,Chatli,Side} from 'components/Chat/index'

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
        this.socket = io.connect(`101.132.102.89:3000`,{query:`roomId=${roomId}`});
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

