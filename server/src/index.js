import express from "express";
import api from "./routes/api";
import dotenv from "dotenv";
import conn from "./db/mysql";
import session from "express-session";
var FileStore = require('session-file-store')(session);
import bodyParser from "body-parser";

dotenv.config();

const app = express();

let port = 8080;

app.use(session({
    secret: "afawef@#!#ASfVJZjo",
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
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


