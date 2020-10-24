import React, { Component } from "react";
import HeaderComponent from "./components/header/HeaderContainer";
import Navbar from "./components/navbar/Navbar";
import ProfileContainer from "./components/profile/ProfileContainer";
import DialogContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/login/Login";
import { connect } from "react-redux";
import { setInitialization } from "./redux/app-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "./components/hoc/WithAuthRedirect";
import { compose } from "redux";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {

        this.props.setInitialization();
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
                    {this.props.initialization ? (
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
        initialization: state.appPage.initialization,
    };
};

// const withRouterApp = withRouter(App);

export default connect(mapStateToProps, {
    setInitialization,
})(App);
