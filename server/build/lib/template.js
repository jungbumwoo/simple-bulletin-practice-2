"use strict";

module.exports = {
  HTML: function HTML(title, list, body, control) {
    var authStatusUI = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "<a href=\"/api/session/login\">login</a>";
    return "\n        <!doctype html>\n        <html>\n        <head>\n            <title>WEB1 - ".concat(title, "</title>\n            <meta charset=\"utf-8\">\n        <head>\n        <body>\n            ").concat(authStatusUI, "\n            <h1><a href=\"/\">WEB</a></h1>\n            ").concat(list, "\n            ").concat(control, "\n            ").concat(body, "\n        </body>\n        </html>\n        </html>\n        ");
  }
};