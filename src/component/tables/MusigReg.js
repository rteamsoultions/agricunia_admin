import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Buttons from '../../common/Buttons';


function MusigReg() {

    const RecMusicReg = [
        {
            id: "1",
            User: "/img/user.jpg",
            First: "Sondagar",
            Last: "Ravi",
            Email: "ravi.sondagar125@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "2",
            User: "/img/user2.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "3",
            User: "/img/user.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "4",
            User: "/img/user2.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "5",
            User: "/img/user.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "6",
            User: "/img/user2.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "7",
            User: "/img/user.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "8",
            User: "/img/user2.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "9",
            User: "/img/user.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "10",
            User: "/img/user2.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },
    ];

    const viewMore = () => {
        console.log('Recent music registration history')
    }

    return (
        <>
            <Col className="mt-md-5">
                <Row className="mt-4 mt-md-0">
                    <Col md={9}>
                        <h5 className="font-weight-bold title-color">New Users</h5>
                    </Col>
                    <Col md={3} className="text-md-right">
                        <Buttons
                            type="submit"
                            children="View More"
                            styleClass="rounded-0 bg-custom-black"
                            handleClick={viewMore}
                        />
                    </Col>
                </Row>
                <Col className="p-0">
                    <div className="overflow-table">
                        <table className="dashtable mt-3 custom-border-light">
                            <tr>
                                <th>id</th>
                                <th>User</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Id</th>
                                <th>Mo No.</th>
                                <th>Reg. Date</th>
                                <th>View</th>
                            </tr>
                            {RecMusicReg.map(item => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td className='user-img'> <img src={item.User}/></td>
                                        <td>{item.First}</td>
                                        <td>{item.Last}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Mo}</td>
                                        <td>{item.Reg}</td>
                                        <td>
                                            <button className='view-moreBtn'>View More</button>
                                        </td>

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

export default MusigReg;
