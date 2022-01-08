import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Buttons from '../../common/Buttons';


function LatestSettle() {


    const LatestSet = [
        {
            Name: "Hong Gildong",
            Track: "What if",
            Amount: "16,000",
            Date: "YYYY.MM.DD",
            
        },

        {
            Name: "Hong Gildong",
            Track: "What if",
            Amount: "16,000",
            Date: "YYYY.MM.DD",
        },
    ];

    const viewMore = () => {
        console.log('Latest settlement pending')
    }


    return (
        <>
        <Col lg={6} className="mt-md-5">
            <Row className="mt-4 mt-md-0">
                <Col md={9}>
                    <h5 className="font-weight-bold title-color">Latest settlement pending</h5>
                </Col>
                <Col md={3} className="text-md-right">
                <Buttons
                    type="submit"
                    children ="View More"
                    styleClass="rounded-0 bg-custom-black"
                    handleClick={viewMore}
                    
                />
                </Col>
            </Row>
            <Col className="p-0">
            <div className="overflow-table">
                <table className="dashtable mt-3 custom-border-light">
                    <tr>
                        <th>Name</th>
                        <th>Track</th>
                        <th>Estimated Settlement Amount (Won)</th>
                        <th>Estimated Settlement Date</th>
                       
                    </tr>
                    {LatestSet.map(item => {
                        return (
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Track}</td>
                                <td>{item.Amount}</td>
                                <td>{item.Date}</td>
                               
                            </tr>
                        )
                        }
                        )
                    }
                </table>
            
            </div>
            </Col>
        </Col>
    </>
    )
}

export default LatestSettle;


