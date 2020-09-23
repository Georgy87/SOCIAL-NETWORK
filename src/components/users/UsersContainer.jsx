import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, currentPageActionCreator} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followActionCreator(id));
        },
        unfollow: (id) => {
            dispatch(unfollowActionCreator(id));
        },
        setUsers: (user) => {
            dispatch(setUsersActionCreator(user));
        },
        currentPage: (page) => {
            dispatch(currentPageActionCreator(page));
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;