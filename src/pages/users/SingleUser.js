import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Buttons from '../../common/Buttons';
import InputField from '../../common/InputField';
import SelectOption from '../../common/SelectOption';


function SingleUser() {

    const [showViewHistory, setShowViewHistory] = useState(false);
    const [showViewLicense, setShowViewLicense] = useState(false);
    const [state, setState] = useState({

        selectstelamcountry: '',
        creatortel: '',
        creatoremail: '',
        companyname: '',
        companyadd: '',
        creator_AddnNote: '',
    })

    const history = useHistory();

    const handleChange = (e) => {

        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };


    const handleDropdown = () => {

    }


    const viewMore = () => {
    }

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
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">User Type</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <label class="profile-label user-img2"><img src="img/user.jpg" /></label>
                                        </Col>

                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Name</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <label class="profile-label">ravi Sondagar</label>
                                        </Col>

                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Email</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <label class="profile-label">ravi.Sondagar125@gmail.com</label>
                                        </Col>

                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Mobile No</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <label class="profile-label">+91 7894561230</label>
                                        </Col>


                                      

                                     



                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Sign up date / Last log-in</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <label class="profile-label">YYYY-MM-DD</label>
                                        </Col>
                                    </Row>


                                   
                                </Container>



                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default SingleUser;
