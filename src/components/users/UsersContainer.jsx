import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import { followActionCreator, unfollowActionCreator } from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    console.log(state);
    return {
        users: state.usersPage
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;