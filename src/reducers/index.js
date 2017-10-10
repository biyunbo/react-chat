import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import { global } from './global';


//注册reducer，每个自定义的reducer都要来这里注册！！！不注册会报错。
const rootReducer = combineReducers({
  routing: routerReducer,
  /* your reducers */
  global,
});

export default rootReducer;
