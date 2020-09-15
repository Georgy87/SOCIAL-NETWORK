const ProfileReducer = (state, actions) => {
    if (actions.type === 'ADD-POST') {
        const newPost = {
            id: "4",
            message: state.postMessageText,
            like: "10"
        }
        state.postMessages.push(newPost);
    } else if (actions.type === 'ADD-TEXT'){
        state.postMessageText = actions.newText;
    }
    
    return state;
}

export default ProfileReducer;