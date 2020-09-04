"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _post = _interopRequireDefault(require("./post"));

var _auth = _interopRequireDefault(require("./auth"));

var _board = _interopRequireDefault(require("./board"));

var _boardlist = _interopRequireDefault(require("./boardlist"));

var _comment = _interopRequireDefault(require("./comment"));

var _sessionpractice = _interopRequireDefault(require("./sessionpractice"));

var router = _express["default"].Router();

router.use("/post", _post["default"]);
router.use("/auth", _auth["default"]);
router.use("/board", _board["default"]);
router.use("/boardlist", _boardlist["default"]);
router.use("/comment", _comment["default"]);
router.use("/session", _sessionpractice["default"]);
var _default = router;
exports["default"] = _default;