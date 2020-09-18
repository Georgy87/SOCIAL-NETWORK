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
        case "ADD-MESSAGE-TEXT": {
            let newState = {...state};
            newState.dialogPageMessageText = actions.messageText;
            return newState;
        }
        case "ADD-MESSAGE-DIALOG": {
            let newMessage = {
                name: "Arsen",
                id: "6",
                message: state.dialogPageMessageText,
            };

            let newState = {...state};
            newState.dialogNames = [...state.dialogNames];
            newState.dialogPageMessageText = '';
            newState.dialogNames.push(newMessage);
            return newState;
        }
        default:
            return state;
    }
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
