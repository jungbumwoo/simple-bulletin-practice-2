import React, { Component } from "react"; 
import Login from "./Login";
import { connect } from "react-redux";


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

    render(){
        let { username, password } = this.state;
        return(
            <Login 
                username={username} 
                password={password}
            />
        ) 
    };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
