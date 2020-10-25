import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
    setProfileToProfileInfo,
    getStatusToProfileInfo,
    setStatusToProfileInfo,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { getProfile, getProfileStatus } from "../reselectors/profile-reselectors";
import { compose } from "redux";

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11618;
        }
        this.props.setProfileToProfileInfo(userId);
        this.props.getStatusToProfileInfo(userId);
        // this.props.deleteLoginAuth("goshana87@mail.ru", "1987toyuiui", false);
    }

    render() {
        if (this.props) {
            return <Profile {...this.props} />;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: getProfile(state),
        status: getProfileStatus(state),
    };
};

export default compose(
    // withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        setProfileToProfileInfo,
        getStatusToProfileInfo,
        setStatusToProfileInfo,
    })
)(ProfileContainer);
