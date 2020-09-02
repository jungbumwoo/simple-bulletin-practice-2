import express from "express";
import api from "./routes/api";
import dotenv from "dotenv";
import conn from "./db/mysql";
import session from "express-session";
var MySQLStore = require('session-mysql-store')(session);
import session_store_opts from "./session/options";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const sessionStore = new MySQLStore(session_store_opts);

let port = 8080;

app.use(session({
    key: "afaef!@#FAD",
    secret: "afawef@#!#ASfVJZjo",
    resave: false,
    saveUninitialized: true,
    store: sessionStore
}));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use("/api", api);


let sql = "SELECT * FROM test";
conn.query(sql, (err, results, fields) => {
    if (err) console.log(err);
    console.log(results);
});
app.listen(port, () => {
    console.log("Express is listerning on Port, port");
});


