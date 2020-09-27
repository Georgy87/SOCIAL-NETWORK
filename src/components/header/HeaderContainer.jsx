import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserAuthData, setUserProfileAuth } from "../../redux/auth-reducer";
import * as axios from "axios";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
                withCredentials: true,
            })
            .then((response) => {
                this.props.setUserAuthData(response.data.data);
                axios
                    .get(
                        `https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`
                    )
                    .then((response) => {
                        this.props.setUserProfileAuth(response.data);
                    });
            });
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
})(HeaderComponent);
