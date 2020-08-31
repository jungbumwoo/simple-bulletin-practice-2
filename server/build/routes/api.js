"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _post = _interopRequireDefault(require("./post"));

var _auth = _interopRequireDefault(require("./auth"));

var _sessionpractice = _interopRequireDefault(require("./sessionpractice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use("/post", _post["default"]);
router.use("/auth", _auth["default"]);
router.use("/session", _sessionpractice["default"]);
var _default = router;
exports["default"] = _default;