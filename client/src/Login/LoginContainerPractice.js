import React, { Component } from "react";

class LoginContainerPractice extends Comment {
    state = {
        username: "",
        password: ""
    }
    //props 원리
    _handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.password;
        if (name ==="username"){
            this.setState = {
                ...this.state,
                username: value
            }
        }
        if (name ==="password"){
            this.setState = {
                ...this.state,
                password: value
            }
        }

    };

    render(){
        let {username, password} = this.state;
        return(
            <Login
                _handleInput = {this._handleInput} 
                username={username}
                password={password}
            />
        );
    }
}