"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mysql = _interopRequireDefault(require("mysql"));

var router = _express["default"].Router();

router.get("/boardlist", function (req, res) {
  return res.json({
    hi: hi
  });
});
var _default = router;
exports["default"] = _default;