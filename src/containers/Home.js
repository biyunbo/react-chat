import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
		this.handleClick = this.handleClick.bind(this)
	}
	componentWillMount(){
		console.log(this.props)

	}
	handleClick(){
		let userName = this.myvalue.value
		if(userName != ''){
			this.props.userName(userName);
			this.props.history.push('/List')
		}
	}
	render() {
		return(
			<div className="home">
				<div className="input">
					<input placeholder="请输入用户名(不能为空)" ref={(ref) => this.myvalue = ref} />
				</div>
				<div className="login" onClick={this.handleClick}>登录</div>
			</div>
		)
	}
}