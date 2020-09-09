import React from "react";
import "./Navbar.css";
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
            <div className="friends-wrapper">
                <div className="friends-title">
                    Friends
                </div>
                <div className="friends-content">
                    <div className="friends-item">
                        <img src="https://pnggfx.com/wp-content/uploads/2020/07/download-free-graphics-user-avatar-png-picture.png" alt=""/>
                        <div>Anna</div>
                    </div>
                    <div className="friends-item">
                        <img src="https://c7.hotpng.com/preview/510/349/155/computer-icons-teacher-clip-art-avatar.jpg" alt=""/>
                        <div>Vika</div>
                    </div>
                    <div className="friends-item">
                        <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/259608/images/3941391/flat-face-icon-23.png" alt=""/>
                        <div>Andrey</div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
