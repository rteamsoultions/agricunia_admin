import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MusigReg from '../../component/tables/MusigReg';


function Dashboard() {
    return (
        
        <>
            <div className="col-12 p-0">
                <div className="bg-navigation">
                    <h1 className="text-white">Dashboard</h1>
                </div>
            </div>
            <Container fluid >
                <Row className="pt-5 pl-md-3 mt-4 mt-md-0">
                    <Col xs={12} className="pb-3 pt-4">
                        <h4 className="font-weight-bold title-color">Summary</h4>
                    </Col>
                    <Col lg={3} className="mt-lg-0 mt-3">
                        <div className="today_list">
                            <div className="today_list-title text-center">
                                <h6>Today Users</h6>
                            </div>
                            <div className="today_description text-center">
                                <h6>100</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} className="mt-lg-0 mt-3">
                        <div className="today_list">
                            <div className="today_list-title text-center">
                                <h6>Today Total Investment</h6>
                            </div>
                            <div className="today_description text-center">
                                <h6>7,860,600</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} className="mt-lg-0 mt-3">
                        <div className="today_list">
                            <div className="today_list-title text-center">
                                <h6>Total Users</h6>
                            </div>
                            <div className="today_description text-center">
                                <h6>1,000</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} className="mt-lg-0 mt-3">
                        <div className="today_list">
                            <div className="today_list-title text-center">
                                <h6>Total Investment</h6>
                            </div>
                            <div className="today_description text-center">
                                <h6>17,860,600</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="pb-5">
                <Row className=" pl-md-3">
                    <MusigReg/>
        
                </Row>

                
            </Container>
        </>
    )
}

export default Dashboard
