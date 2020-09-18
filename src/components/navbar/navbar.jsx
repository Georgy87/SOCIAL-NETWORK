import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import FriendsContainer from "./friends/FriendsContainer";

const Navbar = (props) => {

    return (
        <nav className="navbar-wrapper">
            <div className="navbar-item">
                <NavLink to="/profile" activeClassName="activeLink">
                    Profile
                </NavLink>
            </div>
            <div className="navbar-item">
                <NavLink to="/dialog" activeClassName="activeLink">
                    Messages
                </NavLink>
            </div>
            <div className="friends-wrapper">
                <div className="friends-title">
                    Friends
                </div>
                <div className="friends-content">
                    {/* {elementFriends} */}
                    <FriendsContainer/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
