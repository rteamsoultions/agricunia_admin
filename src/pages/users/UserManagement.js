import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useHistory } from 'react-router-dom'
import Buttons from "../../common/Buttons";
import InputField from "../../common/InputField";
import { ApiGet, ApiPut } from "../../helper/API/ApiData";
import TerminatedUserList from "./TerminatedUserList";
import UserList from "./UserList";

const UserManagement = () => {

    const history = useHistory();

    const [searchTerm, setSearchTerm] = useState("")

    const [userdata, setUserdata] = useState([])
    const [totalSize, setTotalSize] = useState(0);
    const [userListId, setUserListId] = useState([]);
    const [showTerminatedUserList, setShowTerminatedUserList] = useState(false);
    const start_date = ""
    const end_date = ""
    const user_information = "all"

    const getUserListData = (page_number = 1, per_page = 10) => {
        setUserdata([])
        ApiGet(`user/auth/getFilteredUser?start_date=${start_date}&end_date=${end_date}&user_information=${user_information}&search_term=${searchTerm}&per_page=${per_page}&page_number=${page_number}`)
            .then((res) => {
                setTotalSize(res.data && res.data.count);
                setUserdata(res.data.users)
                setUserdata(res.data &&
                    res.data.users &&
                    res.data.users.map((x, index) => {
                        return {
                            id: x.id,
                            no_id: res.data.count - (page_number - 1) * per_page - index,
                            created_at: x.created_at,
                            email: x.email,
                            first_name: x.first_name,
                            last_name: x.last_name,
                            role_type: x.role_type
                        };
                    }))
            })
    }

    const goToTerminateUserList = () => {
        terminateUserList(1,10)
    }

    const terminateUserList = (page_number = 1, per_page = 10) => {
        setUserdata([])
        ApiGet(`user/auth/getTerminatedUsers?start_date=${start_date}&end_date=${end_date}&user_information=${user_information}&search_term=${searchTerm}&per_page=${per_page}&page_number=${page_number}`)
            .then((res) => {
                setShowTerminatedUserList(true)
                setTotalSize(res.data && res.data.count);
                setUserdata(res.data.users)
                setUserdata(res.data &&
                    res.data.users &&
                    res.data.users.map((x, index) => {
                        return {
                            id: x.id,
                            no_id: res.data.count - (page_number - 1) * per_page - index,
                            created_at: x.created_at,
                            email: x.email,
                            first_name: x.first_name,
                            last_name: x.last_name,
                            role_type: x.role_type,
                            deleted_by: x.deleted_by
                        };
                    }))
            })
    }

    const selectRow = {
        mode: "checkbox",
        onSelect: (isSelect, rows, e) => {
            const index = userListId.findIndex(
                (item) => item.id === isSelect.id
            );
            if (index !== -1 && index !== undefined) {
                userListId.splice(index, 1);
            } else {
                userListId.push({ id: isSelect.id });
            }
        },
        onSelectAll: (isSelect, rows, e) => {
            if (isSelect === true) {
                rows.map((x) => (
                    userListId.push({ id: x.id })
                ));
            } else {
                setUserListId([]);
            }
        },
    };

    const CreateUser = () => [
        history.push('/user-details')
    ]

    const terminateUser = () => {
        if (userListId.length > 0) {
            ApiPut(`user/auth/terminateUser`, {
                id: userListId.map((m) => m.id).join(","),
            }).then((res) => {
                getUserListData()
                setUserListId([])
            });
        }
    }

    const goToUserList = () => {
        setShowTerminatedUserList(false)
        getUserListData()
    }

    const searchUser = () => {
        if(showTerminatedUserList) {
            terminateUserList(1,10)
        } else {
            getUserListData(1,10)
        }
    }

    useEffect(() => {
        getUserListData()
    }, [])


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
                                                    value={searchTerm}
                                                    placeholder="Enter User Name"
                                                    type="text"
                                                    InputstyleClass="custom-input custom-height"
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                    required />

                                                <Buttons
                                                    type="submit"
                                                    children="Search"
                                                    styleClass="search-button ml-2"
                                                    handleClick={searchUser} />
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
                                <div><h5 className="title-color font-weight-bold">Total <span className="span-color-pink"> {totalSize} </span> Results</h5>
                                    {!showTerminatedUserList &&
                                        <>
                                            <Buttons handleClick={goToTerminateUserList} styleClass="search-button ml-2" children="Show Terminated User"></Buttons>
                                            <Buttons handleClick={CreateUser} styleClass="search-button ml-2" children="Create"></Buttons>
                                            <Buttons handleClick={terminateUser} styleClass="search-button ml-2" children="Delete"></Buttons>
                                        </>
                                    }
                                    {showTerminatedUserList &&
                                        <Buttons handleClick={goToUserList} styleClass="search-button ml-2" children="Got User List"></Buttons>
                                    }
                                </div>
                            </div>

                            <div className="App">
                                {!showTerminatedUserList &&
                                    <UserList
                                        data={userdata}
                                        getUserListManagement={getUserListData}
                                        totalSize={totalSize}
                                        selectRow={selectRow}
                                    />
                                }
                                {showTerminatedUserList &&
                                    <TerminatedUserList
                                        data={userdata}
                                        getUserListManagement={getUserListData}
                                        totalSize={totalSize}
                                        selectRow={<></>}
                                    />
                                }
                                {/* <BootstrapTable
                                    bootstrap4
                                    keyField="id"
                                    data={user_data}
                                    columns={play_head}
                                    pagination={paginationFactory(options)}
                                /> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default UserManagement
