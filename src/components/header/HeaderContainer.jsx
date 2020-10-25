import React, { Component } from "react";
import Header from "./header";
import { connect } from "react-redux";
import { setUserAuthData, setUserProfileAuth, deleteLoginAuth } from "../../redux/auth-reducer";
import { getLogin,  getIsAuth, getAuthUserId} from "../reselectors/header-reselectors";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Header {...this.props} />;
    }
}
const mapStateToProps = (state) => {
    return {
        login: getLogin(state),
        isAuth: getIsAuth(state),
        authUserId: getAuthUserId(state),
    };
};

export default connect(mapStateToProps, {
    setUserAuthData,
    setUserProfileAuth,
    deleteLoginAuth
})(HeaderComponent);
