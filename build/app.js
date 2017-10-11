webpackJsonp([1],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(145);


/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_thunk__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_redux__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_hot_loader__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_hot_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_hot_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__App__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_history_createBrowserHistory__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_history_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reducers_index__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_logger__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_isEmpty__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_isEqual__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_debounce__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_isArray__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash_isArray__);













var FastClick = __webpack_require__(320);

//按模块导入lodash，可以有效减小vendor.js的大小





window.isEmpty = __WEBPACK_IMPORTED_MODULE_12_lodash_isEmpty___default.a;
window.isEqual = __WEBPACK_IMPORTED_MODULE_13_lodash_isEqual___default.a;
window.debounce = __WEBPACK_IMPORTED_MODULE_14_lodash_debounce___default.a;
window.isArray = __WEBPACK_IMPORTED_MODULE_15_lodash_isArray___default.a;

var history = __WEBPACK_IMPORTED_MODULE_9_history_createBrowserHistory___default()();
var middleware = Object(__WEBPACK_IMPORTED_MODULE_6_react_router_redux__["routerMiddleware"])(history);
var logger = Object(__WEBPACK_IMPORTED_MODULE_11_redux_logger__["createLogger"])();

//解决移动端300毫秒延迟
FastClick.attach(document.body);
var middlewares = [__WEBPACK_IMPORTED_MODULE_5_redux_thunk___default.a, middleware];

var store = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_10__reducers_index__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension__["composeWithDevTools"])(__WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"].apply(undefined, middlewares)));
// console.log(store)
var render = function render(Component) {
    return __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_react_hot_loader__["AppContainer"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_redux__["a" /* Provider */],
            { store: store },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, null)
        )
    ), document.getElementById('root'));
};

render(__WEBPACK_IMPORTED_MODULE_8__App__["a" /* default */]);

if (false) {
    module.hot.accept('./App', function () {
        render(App);
    });
}

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_createHashHistory__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_history_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_less__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__app_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_actions_global__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AsyncComponent__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_containers_Home__ = __webpack_require__(316);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var history = __WEBPACK_IMPORTED_MODULE_4_history_createHashHistory___default()();

/*
 全局导入less
 */






// import {Footer} from 'components/Common/Index';

var List = Object(__WEBPACK_IMPORTED_MODULE_7__AsyncComponent__["a" /* asyncComponent */])(function () {
    return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 389));
});

var App = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(function (state) {
    return state;
}, function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_6_actions_global__), dispatch);
}), _dec(_class = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["a" /* HashRouter */],
                { history: history },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Route */], { render: function render(_ref) {
                        var location = _ref.location;

                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { key: location.pathname, className: 'box' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Route */], { location: location, exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_8_containers_Home__["a" /* default */] }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Route */], { location: location, path: '/List', component: List })
                        );
                    } })
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class);


/***/ }),

/***/ 294:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


//封装好的get和post接口，调用方法情况action文件
var instance = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    baseURL: 'https://cnodejs.org/api/v1', //设置默认api路径
    timeout: 5000, //设置超时时间
    headers: { 'content-type': 'application/json; charset=utf-8' }
});

/* unused harmony default export */ var _unused_webpack_default_export = (instance);

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asyncComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var asyncComponent = function asyncComponent(loadComponent) {
    return function (_React$Component) {
        _inherits(AsyncComponent, _React$Component);

        function AsyncComponent() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, AsyncComponent);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AsyncComponent.__proto__ || Object.getPrototypeOf(AsyncComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                Component: null
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(AsyncComponent, [{
            key: 'componentWillMount',
            value: function componentWillMount() {
                var _this2 = this;

                if (this.hasLoadedComponent()) {
                    return;
                }

                loadComponent().then(function (module) {
                    return module.default;
                }).then(function (Component) {
                    _this2.setState({ Component: Component });
                }).catch(function (err) {
                    console.error('Cannot load component in <AsyncComponent />');
                    throw err;
                });
            }
        }, {
            key: 'hasLoadedComponent',
            value: function hasLoadedComponent() {
                return this.state.Component !== null;
            }
        }, {
            key: 'render',
            value: function render() {
                var Component = this.state.Component;

                return Component ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, this.props) : null;
            }
        }]);

        return AsyncComponent;
    }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
};

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_actions_global__ = __webpack_require__(78);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/*actions*/


/*组件*/

var Home = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(function (state) {
	return state;
}, function (dispatch) {
	return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_4_actions_global__), dispatch);
}), _dec(_class = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(Home, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			console.log(this.props);
		}
	}, {
		key: 'handleClick',
		value: function handleClick() {
			var userName = this.myvalue.value;
			this.props.userName(userName);
			this.props.history.push('/List');
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'home' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D', ref: function ref(_ref) {
						return _this2.myvalue = _ref;
					} }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'login', onClick: this.handleClick },
					'\u767B\u5F55'
				)
			);
		}
	}]);

	return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class);


/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__(318);





//注册reducer，每个自定义的reducer都要来这里注册！！！不注册会报错。
var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  routing: __WEBPACK_IMPORTED_MODULE_1_react_router_redux__["routerReducer"],
  /* your reducers */
  global: __WEBPACK_IMPORTED_MODULE_2__global__["a" /* global */]
});

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = global;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 初始化状态
var Initialization = {
	userName: '',
	roomList: [{ roomId: '1' }]
};

function global() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Initialization;
	var action = arguments[1];

	switch (action.type) {
		case 'USER_NAME':
			return Object.assign({}, state, {
				userName: action.userName
			});
		case 'ROOM_ID':
			return Object.assign({}, state, {
				roomList: [].concat(_toConsumableArray(state.roomList), [{
					roomId: action.roomId
				}])
			});
		default:
			return state;
	}
}

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userName", function() { return userName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRoomId", function() { return addRoomId; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_instance__ = __webpack_require__(295);


var userName = function userName(_userName) {
	return {
		type: 'USER_NAME',
		userName: _userName
	};
};

var addRoomId = function addRoomId(roomId) {
	return {
		type: 'ROOM_ID',
		roomId: roomId
	};
};

/***/ })

},[144]);
//# sourceMappingURL=app.js.map