"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/", function (req, res) {
  console.log(req.body.contents);
  return res.json({
    success: true
  });
});
router.get("/:id", function (req, res) {
  console.log("reading post : ", req.params.id);
  return res.json({
    index: req.params.id
  });
});
var _default = router;
exports["default"] = _default;