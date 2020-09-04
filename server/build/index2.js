"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _api = _interopRequireDefault(require("./routes/api"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _storeOptions = _interopRequireDefault(require("./session/storeOptions"));

var MySQLStore = require("express-mysql-session")(_expressSession["default"]);

var app = (0, _express["default"])();
var sessionStore = new MySQLStore(_storeOptions["default"]);
var port = 8080; //app.use(bodyParser());

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _expressSession["default"])({
  key: "sadkljsdaklj!",
  secret: "askldjaslkdj@",
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));
app.use("/api", _api["default"]); //SERVE STATIC FILES = REACT PROJECT

app.use("/", _express["default"]["static"](__dirname + "/../../client/build"));
app.use("/media", _express["default"]["static"](__dirname + "/media"));
app.get("/test", function (req, res) {
  var session = req.session.test;
  return res.json({
    session: session
  });
});
app.listen(port, function () {
  console.log("Express is listening on port", port);
});