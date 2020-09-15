const ProfileReducer = (state, actions) => {
    switch (actions.type) {
        case "ADD-POST":
            const newPost = {
                id: "4",
                message: state.postMessageText,
                like: "10",
            };
            state.postMessages.push(newPost);
            break;
        case "ADD-TEXT":
            state.postMessageText = actions.newText;
            break;
        default:
    }

    return state;
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
