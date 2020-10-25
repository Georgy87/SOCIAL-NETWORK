import React, { Component } from "react";
import Header from "./header";
import { connect } from "react-redux";
import { setUserAuthData, setUserProfileAuth, deleteLoginAuth } from "../../redux/auth-reducer";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
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
        authUserId: auth.userProfileAuth,
    };
};

export default connect(mapStateToProps, {
    setUserAuthData,
    setUserProfileAuth,
    deleteLoginAuth
})(HeaderComponent);
