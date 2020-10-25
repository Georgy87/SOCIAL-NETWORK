import React from "react";
import Dialog from "./Dialogs";
import { dialogMessageActionCreator } from "../../redux/dialog-reducer";
import { connect } from "react-redux";
import {dialogPage} from "../reselectors/dialogs-reselectors";
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        state: dialogPage(state),
    };
};

export default compose(
    connect(mapStateToProps, {dialogMessageActionCreator})
)(Dialog);