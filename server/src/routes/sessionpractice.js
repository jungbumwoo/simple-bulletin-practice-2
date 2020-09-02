import express, { request } from "express";
import session from "express-session";
import template from "../lib/template";

const router = express.Router();

let authData = {
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
    let authStatusUI = `<a href="/api/session/login">Login</a>`;
    if(authIsOwner(req,res)){
        authStatusUI = `${req.session.nickname} | <a href="/api/session/logout">logout</a>`;
    }
    return authStatusUI;
}

router.post("/login_process", (req, res) => {
    let post = req.body;
    let email = post.email;
    let password = post.pwd;
    if (email === authData.email && password === authData.password) {
        req.session.is_logined = true;
        req.session.nickname = authData.nickname;
        req.session.save(function(){
            res.redirect(`/api/session/login`);
        });
    } else {
        res.send("Who are you?");
    }
});

router.get("/login", (req, res) => {
    let title = "Hi this is Title for Session Practice";
    let list = "list~~";
    let control = "control!!"
    let body = `
            <h1><a href="">WEB - Login</a></h1>
            <h2>${title}</h2>
            <form action="/api/session/login_process" method="post">
                <p><input type="text" name="email" placeholder="email"/></p>
                <p><input type="password" name="pwd" placeholder="password"/></p>
                <p>
                    <input type="submit" value="login">
                </p>
            </form>
    `;
    let html = template.HTML(title, list, body, control, authStatusUI(req, res));
    res.send(html);
})

router.get("/logout", (req, res) => {
    req.session.destroy(function(err){
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
export default router;