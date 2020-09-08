import React from 'react';
import './Header.css';
import {Navbar} from 'react-bootstrap';

const Header = () => {
    return (
        <header className="header">
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">SOCIAL NETWORK</Navbar.Brand>
            </Navbar>
		</header>
    )
}

export default Header;