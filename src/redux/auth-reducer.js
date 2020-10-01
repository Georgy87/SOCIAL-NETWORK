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
    switch (actions.type) {
        case "USER-AUTH-DATA": {
            return {
                ...state,
                ...actions.userData,
                isAuth: true
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

export const setUserAuthData = ({id, login, email}) => {
    return {
        type: "USER-AUTH-DATA",
        userData: {
            id,
            login,
            email,
        },
    };
};

export const setUserProfileAuth = (userProfileAuth) => {
    return {
        type: "USER-PROFILE-AUTH",
        userProfileAuth,
    };
};

export const setThunkAuthProfile = () => {
    return (dispatch) => {
        apiAuth.getAuth().then((response) => {
            dispatch(setUserAuthData(response.data.data));
            axios
                .get(
                    `https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`
                ).then((response) => {
                    dispatch(setUserProfileAuth(response.data));
                });
        })
    }
}



export default userAuthReducer;
