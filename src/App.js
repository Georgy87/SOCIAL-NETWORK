import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import DialogContainer from "./components/dialogs/DialogsContainer";
import { Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./app.css";
const App = (props) => {
    const elementProfile = () => (
        <Profile
            store={props.store}
        />
    );
    const elementDialog = () => (
        <DialogContainer store={props.store}/>
    );

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar  stateFriends={props.stateFriends} />
                <div className="app-wrapper-content">
                    <Route path="/profile" render={elementProfile} />
                    <Route path="/dialog" render={elementDialog} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
