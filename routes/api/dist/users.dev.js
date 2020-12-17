"use strict";

//routes/users.js
var express = require("express");

var router = express.Router();

var bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken");

var keys = require("../../config/keys"); // Load input validation


var validateRegisterInput = require("../../validation/register");

var validateLoginInput = require("../../validation/login"); // Load User model


var User = require("../../models/User"); // @route POST api/users/register
// @desc Register user
// @access Public


router.post("/register", function (req, res) {
  // Form validation
  var _validateRegisterInpu = validateRegisterInput(req.body),
      errors = _validateRegisterInpu.errors,
      isValid = _validateRegisterInpu.isValid; // Check validation


  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
    email: req.body.email
  }).then(function (user) {
    if (user) {
      return res.status(400).json({
        email: "Email already exists"
      });
    } else {
      var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }); // Hash password before saving in database

      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(function (user) {
            return res.json(user);
          })["catch"](function (err) {
            return console.log(err);
          });
        });
      });
    }
  });
}); // @route POST api/users/login
// @desc Login user and return JWT token
// @access Public

router.post("/login", function (req, res) {
  // Form validation
  var _validateLoginInput = validateLoginInput(req.body),
      errors = _validateLoginInput.errors,
      isValid = _validateLoginInput.isValid; // Check validation


  if (!isValid) {
    return res.status(400).json(errors);
  }

  var email = req.body.email;
  var password = req.body.password; // Find user by email

  User.findOne({
    email: email
  }).then(function (user) {
    // Check if user exists
    if (!user) {
      return res.status(404).json({
        emailnotfound: "Email not found"
      });
    } // Check password


    bcrypt.compare(password, user.password).then(function (isMatch) {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        var payload = {
          id: user.id,
          name: user.name
        }; // Sign token

        jwt.sign(payload, keys.secretOrKey, {
          expiresIn: 31556926 // 1 year in seconds

        }, function (err, token) {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        return res.status(400).json({
          passwordincorrect: "Password incorrect"
        });
      }
    });
  });
});
module.exports = router;