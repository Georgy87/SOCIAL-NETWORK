import { profileApi } from "../components/api/api";
let initialState = {
    postMessages: [
        { id: "1", message: "Keep your presence fresh on Google.", like: "5" },
        { id: "2",  message: "Get verified and start posting today.", like: "1" },
        { id: "3", message: "Your audience is searching for you. Get verified on Google and amplify your brand.", like: "2" }
    ],
    postMessageText: '',
    userProfile: null
}
const ProfileReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "ADD-POST": {
            const newPost = {
                id: "4",
                message: state.postMessageText,
                like: "10",
            };

            return  {
                ...state,
                postMessages: [...state.postMessages, newPost],
                postMessageText: ''
            };
        }
        case "ADD-TEXT": {

            return  {
                ...state,
                postMessageText: actions.newText,
            };
        }
        case "USER-PROFILE": {
            return  {
                ...state,
                userProfile: actions.userProfile,
            };
        }

        default :
            return state;
    }
};

export const addPostACtionCreator = () => {
	return {
		type: 'ADD-POST'
	}
}

export const changeInputACtionCreator = (text) => {
    return {
        type: 'ADD-TEXT',
		newText: text
    }
}

export const userProfile = (userProfile) => {
    return {
        type: 'USER-PROFILE',
		userProfile: userProfile
    }
}

export const setProfileToProfileInfo = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId).then(({ data }) => {
            dispatch(userProfile(data));
        });
    }
}

export default ProfileReducer;
