"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setAuthToken = function setAuthToken(token) {
  if (token) {
    // Apply authorization token to every request if logged in
    _axios["default"].defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete _axios["default"].defaults.headers.common["Authorization"];
  }
};

var _default = setAuthToken;
exports["default"] = _default;