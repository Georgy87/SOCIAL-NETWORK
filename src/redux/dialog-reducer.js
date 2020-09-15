const DialogReducer = (state, actions) => {
    switch (actions.type) {
        case "ADD-MESSAGE-TEXT":
            state.dialogPageMessageText = actions.messageText;
            break;
        case "ADD-MESSAGE-DIALOG":
            const newMessage = {
                name: "Arsen",
                id: "6",
                message: state.dialogPageMessageText,
            };
            state.dialogNames.push(newMessage);
            break;
        default:
    }
    return state;
};

export const dialogMessageActionCreator = () => {
    return {
        type: 'ADD-MESSAGE-DIALOG'
    }
}

export const dialogTextActionCreator = (text) => {
    return {
        type: 'ADD-MESSAGE-TEXT',
        messageText: text
    }
}

export default DialogReducer;
