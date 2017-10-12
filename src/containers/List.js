import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/*actions*/
import * as global from 'actions/global';

/*组件*/

@connect(
    state => state,
    dispatch => bindActionCreators({...global}, dispatch)
)
export default class List extends React.Component {
	constructor(props) {
		super(props);
        this.addroom = this.addroom.bind(this);
	}
	componentWillMount(){

	}
	addroom(){
		if(this.myvalue.value != ""){
			let roomId = this.myvalue.value;
			this.props.addRoomId(roomId);
			this.props.history.push(`/Chat/${roomId}`)
		}
	}
	render() {
		let {roomList} = this.props.global
		console.log(roomList)
		return(
			<div className="list">
				<div className='search'>
					<input placeholder="请输入房间ID" ref={(ref) => this.myvalue = ref} />
					<div className="join" onClick={this.addroom}>加入房间</div>
					<div className="list-top">房间列表</div>
				</div>
				<div className="list-z">
					{
						roomList.map((ele, index) => {
						    return (
						        <Li key={index} {...ele} />
						    )
						})
					}
				</div>
			</div>
		)
	}
}

class Li extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let {roomId} = this.props
		return(
			<div className="li">
				<div className="name">{roomId}</div>
				<Link to={`/chat/${roomId}`} className="go">进入</Link>
			</div>
		)
	}
}