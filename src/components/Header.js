import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/*actions*/

/*组件*/

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){
		console.log(this.props)
	}
	render() {
		return(
			<div className="header">
				<div>111</div>
			</div>
		)
	}
}