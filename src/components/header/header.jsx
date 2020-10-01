import React from "react";
import "./Header.css";
import { NavLink, Redirect } from "react-router-dom";
import newPhoto from "../../assets/img/preloader/3ac3da68aeffb6bc94fe1f9f2cf3b7b5.jpg";

const Header = (props) => {
    let element = props.isAuth ? (
        props.login
    ) : (
        <NavLink to="/login">Login</NavLink>
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
                    SOCIAL NETWORK
                    <span>
                        <div>
                            <img src={photo} alt="" />
                        </div>
                        {element}
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
