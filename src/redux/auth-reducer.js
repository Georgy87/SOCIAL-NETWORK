const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
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

export default userAuthReducer;
