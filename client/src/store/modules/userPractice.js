import React, { Component } from "react"; 
import Login from "./Login";
import { connect } from "react-redux";
import * as userAction from "../store/modules/user";


class LoginContainer extends Component {
    state = {
        username ="",
        password =""
    };

    _handleInput = event => {
        const value = event.target.value;
        const name = event.target.name;

        if(name === "username"){
            this.setState({
                ...this.state,
                username: value
            })
        }
        if(name === "password"){
            this.setState({
                ...this.state,
                password: value
            })
        }
    }

    signInButton = () => {
        const { apiLogin } = this.props;
        let { username, password } = this.state;
        apiLogin(username, password);
    };

    render(){
        let { username, password } = this.state;
        return(
            <Login
                signInButton = {this.signInButton}
                _handleInput = {this._handleInput} 
                username={username} 
                password={password}
            />
        ) 
    };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    apiLogin: (username, password) => 
        dispatch(userAction.apiLogin(username, password))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
