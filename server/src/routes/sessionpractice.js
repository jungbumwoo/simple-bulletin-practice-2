import express, { request } from "express";
import session from "express-session";

const router = express.Router();

let authData = {
    email: 'jungbum@yahoo.goobye',
    password: '123321',
    nickname: 'bumbum'
}

router.post("/login_process", (req, res) => {
    let post = req.body;
    let email = post.email;
    let password = post.pwd;
    if (email === authData.email && password === authData.password) {
        req.session.is_logined = true;
        req.seesion.nickname = authData.nickname;
        req.session.save(function(){
            res.send("Welcome!");
        });
    } else {
        res.send("Who are you?");
    }
});


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

export default router;