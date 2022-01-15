import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import Buttons from '../../common/Buttons';
import { ApiGet, ApiPatch, ApiPost, ApiPut } from '../../helper/API/ApiData';
import { RoleType } from '../../helper/Constant';

const UserRegistration = () => {
    const history = useHistory();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");

    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
        created_by: RoleType.admin,
        is_admin: false
    })

    const [userDataErr, setUserDataErr] = useState({
        first_nameErr: '',
        last_nameErr: '',
        emailErr: '',
        phone_numberErr: '',
        passwordErr: ''
    })

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        let flag = false

        let errors = {
            first_nameErr: '',
            last_nameErr: '',
            emailErr: '',
            phone_numberErr: '',
            passwordErr: ''
        }

        if (userData.first_name === "") {
            errors.first_nameErr = "Please Enter First Name"
            flag = true
        }
        if (userData.last_name === "") {
            errors.last_nameErr = "Please Enter Last Name"
            flag = true
        }
        if (userData.email === "") {
            errors.emailErr = "Please Enter Email"
            flag = true
        }
        if (userData.phone_number === "") {
            errors.phone_numberErr = "Please Enter Mobile Number"
            flag = true
        }
        if (!id) {
            if (userData.password === "") {
                errors.passwordErr = "Please Enter Password"
                flag = true
            }
        }

        setUserDataErr(errors)

        return flag

    }

    const saveData = () => {
        if (validate()) {
            return
        }
        console.log("userData", userData);

        if (id) {
            const body = {
                id: id,
                first_name: userData.first_name,
                last_name: userData.last_name,
                email: userData.email,
                phone_number: userData.phone_number,
            }
            ApiPut('user/auth/editUser', body)
                .then((res) => {
                    history.push('/user')
                }).catch((err) => {
                    console.log("err", err);
                })

        } else {

            ApiPost('user/auth/register', userData)
                .then((res) => {
                    console.log("res", res);
                    history.push('/user')
                }).catch((err) => {
                    console.log("err", err);
                })
        }

    }

    const getUserDataByID = () => {
        ApiGet(`user/${id}`)
            .then((res) => {
                setUserData({
                    ...userData,
                    first_name: res.data.first_name,
                    last_name: res.data.last_name,
                    email: res.data.email,
                    phone_number: res.data.phone_number,
                })
            }).catch((err) => {
                console.log("err ===== ", err);
            })
    }

    useEffect(() => {
        if (id) {
            getUserDataByID()
        }
    }, [id])

    return (
        <div>
            <div className="col-12 p-0">
                <div className="bg-navigation">
                    <h1 className="text-white">Profile</h1>
                </div>
            </div>

            <Container fluid className="creator-table">
                <Row className="pt-5 pl-md-3 mt-4 mt-md-0 pb-5">

                    <Col lg={12}>

                        <Form>

                            <div className="overflow-table">
                                <Col xs={12} className="pb-3 pl-0 pt-5">
                                    <h4 className="font-weight-bold title-color">Profile</h4>
                                </Col>
                                <Container fluid class="mt-3 ">

                                    <Row>
                                        {/* <Col md={3} className="profile-table-td title-color font-weight-bold">User Type</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <label class="profile-label user-img2"><img src="img/user.jpg" /></label>
                                        </Col> */}

                                        <Col md={3} className="profile-table-td title-color font-weight-bold">First Name</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <input type="text" name="first_name" value={userData.first_name} onChange={(e) => handleChange(e)} />
                                            {userDataErr.first_nameErr && <label>{userDataErr.first_nameErr}</label>}
                                        </Col>

                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Last Name</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <input type="text" name="last_name" value={userData.last_name} onChange={(e) => handleChange(e)} />
                                            {userDataErr.last_nameErr && <label>{userDataErr.last_nameErr}</label>}
                                        </Col>

                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Email</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <input type="text" name="email" value={userData.email} onChange={(e) => handleChange(e)} />
                                            {userDataErr.emailErr && <label>{userDataErr.emailErr}</label>}
                                        </Col>

                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Mobile No</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <input type="text" name="phone_number" value={userData.phone_number} onChange={(e) => handleChange(e)} />
                                            {userDataErr.phone_numberErr && <label>{userDataErr.phone_numberErr}</label>}
                                        </Col>

                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Password</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <input type="text" name="password" value={userData.password} onChange={(e) => handleChange(e)} />
                                            {userDataErr.passwordErr && <label>{userDataErr.passwordErr}</label>}
                                        </Col>

                                        {/* <Col md={3} className="profile-table-td title-color font-weight-bold">Sign up date / Last log-in</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <label class="profile-label">YYYY-MM-DD</label>
                                        </Col> */}
                                    </Row>

                                </Container>
                                <Col xs={12} className="pb-3 pl-0 pt-5">
                                    <Buttons
                                        children="Save"
                                        styleClass="search-button ml-2"
                                        handleClick={saveData} />
                                </Col>

                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserRegistration
