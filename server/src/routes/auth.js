import express from "express";
import mysql from "mysql";
const router = express.Router();

router.get("/token", (req, res) => {
    const user = req.session.token;
    const token = req.sessionID;
    return res.json({
        user: user,
        token
    })
}) 

router.post("/new", (req, res) => {
    console.log(req.body);

    const username = req.body.username;
    const password = req.body.password;

    let sql = `SELECT * FROM user WHERE username=?`;
    console.log(`post is : ${post}`);
    const post = [username];
    mysql.query(sql, (err, results, fields) => {
        if (err) {
            console.log(err);
            return res.json({
                ok: false,
                error: "db error",
                status: 400
            })
        } else {
            if (results.length === 0){
                let sql = "INSERT INTO user (username, password) VALUES(?,?)";
                let post = [username, password];
                mysql.query(sql, post, (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        return res.json({
                            ok: false,
                            error: "2 db error",
                            status: 400
                        })
                    } else {
                        return res.json({
                            ok: true,
                            error: null,
                            status: 200
                        })
                    }
                })
            } else {
                return res.json({
                    ok: false,
                    error: "existing username",
                    status: 400
                })
            }
        }

    })
});

router.get("/logout", (req, res) => {
    delete req.session.token;
    return res.json({
        ok: true,
        error: null,
        status: 200
    })
})

export default router;
