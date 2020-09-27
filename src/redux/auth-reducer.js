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

export default userAuthReducer;
