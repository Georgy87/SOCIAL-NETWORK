import { setUserAuthData } from "../redux/auth-reducer";
let initialState = {
    initialization: false,
};

const AppReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "INITIALIZATION": {
            return {
                ...state,
                initialization: true,
            };
        }
        default:
            return state;
    }
};

export const initialization = () => {
    return {
        type: "INITIALIZATION",
    };
};

export const setInitialization = () => {
    return (dispatch) => {
        const getAuth = dispatch(setUserAuthData());
        Promise.all([getAuth]).then(() => dispatch(initialization()))
    };
};

export default AppReducer;
