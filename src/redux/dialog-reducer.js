let initialState = {
    dialogNames: [
        { name: "Andrey", id: "1", message: "The #redux channel of the Reactiflux Discord community is our official resource for all questions related to learning and using Redux. Reactiflux is a great place to hang out, ask questions, and learn - come join us!" },
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
            return {
                ...state,
                dialogPageMessageText: actions.messageText
            }
        }
        case "ADD-MESSAGE-DIALOG": {
            let newMessage = {
                name: "Arsen",
                id: "6",
                message: state.dialogPageMessageText,
            };

            return {
                ...state,
                dialogNames: [...state.dialogNames, newMessage],
            };
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
