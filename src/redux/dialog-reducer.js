const DialogReducer = (state, actions) => {
    console.log(actions);
        if (actions.type === 'ADD-MESSAGE-TEXT') {
            state.dialogPageMessageText = actions.messageText;
        } else if (actions.type === 'ADD-MESSAGE-DIALOG') {
            const newMessage = {
                name: 'Arsen',
                id: "6",
                message: state.dialogPageMessageText,
            }
            state.dialogNames.push(newMessage);
        }
    return state;
}

export default DialogReducer;