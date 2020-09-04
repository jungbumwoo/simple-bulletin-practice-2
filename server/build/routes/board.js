"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _mysql = _interopRequireDefault(require("../db/mysql"));

var router = _express["default"].Router();

router.post("/", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var username, title, content, sql, post;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = req.session.token;
            title = req.body.title;
            content = req.body.content;
            sql = "SELECT id FROM user WHERE username=?";
            post = [username];
            _context.next = 7;
            return _mysql["default"].query(sql, post, function (err, results, fields) {
              if (err) {
                console.log(err);
                return res.json({
                  ok: false,
                  status: 400,
                  error: "db error"
                });
              } else {
                var user_id = results[0].id;
                var _sql = "INSERT INTO board(title, content, writer) VALUES (?,?,?)";
                var _post = [title, content, user_id];

                _mysql["default"].query(_sql, _post, function (err, results, fields) {
                  if (err) {
                    console.log(err);
                    return res.json({
                      ok: false,
                      status: 400,
                      error: "fail to write"
                    });
                  } else {
                    return res.json({
                      ok: false,
                      status: 200,
                      error: null
                    });
                  }

                  ;
                });
              }

              ;
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;