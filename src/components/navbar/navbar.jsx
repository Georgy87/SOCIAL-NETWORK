import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        </nav>
    );
};

export default Navbar;
