import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {NavLink, Route, HashRouter as Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
const history = createHistory()

/*
 全局导入less
 */
import './app.less'
import './iconfont/iconfont.css'


import * as global from 'actions/global';
import { asyncComponent } from './AsyncComponent';

import Home from 'containers/Home';
// import {Footer} from 'components/Common/Index';

const List = asyncComponent(() => import(/* webpackChunkName: "List" */ "./containers/List"))
const Chat = asyncComponent(() => import(/* webpackChunkName: "Chat" */ "./containers/Chat"))


@connect (
    state => state,
    dispatch => bindActionCreators({...global}, dispatch)
)
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        
    }
    render() {
      return (
        <Router history={history}>
            <Route render={({ location }) => {
                return(
                  <div key={location.pathname} className="box">
                      <Route location={location} exact path="/" component={Home} />
                      <Route location={location} path="/List" component={List} />
                      <Route location={location} path="/Chat/:roomId" component={Chat} />
                  </div>
                )
            }}/>
        </Router>
      );
  }
}