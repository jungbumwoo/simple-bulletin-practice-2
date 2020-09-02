import dotenv from "dotenv";
dotenv.config();

const options = {
    secret: process.dotenv.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
};

export default options;