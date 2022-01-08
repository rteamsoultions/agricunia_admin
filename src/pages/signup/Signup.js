import React, { useState } from 'react';
import { Col, Row, Container, Form,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Buttons from '../../common/Buttons';
import InputField from '../../common/InputField';

function Signup() {

    const [state, setState ] = useState({
        email: '',
        password: '',
        surname: '',
        given_name:'',
    })

    const viewMore = () => {
        alert('You Register SucessFully')
    }

    const handleChange = (e)  => {
    
        setState({
            ...state,   
            [e.target.name]: e.target.value
        });
    };


    return (
        <Container>
            <Row className="justify-content-center">
                <Col xl={7} lg={10} sm={12} >
                    <div className="bg-white">
                        <div className="login-form">
                            <Form>
                                <h1 className="font-weight-bold title-color  text-center">Sign up for Admin</h1>
                                <p className="text-center"><span className="custom-hash">*</span> This is required to be filled to go to the next page</p>
                                <div className="mt-5">
                                    <InputField
                                        label="Email"
                                        name="email"
                                        value={state.email}
                                        placeholder="Enter the email address"
                                        type="email"
                                        InputstyleClass="custom-input "
                                        lablestyleClass="custom-label"
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Row>
                                        <Col lg={6}>
                                            <InputField
                                            label="Name"
                                            name="surname"
                                            value={state.surname}
                                            placeholder="Sur name"
                                            type="text"
                                            InputstyleClass="custom-input name-input-reg"
                                            lablestyleClass="custom-label"
                                            onChange={handleChange}
                                            required
                                            />
                                        </Col>
                                        <Col lg={6}>
                                            <InputField
                                            name="given_name"
                                            value={state.given_name}
                                            placeholder="Given Name"
                                            type="text"
                                            InputstyleClass="custom-input givename-box"
                                            onChange={handleChange}
                                            required
                                            />
                                        </Col>
                                    </Form.Row>
                                    
                                    <InputField
                                        label="Password"
                                        name="password"
                                        value={state.password}
                                        placeholder="Enter 8 to 16 characters in combination of English, numbers and special characters."
                                        type="Password"
                                        InputstyleClass="custom-input"
                                        lablestyleClass="custom-label"
                                        onChange={handleChange}
                                        required
                                        minlength="8"
                                    />
                                   
                                   
                                    <InputField
                                        label="Confirm the password"
                                        name="password"
                                        value={state.password}
                                        placeholder="Enter the password again"
                                        type="Password"
                                        InputstyleClass="custom-input"
                                        lablestyleClass="custom-label"
                                        onChange={handleChange}
                                        required
                                        minlength="8"
                                    />
                            
                                    <Buttons
                                        type="submit"
                                        children =" Sign up"
                                        styleClass="loginreg-btn mt-4"
                                        handleClick={viewMore} 
                                    />
                                    <div className="checkbox-add_top_15 mr-auto">
                                        <Link to="/login" className="signup-link">
                                            <FontAwesomeIcon icon={faChevronLeft} /> Previous page
                                        </Link>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup
