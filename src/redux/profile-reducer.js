import { profileApi } from "../components/api/api";
let initialState = {
    postMessages: [
        {   id: "1",
            message: "Keep your presence fresh on Google.",
            like: "5" },
        {
            id: "2",
            message: "Get verified and start posting today.",
            like: "1",
        },
        {
            id: "3",
            message: "Your audience is searching for you. Get verified on Google and amplify your brand.",
            like: "2",
        },
    ],
    userProfile: null,
    status: "",
};
const ProfileReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "ADD-POST": {
            const newPost = {
                id: "4",
                message: actions.message,
                like: "10",
            };

            return {
                ...state,
                postMessages: [...state.postMessages, newPost],
                postMessageText: "",
            };
        }
        case "USER-PROFILE": {
            return {
                ...state,
                userProfile: actions.userProfile,
            };
        }
        case "SET-STATUS": {
            return {
                ...state,
                status: actions.status,
            };
        }
        default:
            return state;
    }
};

export const addPostACtionCreator = (text) => {
    return {
        type: "ADD-POST",
        message: text.message
    };
};

export const userProfile = (userProfile) => {
    return {
        type: "USER-PROFILE",
        userProfile: userProfile,
    };
};

export const setStatus = (status) => {
    return {
        type: "SET-STATUS",
        status: status,
    };
};

export const setProfileToProfileInfo = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId).then(({ data }) => {
            dispatch(userProfile(data));
        });
    };
};

export const getStatusToProfileInfo = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId).then(({ data }) => {
            dispatch(setStatus(data));
        });
    };
};

export const setStatusToProfileInfo = (status) => {
    return (dispatch) => {
        profileApi.upDateStatus(status).then(({ data }) => {
            console.log(data);
            dispatch(setStatus(status));
        });
    };
};

export default ProfileReducer;
