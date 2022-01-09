import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useHistory } from 'react-router-dom'
import Buttons from "../../common/Buttons";
import InputField from "../../common/InputField";

function Video() {
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

    
    const viewBtn = () => {
        history.push('/video-View');

    }

    const editBtn = () => {
        history.push('/video-View');

    }

    const deleteBtn = () => {

    }


    const viewlink = (cell, row, rowIndex, formatExtraData) => {
        return (
            <Buttons
                type="submit"
                children="View"
                styleClass="rounded-0 bg-custom-black "
                handleClick={viewBtn}
            />
        );
    }

    const editlink = (cell, row, rowIndex, formatExtraData) => {
        return (
            <Buttons
                type="submit"
                children="Edit"
                styleClass="rounded-0 bg-custom-black "
                handleClick={editBtn}
            />
        );
    }

    const deletelink = (cell, row, rowIndex, formatExtraData) => {
        return (
            <Buttons
                type="submit"
                children="Delete"
                styleClass="rounded-0 bg-custom-black "
                handleClick={deleteBtn}
            />
        );
    }

    const userdata = (cell, row, rowIndex, formatExtraData) => {
        return (
            <div>
                <img src={user_data.User} width={100}/>
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
            Thumb: "/img/user.jpg",
            Title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            Link: "https://www.google.com/",
            Date: "12-02-1993",
            
        },
    ];

    const play_head = [
        {
            dataField: "id",
            text: "No",
        },
        {
            dataField: "Thumb",
            text: "Thumb",
            formatter: userdata,

        },
        {
            dataField: "Title",
            text: "Title",
        },
        {
            dataField: "Link",
            text: "Link",
        },
        {
            dataField: "Date",
            text: "Date",
        },
        {
            dataField: "View",
            text: "View",
            formatter: editlink,

        },
        {
            dataField: "Edit",
            text: "Edit",
            formatter: viewlink,

        },
        {
            dataField: "Delete",
            text: "Delete",
            formatter: deletelink,

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
                    <h1 className="text-white">Video Gallary</h1>
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
                                                    placeholder="Search"
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
    )
}

export default Video;
