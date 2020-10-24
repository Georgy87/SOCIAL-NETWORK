import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import newPhoto from "../../assets/img/preloader/3ac3da68aeffb6bc94fe1f9f2cf3b7b5.jpg";


const Header = (props) => {
    console.log(props)
    let element = props.isAuth ? (
        <div className="logout">
            {props.login}
            <button className="logoutBtn" onClick={props.deleteLoginAuth}>Logout</button>
        </div>
    ) : (
        <NavLink to="/login"><button className="logoutBtn">Login</button></NavLink>
    );

    let photo = "";
    if (!props.authUserId) {
        console.log("No");
    } else if (props.authUserId && props.authUserId.userId === 11618) {
        photo = newPhoto;
    }

    return (
        <header className="header">
            <div className="header-title">
                <div className="header-login-user">
                    <span>{element}</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
