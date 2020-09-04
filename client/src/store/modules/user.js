// import 
import axios from "axios";
// actions
const GET_TOKEN = "user/GET_TOKEN";

// action creators
export const getToken = token => ({
    type: GET_TOKEN,
    token
});

//api
export const apiGetToken = () => {
    return async (dispatch, getState) => {
        axios
            .get(`/api/auth/token`)
            .then(response => response.data)
            .then(data => data.userId)
            .then(user_id => {
                if(user_id) {
                    dispatch(getToken(user_id));
                }
            })
            .catch(err => console.log(err))
    }
}


// initialState
const initialState = {
    session_token: null,
    isLoggedIn: localStorage.get("token") ? true : false
};

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_TOKEN:
            return applyGetTokken(state, action);
        default:
            return state;
    }
}


// reducer actions
const applyGetTokken = (state, action) => {
    const { token } = action;
    if ( token ) {
        localStorage.setItem("token", token);
    };
    return {
        ...state,
        session_token: token
    }
}
