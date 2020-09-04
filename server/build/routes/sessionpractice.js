"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _template = _interopRequireDefault(require("../lib/template"));

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
  req.session.destroy(function (err) {
    res.redirect("/api/session/login");
  });
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