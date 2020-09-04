import express from "express"
import mysql from "mysql";
const router = express.Router();

router.get("/boardlist", (req, res) => {
    return res.json({
        hi
    })
})

export default router;