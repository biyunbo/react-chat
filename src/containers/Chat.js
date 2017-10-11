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
export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.send = this.send.bind(this)
	}
	componentWillMount(){
		let {roomId} = this.props.match.params;
		var socket = io.connect(`localhost:3000`,{query:`roomId=${roomId}`});
	}
	send(){
		
	}
	render() {
		return(
			<div className="chat">
				<Header title="登录" leftto="fanhui"/>
				<div className="chat-main">

				</div>
				<div className="send">
					<input ref={(ref) => this.myvalue = ref} />
					<div className="send-in">发送</div>	
				</div>
			</div>
		)
	}
}

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        //组件挂载前触发此函数
    }
    componentWillReceiveProps(newProps) {
        //props改变触发此函数
    }
    handleClick() {
        //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
        // this.props.history.push('/')
        history.go(-1);
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
            </div>     
        )
    }
}

