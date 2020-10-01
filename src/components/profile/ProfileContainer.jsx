import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfileToProfileInfo } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11618;
        }
        // profileApi.getProfile(userId).then(({ data }) => {
        //     this.props.userProfile(data);
        // });
        this.props.setProfileToProfileInfo(userId);
    }

    render() {
        if (this.props) {
            return <Profile {...this.props} />;
        }
    }
}

const mapStateToProps = (state) => {

    return {
        users: state.postsPage.userProfile,
    };
};
const dataUrlForComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setProfileToProfileInfo})(dataUrlForComponent);
