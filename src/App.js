import React, { Component } from "react";
import HeaderComponent from "./components/header/HeaderContainer";
import Navbar from "./components/navbar/Navbar";
import ProfileContainer from "./components/profile/ProfileContainer";
import DialogContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/login/Login";
import { setThunkAuthProfile } from "./redux/auth-reducer";
import { connect } from "react-redux";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        this.props.setThunkAuthProfile();
    }

    render() {
        const elementProfile = () => <ProfileContainer />;
        const elementDialog = () => <DialogContainer />;
        const elementUsers = () => <UsersContainer />;
        const elementLoginPage = () => <LoginPage />;
        return (
            <div className="app-wrapper">
                <HeaderComponent />
                <Navbar />
                <div className="app-wrapper-content">
                    {this.props.isAuth ? (
                        <div>
                            <Route
                                path="/profile/:userId?"
                                render={elementProfile}
                            />
                            <Route path="/dialog" render={elementDialog} />
                            <Route path="/users" render={elementUsers} />
                            <Route path="/login" render={elementLoginPage} />
                        </div>
                    ) : (
                        <LoginPage />
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps, {setThunkAuthProfile})(App);
