import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import DialogContainer from "./components/dialogs/DialogsContainer";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./app.css";

const App = () => {
    const elementProfile = () => <Profile />;
    const elementDialog = () => <DialogContainer />;

    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/profile" render={elementProfile} />
                <Route path="/dialog" render={elementDialog} />
            </div>
        </div>
    );
};

export default App;
