import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Investment() {
    const history = useHistory();

    const GMDesBtn = () =>{
        history.push("/investment-description")
    }

    const GMProBtn = () =>{
        history.push("/investment-list")
    }

    return (
        <>
            <div className="col-12 p-0">
                <div className="bg-navigation">
                    <h1 className="text-white">Investment page</h1>
                </div>
            </div>
            <Container fluid >
                <Row className="pt-5 pl-md-3 mt-4 mt-md-0">
                    <Col xs={12} className="pb-3 pt-4">
                        <h4 className="font-weight-bold title-color">Investment Info {"&"} Type</h4>
                    </Col>
                    <Col lg={6} className="mt-lg-0 mt-3">
                        <div className="today_list">
                            <div className="today_list-title text-center">
                                <h6>Investment Description</h6>
                            </div>
                            <div className="today_description text-center">
                                <button onClick={GMDesBtn} className='bg-custom-black text-white'>View</button>
                            </div>

                        </div>
                    </Col>
                    <Col lg={6} className="mt-lg-0 mt-3">
                        <div className="today_list">
                            <div className="today_list-title text-center">
                                <h6>Investment Type</h6>
                            </div>
                            <div className="today_description text-center">
                                <button onClick={GMProBtn}  className='bg-custom-black text-white'>View</button>

                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>

        </>
    )
}

export default Investment;
