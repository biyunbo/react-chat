import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
var socket = io.connect('http://localhost:3000');
/*actions*/

/*组件*/

// @connect(
//     state => state,
//     dispatch => bindActionCreators({...indexList,...global}, dispatch)
// )
export default class List extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){
		
	}
	render() {
		return(
			<div>
				<div>111</div>
			</div>
		)
	}
}