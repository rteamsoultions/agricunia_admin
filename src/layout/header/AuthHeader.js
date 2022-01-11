import React from 'react';
import { Navbar, Nav, Container ,Image, Button  } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleMenu } from '../../redux/actions/toggleMenuAction';
import AuthStorage from '../../helper/AuthStorage'
import { useHistory } from 'react-router-dom';


const AuthHeader = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const { is_toggleMenu } = useSelector((state) => state.menuToggle);

    const togglemenubtn = () => {
        if(is_toggleMenu){
            dispatch(setToggleMenu(false));
        }
        else{
            dispatch(setToggleMenu(true));
        }
    }

    const logOut = () => {
        AuthStorage.deauthenticateUser()
        history.push('/login')
    }

    return (
        <div >
            <Container fluid className="p-0">
            <Navbar collapseOnSelect expand="lg" className="header-bg position-fixed">

            <Navbar.Brand className="text-white logo-text">
            <Button className="border-0 bg-transparent mr-3"  onClick={togglemenubtn}>
                <Image  src="img/icon/menu.png" width="30px"/>
            </Button>
                <img src="img/logo.png" width={70}/>
            </Navbar.Brand>
      
           
               
                <Nav className="ml-auto">
                <Nav.Link  className="text-center"> 
                    <Image  src="img/icon/logout.png" width="30px" onClick={logOut} />
                    {/* <p className="text-white mb-0">Logout</p> */}
                </Nav.Link>
                </Nav>
            
            </Navbar>
            </Container>
        </div>
    )
}

export default AuthHeader;
