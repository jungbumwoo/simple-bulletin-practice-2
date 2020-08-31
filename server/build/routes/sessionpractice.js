"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _expressSession = _interopRequireDefault(require("express-session"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = _express["default"].Router();

var authData = {
  email: 'jungbum@yahoo.goobye',
  password: '123321',
  nickname: 'bumbum'
};
router.post("/login_process", function (req, res) {
  var post = req.body;
  var email = post.email;
  var password = post.pwd;

  if (email === authData.email && password === authData.password) {
    req.session.is_logined = true;
    req.seesion.nickname = authData.nickname;
    req.session.save(function () {
      res.send("Welcome!");
    });
  } else {
    res.send("Who are you?");
  }
});
router.get("/login", function (req, res) {
  var html = "\n    <!DOCTYPE html>\n    <html>\n        <head>\n            <title>Title. Session practice for auth</title>\n            <meta charset=\"utf-8\">\n        </head>\n        <body>\n            <a href=\"/api/session/login\">Login</a>\n            <h1><a href=\"\">WEB - Login</a></h1>\n            <form action=\"/api/session/login_process\" method=\"post\">\n                <p><input type=\"text\" name=\"email\" placeholder=\"email\"/></p>\n                <p><input type=\"password\" name=\"pwd\" placeholder=\"password\"/></p>\n                <p>\n                    <input type=\"submit\" value=\"login\">\n                </p>\n            </form>\n        </body>\n    </html>\n    ";
  res.send(html);
});
var _default = router;
exports["default"] = _default;