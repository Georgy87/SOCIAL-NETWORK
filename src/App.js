import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ProfileContainer from "./components/profile/ProfileContainer";
import DialogContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import "./app.css";

const App = () => {
    const elementProfile = () => <ProfileContainer />;
    const elementDialog = () => <DialogContainer />;
    const elementUsers = () => <UsersContainer />;

    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/profile/:userId?" render={elementProfile} />
                <Route path="/dialog" render={elementDialog} />
                <Route path="/users" render={elementUsers} />
            </div>
        </div>
    );
};

export default App;
