import React from "react";


const Loginpractice = ({ _handleInput, username, password}) => (
    
    <div>
        <div>
            <span>Login In</span>
            <input name="username" type="text" placeholder="username" value={username} onChange={_handleInput}></input>
            <input name="password" type="password" placeholder="password" value={password} onChange={_handleInput}></input>
            <button onclick={console.log("sign in~")}>Sign In</button>
            <button coclick={console.log("sign out~")}>Sign Up</button>
        </div>
    </div>
);

export default Loginpractice;