import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import { followActionCreator, unfollowActionCreator } from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    console.log(state);
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followActionCreator(id))
        },
        unfollow: (id) => {
            dispatch(unfollowActionCreator(id))
        },

    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;