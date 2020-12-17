"use strict";

var express = require("express");

var mongoose = require("mongoose");

var bodyParser = require("body-parser");

var passport = require("passport");

var path = require('path');

var users = require("./routes/api/users");

var app = express(); // Bodyparser middleware

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json()); // DB Config

var db = require("./config/keys").mongoURI; // Connect to MongoDB


mongoose.connect(db, {
  useNewUrlParser: true
}).then(function () {
  return console.log("MongoDB successfully connected");
})["catch"](function (err) {
  return console.log(err);
}); // Passport middleware

app.use(passport.initialize()); // Passport config

require("./config/passport")(passport); // Routes


app.use("/api/users", users); //serve static assets

if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express["static"]('client/build'));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

var port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, function () {
  return console.log("Server up and running on port ".concat(port, " !"));
});