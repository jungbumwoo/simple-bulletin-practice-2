import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Appcontainer from "./component/App/Appcontainer";

const Root = () => (
    <Provider store={store}>
        <Appcontainer />
    </Provider>
);

export default Root;