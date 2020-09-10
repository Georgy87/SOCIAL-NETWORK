import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";



const Navbar = (props) => {

    const elementFriends = props.stateFriends.friends.map(item => {
        const { name, id, url } = item;
        return (
            <div>
                <div key={id} className="friends-item">
                        <img src={url} alt=""/>
                        <div>{name}</div>
                </div>
            </div>
        )
    });

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
                    {elementFriends}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
