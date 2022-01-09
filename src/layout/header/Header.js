import React from 'react';
import { Navbar} from 'react-bootstrap';

function Header() {
    return (
  
        <Navbar className=" justify-content-center py-4">
            <Navbar.Brand className="text-white logo-text"><img src="img/logo.png" width={90}/></Navbar.Brand>
        </Navbar>
    )
}

export default Header;
