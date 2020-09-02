"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _template = _interopRequireDefault(require("../lib/template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = _express["default"].Router();

var authData = {
  email: 'jungbum@yahoo.goobye',
  password: '123321',
  nickname: 'bumbum'
};

function authIsOwner(req, res) {
  if (req.session.is_logined) {
    return true;
  } else {
    return false;
  }
}

function authStatusUI(req, res) {
  var authStatusUI = "<a href=\"/api/session/login\">Login</a>";

  if (authIsOwner(req, res)) {
    authStatusUI = "".concat(req.session.nickname, " | <a href=\"/api/session/logout\">logout</a>");
  }

  return authStatusUI;
}

router.post("/login_process", function (req, res) {
  var post = req.body;
  var email = post.email;
  var password = post.pwd;

  if (email === authData.email && password === authData.password) {
    req.session.is_logined = true;
    req.session.nickname = authData.nickname;
    req.session.save(function () {
      res.redirect("/api/session/login");
    });
  } else {
    res.send("Who are you?");
  }
});
router.get("/login", function (req, res) {
  var title = "Hi this is Title for Session Practice";
  var list = "list~~";
  var control = "control!!";
  var body = "\n            <h1><a href=\"\">WEB - Login</a></h1>\n            <h2>".concat(title, "</h2>\n            <form action=\"/api/session/login_process\" method=\"post\">\n                <p><input type=\"text\" name=\"email\" placeholder=\"email\"/></p>\n                <p><input type=\"password\" name=\"pwd\" placeholder=\"password\"/></p>\n                <p>\n                    <input type=\"submit\" value=\"login\">\n                </p>\n            </form>\n    ");

  var html = _template["default"].HTML(title, list, body, control, authStatusUI(req, res));

  res.send(html);
});
router.get("/logout", function (req, res) {
  req.session.is_logined = false;
  req.session.nickname = undefined;
  res.redirect("/api/session/login");
});
/*
router.get("/login", (req, res)=> {
    let html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Title. Session practice for auth</title>
            <meta charset="utf-8">
        </head>
        <body>
            <a href="/api/session/login">Login</a>
            <h1><a href="">WEB - Login</a></h1>
            <form action="/api/session/login_process" method="post">
                <p><input type="text" name="email" placeholder="email"/></p>
                <p><input type="password" name="pwd" placeholder="password"/></p>
                <p>
                    <input type="submit" value="login">
                </p>
            </form>
        </body>
    </html>
    `
    res.send(html);
})
*/

var _default = router;
exports["default"] = _default;