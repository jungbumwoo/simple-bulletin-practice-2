import express from "express";
import post from "./post";
import auth from "./auth";
import sessionpractice from "./sessionpractice";

const router = express.Router();

router.use("/post", post);
router.use("/auth", auth);
router.use("/session", sessionpractice);

export default router;