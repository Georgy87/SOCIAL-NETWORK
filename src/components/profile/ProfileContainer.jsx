import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfileToProfileInfo, setStatusToProfileInfo } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { compose } from 'redux';

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11618;
        }
        this.props.setProfileToProfileInfo(userId);
        this.props.setStatusToProfileInfo(userId);
    }

    render() {
        if (this.props) {
            return <Profile {...this.props} />;
        }
    }
}

const mapAuthToProps = (state) => {
    // console.log(state.postsPage.status);
    return {
        auth: state.auth.isAuth,
        status: state.postsPage.status
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.postsPage.userProfile,
    };
};

export default compose(
    connect(mapAuthToProps),
    // withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {setProfileToProfileInfo, setStatusToProfileInfo})
)(ProfileContainer);
