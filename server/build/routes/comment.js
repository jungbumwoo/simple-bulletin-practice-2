"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mysql = _interopRequireDefault(require("../db/mysql"));

var router = _express["default"].Router();

router.post("/", function (req, res) {
  if (!req.session.token) {
    return res.json({
      ok: false,
      status: 400,
      error: "unauthorized"
    });
  }

  var userId = req.session.token;
  var bbsId = req.params.id;
  var message = req.body.message;
  var sql = "INSERT INTO comment(writer, board, message) VALUES (?,?,?)";
  var post = [userId, bbsId, message];

  _mysql["default"].query(sql, post, function (err, results, fields) {
    if (err) {
      console.log(err);
      return res.json({
        ok: false,
        status: 400,
        error: "db error"
      });
    }

    return res.json({
      ok: true,
      status: 200,
      error: null
    });
  });
});
var _default = router;
exports["default"] = _default;