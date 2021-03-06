import express from "express";
import api from "./routes/api";
import conn from "./db/mysql";
import session from "express-session";
var MySQLStore = require('express-mysql-session')(session);
import session_store_opts from "./session/storeOptions";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const sessionStore = new MySQLStore(session_store_opts);

let port = 8080;

app.use(session({
    key: "afaef!@#FAD",
    secret: "afawef@#!#ASfVJZjo",
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use("/api", api);
app.use("/", express.static(__dirname + "/../../client/build"));
// 이거 client 파일 연동하는거랑 eject는 공부해봐야할듯.

app.get("/test", (req, res) => {
  req.session.test= 1;
  const session = req.session.test;
  return res.json({
    session: session
  });
});

app.listen(port, () => {
    console.log("Express is listerning on Port, port");
});


