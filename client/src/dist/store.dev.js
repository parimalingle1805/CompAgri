"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reducers = _interopRequireDefault(require("./reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};
var middleware = [_reduxThunk["default"]];
var store = (0, _redux.createStore)(_reducers["default"], initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(void 0, middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
var _default = store;
exports["default"] = _default;