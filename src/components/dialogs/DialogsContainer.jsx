import React from "react";
import Dialog from "./Dialogs";
import {
    dialogMessageActionCreator,
    dialogTextActionCreator,
} from "../../redux/dialog-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state.dialogPage,
        auth: state.auth.isAuth
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
