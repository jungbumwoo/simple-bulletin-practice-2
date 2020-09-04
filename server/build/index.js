"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _api = _interopRequireDefault(require("./routes/api"));

var _mysql = _interopRequireDefault(require("./db/mysql"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _storeOptions = _interopRequireDefault(require("./session/storeOptions"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var MySQLStore = require('express-mysql-session')(_expressSession["default"]);

_dotenv["default"].config();

var app = (0, _express["default"])();
var sessionStore = new MySQLStore(_storeOptions["default"]);
var port = 8080;
app.use((0, _expressSession["default"])({
  key: "afaef!@#FAD",
  secret: "afawef@#!#ASfVJZjo",
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use("/api", _api["default"]);
app.use("/", _express["default"]["static"](__dirname + "/../../client/build")); // 이거 client 파일 연동하는거랑 eject는 공부해봐야할듯.

app.get("/test", function (req, res) {
  req.session.test = 1;
  var session = req.session.test;
  return res.json({
    session: session
  });
});
app.listen(port, function () {
  console.log("Express is listerning on Port, port");
});