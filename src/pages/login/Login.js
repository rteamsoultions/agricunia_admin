import React, { useEffect, useState } from 'react';
import { Col, Row, Container, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Buttons from '../../common/Buttons';
import InputField from '../../common/InputField';
import STORAGEKEY from '../../config/APP/app.config';
import { ApiPost } from '../../helper/API/ApiData';
import AuthStorage from '../../helper/AuthStorage';
import { loginWith } from '../../helper/Constant';

function Login() {
    const history = useHistory()
    const [saveEmail, setSaveEmail] = useState(false)
    const [state, setState] = useState({
        email: '',
        password: '',
        formError: {
            emailError: '',
            passwordError: '',
        }
    })

    const validate = () => {
        let formError = {
            emailError: '',
            passwordError: '',
        }
        if (state.email === "") {
            formError.emailError = "Email Required"
        }

        if (state.password === "") {
            formError.passwordError = "Password Required"
        }

        setState({
            ...state,
            formError: formError
        })

        if (!state.email && !state.password) {
            return false
        }
        return true
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const login = () => {
        if (!validate()) {
            return
        }
        ApiPost('user/auth/login', {
            email: state.email,
            password: state.password,
            login_with: loginWith.Manual,
            is_admin: true
        }).then((res) => {
            if (saveEmail === true) {
                AuthStorage.setStorageData(STORAGEKEY.email, state.email)
            } else {
                AuthStorage.deleteKey(STORAGEKEY.email)
            }
            AuthStorage.setStorageData(STORAGEKEY.token, res.data.token)
            let data = res.data
            delete data.token
            AuthStorage.setStorageJsonData(STORAGEKEY.userData, data)

            history.push("/");
        }).catch((err) => {
            console.log(err);
        })
    }

    const saveEmailAddress = (e) => {
        setSaveEmail(e.target.checked)
        console.log("e", e.target.checked);
    }

    useEffect(() => {
        const getEmail = AuthStorage.getStorageData(STORAGEKEY.email)
        if(getEmail !== "" || getEmail !== undefined || getEmail !== null) {
            setState({
                ...state,
                email: getEmail
            })
        }
    }, [])

    return (

        <Container>
            <Row className="justify-content-center">
                <Col md={7}>
                    <div className="bg-white">
                        <div className="login-form">
                            <Form >
                                <h1 className="font-weight-bold title-color  text-center">Admin Log-in</h1>
                                <div className="mt-5">
                                    <InputField
                                        name="email"
                                        value={state.email}
                                        placeholder="Admin Email ID"
                                        type="email"
                                        InputstyleClass="custom-input"
                                        onChange={handleChange}
                                        required
                                    />
                                    {state.formError.emailError &&
                                        <p className="text-danger">{state.formError.emailError}</p>
                                    }
                                    <InputField
                                        name="password"
                                        value={state.password}
                                        placeholder="Admin Password"
                                        type="Password"
                                        InputstyleClass="custom-input"
                                        onChange={handleChange}
                                        required
                                        minlength="8"
                                    />
                                    {state.formError.passwordError &&
                                        <p className="text-danger">{state.formError.passwordError}</p>
                                    }

                                    <Form.Group className="d-md-flex">
                                        <div className="checkboxes checkbox-add_top_15">
                                            <label className="container_check">Save my email address
                                                <input type="checkbox" onChange={(e) => saveEmailAddress(e)} />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkbox-add_top_15 ml-auto">
                                            <Link to="/signup" className="signup-link">
                                                Sign up
                                            </Link>
                                        </div>
                                    </Form.Group>
                                    <Buttons
                                        type="button"
                                        children="Log-in"
                                        styleClass="loginreg-btn mt-4"
                                        handleClick={login}
                                    />

                                </div>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;

