import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useHistory } from 'react-router-dom'
import Buttons from "../../common/Buttons";
import InputField from "../../common/InputField";

export default function User() {
    const history = useHistory();

    const [state, setState] = useState({
        msourcestatus: '',
        msourcetrack: '',
    })

    const handleChange = (e) => {

        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };


    const viewMore = () => {

    }


    const linkFollow = (cell, row, rowIndex, formatExtraData) => {
        return (
            <Buttons
                type="submit"
                children="View"
                styleClass="rounded-0 bg-custom-black "
                handleClick={() => PlaylistManageBtn(row)}
            />
        );
    }

    const userdata = (cell, row, rowIndex, formatExtraData) => {
        return (
            <div className="user-img">
                <img src={user_data.User} />
            </div>
        );
    }

    const PlaylistManageBtn = (row) => {
        console.log("row", row);
        history.push('/user-details');
    }

    const PlaylistRegBtn = () => {
        history.push('/playlistreg');
    }


    const user_data = [
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
        {
            id: "11",
            User: "/img/user.jpg",
            First: "Sondagar",
            Last: "Ravi",
            Email: "ravi.sondagar125@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "12",
            User: "/img/user2.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "13",
            User: "/img/user.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "14",
            User: "/img/user2.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "15",
            User: "/img/user.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "16",
            User: "/img/user2.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "17",
            User: "/img/user.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "18",
            User: "/img/user2.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "19",
            User: "/img/user.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },

        {
            id: "20",
            User: "/img/user2.jpg",
            First: "Rahul",
            Last: "Chauhan",
            Email: "rahul.c@gmail.com ",
            Mo: "9745612307",
            Reg: "02-01-2022",
        },
    ];

    const play_head = [
        {
            dataField: "id",
            text: "No",
        },
        {
            dataField: "User",
            text: "User",
            formatter: userdata,

        },
        {
            dataField: "First",
            text: "First Name	",
        },
        {
            dataField: "Last",
            text: "Last Name",
        },
        {
            dataField: "Email",
            text: "Email Id	",
        },
        {
            dataField: "Mo",
            text: "Mo No.",
        },
        {
            dataField: "Reg",
            text: "Reg. Date",
        },
        {
            dataField: "Action",
            text: "Action",
            formatter: linkFollow,
        },
    ];

    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total">
            Showing {from} to {to} of {size} Results
        </span>
    );


    const options = {
        paginationSize: 5,
        pageStartIndex: 1,
        alwaysShowAllBtns: true,
        hidePageListOnlyOnePage: true,
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
            text: '10', value: 10
        }, {
            text: '20', value: 20
        }, {
            text: 'All', value: user_data.length
        }]
    };

    return (
        <>
            <div className="col-12 p-0">
                <div className="bg-navigation">
                    <h1 className="text-white">Users</h1>
                </div>
            </div>
            <Container fluid>
                <Row className="pt-5 pl-md-3 mt-4 mt-md-0">

                    <Col lg={12}>
                        <Row>
                            <Col lg={2} className="pt-4 pr-lg-0">
                                <div className="head-member">
                                    <h6>Search</h6>
                                </div>
                            </Col>
                            <Col lg={10} className="pt-lg-4 pb-3 pb-lg-0 pl-lg-0">
                                <Form.Row className="stela-row m-0">


                                    <Form.Row>
                                        <Col>
                                            <div className="p-2 d-flex">
                                                <InputField
                                                    name="stelamembersearch"
                                                    value={state.stelamembersearch}
                                                    placeholder="Enter User Name"
                                                    type="text"
                                                    InputstyleClass="custom-input custom-height"
                                                    onChange={handleChange}
                                                    required />

                                                <Buttons
                                                    type="submit"
                                                    children="Search"
                                                    styleClass="search-button ml-2"
                                                    handleClick={viewMore} />
                                            </div>
                                        </Col>
                                    </Form.Row>
                                </Form.Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col >
                        <div className="pt-3 pl-md-3 pl-0">
                            <div className="py-2 total-results d-flex">
                                <div><h5 className="title-color font-weight-bold">Total <span className="span-color-pink"> 100 </span> Results</h5></div>
                            </div>

                            <div className="App">
                                <BootstrapTable
                                    bootstrap4
                                    keyField="id"
                                    data={user_data}
                                    columns={play_head}
                                    pagination={paginationFactory(options)}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    );
}
