import React from 'react';
import s from './Header.module.css';
import {Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <header className={s.header}>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">SOCIAL NETWORK</Navbar.Brand>
            </Navbar>
		</header>
    )
}

export default Header;