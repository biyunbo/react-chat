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
export default class List extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){
		console.log(this.props)
	}
	render() {
		return(
			<div>
				<div>111</div>
			</div>
		)
	}
}