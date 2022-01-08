import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Buttons from '../../common/Buttons';

function PayHissin() {
    const PayHisSingle = [
        {
            Name: "Hong Gildong",
            tarck: "The letter",
            Usage: " Broadcast Program",
            Amount: "4,400,000",
        },

        {
            Name: "Hong Gildong",
            tarck: "The letter",
            Usage: " Broadcast Program",
            Amount: "4,400,000",
        },
    ];

    const viewMore = () => {
        console.log('Recent payment history (single license)')
    }

    return (
        <>
        <Col lg={6} className="mt-md-5">
            <Row className="mt-4 mt-md-0">
                <Col md={9}>
                    <h5 className="font-weight-bold title-color"> Recent payment history (single license)</h5>
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
                        <th>Usage</th>
                        <th>Amount(Won)</th>
                    </tr>
                    {PayHisSingle.map(item => {
                        return (
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.tarck}</td>
                                <td>{item.Usage}</td>
                                <td>{item.Amount}</td>
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

export default PayHissin;
