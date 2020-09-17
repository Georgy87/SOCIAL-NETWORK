import React from "react";
import Dialog from "./Dialogs";
import {
    dialogMessageActionCreator,
    dialogTextActionCreator,
} from "../../redux/dialog-reducer";
import { connect } from "react-redux";

// import StoreContext from "../../Context";

// return (
//         {
//             (store) => {
//                 const state = store.getState();
//                 const addMessage = () => {
//                     store.dispatch(dialogMessageActionCreator());
//                 }

//                 const addChange = (text) => {
//                     store.dispatch(dialogTextActionCreator(text));
//                 }
//                 return (
//                     <Dialog state={state.dialogPage} addMessage={addMessage} addChange={addChange}/>
//                 )
//             }
//         }
// );

const mapStateToProps = (state) => {
    console.log(state);
    return {
        state: state.dialogPage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(dialogMessageActionCreator());
        },
        addChange: (text) => {
            dispatch(dialogTextActionCreator(text));
        },
    };
};
const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;
