"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mysql = _interopRequireDefault(require("mysql"));

var router = _express["default"].Router();

router.get("/token", function (req, res) {
  var user = req.session.token;
  var token = req.sessionID;
  return res.json({
    user: user,
    token: token
  });
});
router.post("/login", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var sql = "SELECT * FROM user WHERE username=?";
  var post = [username];
  console.log("post is : ".concat(post));

  _mysql["default"].query(sql, post, function (err, results, fields) {
    if (err) {
      console.log(err);
      return res.json({
        ok: false,
        error: "db error",
        status: 400
      });
    } else {
      var user_password = results[0].password;

      if (password === user_password) {
        req.session.token = username;
        return res.json({
          ok: true,
          error: null,
          status: 200
        });
      } else {
        return res.json({
          ok: false,
          error: "check again username and password",
          status: 400
        });
      }
    }
  });
});
router.post("/new", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var sql = "SELECT * FROM user WHERE username=?";
  console.log("post is : ".concat(post));
  var post = [username];

  _mysql["default"].query(sql, function (err, results, fields) {
    if (err) {
      console.log(err);
      return res.json({
        ok: false,
        error: "db error",
        status: 400
      });
    } else {
      if (results.length === 0) {
        var _sql = "INSERT INTO user (username, password) VALUES(?,?)";
        var _post = [username, password];

        _mysql["default"].query(_sql, _post, function (err, results, fields) {
          if (err) {
            console.log(err);
            return res.json({
              ok: false,
              error: "2 db error",
              status: 400
            });
          } else {
            return res.json({
              ok: true,
              error: null,
              status: 200
            });
          }
        });
      } else {
        return res.json({
          ok: false,
          error: "existing username",
          status: 400
        });
      }
    }
  });
});
router.get("/logout", function (req, res) {
  delete req.session.token;
  return res.json({
    ok: true,
    error: null,
    status: 200
  });
});
var _default = router;
exports["default"] = _default;