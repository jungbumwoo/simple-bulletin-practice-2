"use strict";

var _express = _interopRequireDefault(require("express"));

var _api = _interopRequireDefault(require("./routes/api"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mysql = _interopRequireDefault(require("./db/mysql"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FileStore = require('session-file-store')(_expressSession["default"]);

_dotenv["default"].config();

var app = (0, _express["default"])();
var port = 8080;
app.use((0, _expressSession["default"])({
  secret: "afawef@#!#ASfVJZjo",
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}));
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use("/api", _api["default"]);
var sql = "SELECT * FROM test";

_mysql["default"].query(sql, function (err, results, fields) {
  if (err) console.log(err);
  console.log(results);
});

app.listen(port, function () {
  console.log("Express is listerning on Port, port");
});