import express from "express";
import mysql from "../db/mysql";
const router = express.Router();


router.post("/", async (req, res) => {
    const username = req.session.token;
    const title = req.body.title;
    const content = req.body.content;
    let sql = "SELECT id FROM user WHERE username=?";
    const post = [username];
    await mysql.query(sql, post, (err, results, fields) => {
        if (err) {
            console.log(err);
            return res.json({
                ok: false,
                status: 400,
                error: "db error"
            });
        } else {
            const user_id = results[0].id;
            let sql = "INSERT INTO board(title, content, writer) VALUES (?,?,?)";
            const post = [title, content, user_id];
            mysql.query(sql, post, (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return res.json({
                        ok: false,
                        status: 400,
                        error: "fail to write"
                    });
                } else {
                    return res.json({
                        ok: false,
                        status: 200,
                        error: null
                    });
                };
            });
        };
    });
});


export default router;