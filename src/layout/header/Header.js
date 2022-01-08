import React from 'react';
import { Navbar} from 'react-bootstrap';

function Header() {
    return (
  
        <Navbar className="header-bg justify-content-center py-4">
            <Navbar.Brand className="text-white logo-text">stela Administrator</Navbar.Brand>
        </Navbar>
    )
}

export default Header;
