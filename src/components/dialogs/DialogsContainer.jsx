import React from "react";
import Dialog from "./Dialogs";
import {
    dialogMessageActionCreator,
    dialogTextActionCreator,
} from "../../redux/dialog-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../hoc/WithAuthRedirect";
import { compose } from 'redux';

const mapAuthToProps = (state) => {
    return {
        auth: state.auth.isAuth
    }
}

// let redirectAuthMapToProps = connect(mapAuthToProps)(withAuthRedirect(Dialog));

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

// const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(redirectAuthMapToProps));

// export default DialogContainer;
export default compose(
    connect(mapAuthToProps),
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialog);