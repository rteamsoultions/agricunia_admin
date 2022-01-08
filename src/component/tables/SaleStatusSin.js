import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Buttons from '../../common/Buttons';

function SaleStatusSin() {
    const SaleStatusSubsingle = [
        {
            No: "1",
            Artist: "Standing Egg",
            Album: "Old Song",
            Track: "Old Song",
            Total: "3,000",
        },

        {
            No: "1",
            Artist: "Standing Egg",
            Album: "Old Song",
            Track: "Old Song",
            Total: "3,000",
        },
    ];

    const viewMore = () => {
        console.log('Recent sales status (single license)')
    }

    return (
        <>
            <Col lg={6} className="mt-md-5">
                <Row className="mt-4 mt-md-0">
                    <Col md={9}>
                        <h5 className="font-weight-bold title-color">Recent sales status (single license)</h5>
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
                            <th>No</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th>Track</th>
                            <th>Total payment (Won)</th>
                        </tr>
                        {SaleStatusSubsingle.map(item => {
                            return (
                                <tr>
                                    <td>{item.No}</td>
                                    <td>{item.Artist}</td>
                                    <td>{item.Album}</td>
                                    <td>{item.Track}</td>
                                    <td>{item.Total}</td>
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

export default SaleStatusSin
