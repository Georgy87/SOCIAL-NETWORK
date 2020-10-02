import React from "react";
import Dialog from "./Dialogs";
import {
    dialogMessageActionCreator,
    dialogTextActionCreator,
} from "../../redux/dialog-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../hoc/WithAuthRedirect";

const mapAuthToProps = (state) => {
    return {
        auth: state.auth.isAuth
    }
}

const redirectAuthMapToProps = connect(mapAuthToProps)(withAuthRedirect(Dialog));

const mapStateToProps = (state) => {
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

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(redirectAuthMapToProps);

export default DialogContainer;
