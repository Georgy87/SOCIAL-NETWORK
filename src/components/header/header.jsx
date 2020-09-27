import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    let element =  props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>
    return (
        <header className="header">
            <div className="header-title">
                SOCIAL NETWORK
                <span>{element}</span>
            </div>
		</header>
    )
}

export default Header;