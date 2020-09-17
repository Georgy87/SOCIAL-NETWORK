import React from "react";
import Dialog from "./Dialogs";
import {dialogMessageActionCreator, dialogTextActionCreator} from '../../redux/dialog-reducer';
import StoreContext from "../../Context";

const DialogContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();
                    const addMessage = () => {
                        store.dispatch(dialogMessageActionCreator());
                    }

                    const addChange = (text) => {
                        store.dispatch(dialogTextActionCreator(text));
                    }
                    return (
                        <Dialog state={state.dialogPage} addMessage={addMessage} addChange={addChange}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogContainer;