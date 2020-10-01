import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserAuthData, setUserProfileAuth, setThunkAuthProfile } from "../../redux/auth-reducer";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.setThunkAuthProfile();
    }

    render() {
        return <Header {...this.props} />;
    }
}
const mapStateToProps = (state) => {
    const { auth } = state;
    return {
        login: auth.login,
        isAuth: auth.isAuth,
        authUserId: auth.userProfileAuth
    };
};

export default connect(mapStateToProps, {
    setUserAuthData,
    setUserProfileAuth,
    setThunkAuthProfile
})(HeaderComponent);
