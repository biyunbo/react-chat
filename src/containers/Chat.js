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

	}
	componentWillMount(){
		let {roomId} = this.props.match.params;
        var socket = io.connect(`localhost:3000`,{query:`roomId=${roomId}`});
        let {userName} = this.props.global
        this.props.join(userName,socket)
        socket.on('msg',this.msg);
	}
	send(){
        let {roomId} = this.props.match.params;
        var socket = io.connect(`localhost:3000`,{query:`roomId=${roomId}`});
		let value = this.myvalue.value
        let {userName} = this.props.global
        let data = {userName:userName,msg:value}
        socket.send(data);
        this.myvalue.value = '';
	}
    msg(data){
        this.props.msg(data)
    }
	render() {
        var {msgList,userName} = this.props.global;
		return(
			<div className="chat">
				<Header title="登录" leftto="fanhui" {...this.props}/>
				<div className="chat-main">
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
			</div>
		)
	}
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    componentWillMount() {
        //组件挂载前触发此函数

    }
    handleClick() {
        //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
        // this.props.history.push('/')
        history.go(-1);
        let {roomId} = this.props.match.params;
        var socket = io.connect(`localhost:3000`,{query:`roomId=${roomId}`});
        let {userName} = this.props.global
        this.props.leave(userName,socket)
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
                <div className="gengduo">更多</div>
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