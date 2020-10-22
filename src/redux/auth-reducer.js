import * as axios from "axios";
import { apiAuth } from "../components/api/api";

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    userProfileAuth: null,
};

const userAuthReducer = (state = initialState, actions) => {
    console.log(actions.userData)
    switch (actions.type) {
        case "USER-AUTH-DATA": {
            return {
                ...state,
                ...actions.userData,
            };
        }
        case "USER-PROFILE-AUTH": {
            return {
                ...state,
                userProfileAuth: actions.userProfileAuth
            }
        }
        default:
            return state;
    }
};

export const setUserAuthData = (id, login, email, isAuth) => {
    console.log(id, login, email, isAuth);
    return {
        type: "USER-AUTH-DATA",
        userData: {
            id,
            login,
            email,
            isAuth
        },
    };
};

export const setUserProfileAuth = (userProfileAuth) => {
    return {
        type: "USER-PROFILE-AUTH",
        userProfileAuth,
    };
};

export const setThunkAuthProfile = () => (dispatch) => {
    apiAuth.getAuth().then((response) => {
        if (response.data.resultCode === 0) {
            const {id, login, email } = response.data.data;
            dispatch(setUserAuthData(id, login, email, true));
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`
            ).then((response) => {
                dispatch(setUserProfileAuth(response.data));
            });
        }
    })
}

export const setLoginAuth = (email, login, rememberMe) => (dispatch) => {
    apiAuth.postLogin(email, login, rememberMe).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setThunkAuthProfile());
        }
    })
}

export const deleteLoginAuth = (email, login, rememberMe) => (dispatch) => {
    apiAuth.logout(email, login, rememberMe).then((response) => {
        console.log(response)
        if (response.data.resultCode === 0) {
            dispatch(setUserAuthData(null, null, null, false));
        }
    })
}
// deleteLoginAuth("goshana87@mail.ru", "1987toyuiui", false)(dispatch);

export default userAuthReducer;
