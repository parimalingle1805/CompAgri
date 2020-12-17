"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _authReducer = _interopRequireDefault(require("./authReducer"));

var _errorReducer = _interopRequireDefault(require("./errorReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  auth: _authReducer["default"],
  errors: _errorReducer["default"]
});

exports["default"] = _default;