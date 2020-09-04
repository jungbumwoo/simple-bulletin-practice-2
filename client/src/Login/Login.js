import React from "react";

const Login = (username, password, _signUpButton) => (
    <div className="container">
        <div className="box">
            <span className="title">Sign In</span>
            <input placeholder="username" type="text" name="username" value={username}/>
            <input placeholder="password" type="password" name="password" value={password}/>
            <button className="first" onclick={_signUpButton}>Sign up</button>
            <button className="second">Sign In</button>
        </div>
    </div>
);

export default Login;