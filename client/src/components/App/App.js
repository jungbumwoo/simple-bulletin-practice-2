import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContainer from "../../Login/LoginContainer";

const App = ({ isLoggedIn }) => (
    <Router>
        <div>{isLoggedIn ? PrivateComponent() : PublicComponent()}</div>
    </Router>
);

const PublicComponent = () => <div>not logged In</div>;

const PrivateComponent = () => (
    <div>
        <LoginContainer />
    </div>
);


export default App;