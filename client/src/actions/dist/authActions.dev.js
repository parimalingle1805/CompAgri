"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logoutUser = exports.setUserLoading = exports.setCurrentUser = exports.loginUser = exports.registerUser = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _setAuthToken = _interopRequireDefault(require("../utils/setAuthToken"));

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Register User
var registerUser = function registerUser(userData, history) {
  return function (dispatch) {
    _axios["default"].post("/api/users/register", userData).then(function (res) {
      return history.push("/login");
    }) // re-direct to login on successful register
    ["catch"](function (err) {
      return dispatch({
        type: _types.GET_ERRORS,
        payload: err.response.data
      });
    });
  };
}; // Login - get user token


exports.registerUser = registerUser;

var loginUser = function loginUser(userData) {
  return function (dispatch) {
    _axios["default"].post("/api/users/login", userData).then(function (res) {
      // Save to localStorage
      // Set token to localStorage
      var token = res.data.token;
      localStorage.setItem("jwtToken", token); // Set token to Auth header

      (0, _setAuthToken["default"])(token); // Decode token to get user data

      var decoded = (0, _jwtDecode["default"])(token); // Set current user

      dispatch(setCurrentUser(decoded));
    })["catch"](function (err) {
      return dispatch({
        type: _types.GET_ERRORS,
        payload: err.response.data
      });
    });
  };
}; // Set logged in user


exports.loginUser = loginUser;

var setCurrentUser = function setCurrentUser(decoded) {
  return {
    type: _types.SET_CURRENT_USER,
    payload: decoded
  };
}; // User loading


exports.setCurrentUser = setCurrentUser;

var setUserLoading = function setUserLoading() {
  return {
    type: _types.USER_LOADING
  };
}; // Log user out


exports.setUserLoading = setUserLoading;

var logoutUser = function logoutUser() {
  return function (dispatch) {
    // Remove token from local storage
    localStorage.removeItem("jwtToken"); // Remove auth header for future requests

    (0, _setAuthToken["default"])(false); // Set current user to empty object {} which will set isAuthenticated to false

    dispatch(setCurrentUser({}));
  };
};

exports.logoutUser = logoutUser;