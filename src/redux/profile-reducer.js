let initialState = {
    postMessages: [
        { id: "1", message: "Keep your presence fresh on Google.", like: "5" },
        { id: "2",  message: "Get verified and start posting today.", like: "1" },
        { id: "3", message: "Your audience is searching for you. Get verified on Google and amplify your brand.", like: "2" }
    ],
    postMessageText: ''
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
            };
        }
        case "ADD-TEXT": {
            
            return  {
                ...state,
                postMessageText: actions.newText,
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

export default ProfileReducer;
