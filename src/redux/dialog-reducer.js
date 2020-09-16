let initialState = {
    dialogNames: [
        { name: "Andrey", id: "1", message: "Hdfsdfls;dlfksdjksldkjsldkjfslkdjfsjdklfskdjflskdjskflsdkjfksdsldkjfsjdkflskdjfsldjfdlskfjjskdlfskjdlfksjdkfsldkfjslkdfj" },
        { name: "Ivan", id: "2" ,  message: "Howj dld"},
        { name: "Gosha", id: "3" ,  message: "Ho"},
        { name: "Svetlana", id: "4",  message: "Fucdfdks;;dlkf dl;s'd;lfsd fdfl;ssjdkflskdjfslkdjfslkdjfsjhdjkfhsjdhfksjhdkfjshdkjhfskdjfhskdjhfjshdfkjshdkfjhskdjfhskjhdfksjhdkjfshkdjfhskdhfksdjhfjksdhfd"},
        { name: "Ruslan", id: "5" , message: "Fuck"},
    ],
    dialogPageMessageText: ''
}
const DialogReducer = (state = initialState, actions) => {
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
