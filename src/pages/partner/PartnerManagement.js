import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import Buttons from '../../common/Buttons';
import InputField from '../../common/InputField';
import { ApiGet } from '../../helper/API/ApiData';
import PartnerList from './PartnerList';

const PartnerManagement = () => {
    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState("")
    const [partnerData, setPartnerdata] = useState([])
    const [totalSize, setTotalSize] = useState(0);
    const [partnerListId, setPartnerListId] = useState([]);

    const getPartnerListData = (page_number = 1, per_page = 10) => {
        ApiGet(`partner/auth/get-filtered-partner?search_term=${searchTerm}&per_page=${per_page}&page_number=${page_number}`)
            .then((res) => {
                setTotalSize(res.data && res.data.count);
                setPartnerdata(res.data.partners)
                setPartnerdata(res.data &&
                    res.data.partners &&
                    res.data.partners.map((x, index) => {
                        return {
                            id: x.id,
                            no_id: res.data.count - (page_number - 1) * per_page - index,
                            created_at: x.created_at,
                            partner_name: x.partner_name,
                            image: x.image,
                            display_image: x.display_image,
                            partner_weblink: x.partner_weblink,
                        };
                    }))
            })
    }

    const selectRow = {
        mode: "checkbox",
        onSelect: (isSelect, rows, e) => {
            const index = partnerListId.findIndex(
                (item) => item.id === isSelect.id
            );
            if (index !== -1 && index !== undefined) {
                partnerListId.splice(index, 1);
            } else {
                partnerListId.push({ id: isSelect.id });
            }
        },
        onSelectAll: (isSelect, rows, e) => {
            if (isSelect === true) {
                rows.map((x) => (
                    partnerListId.push({ id: x.id })
                ));
            } else {
                setPartnerListId([]);
            }
        },
    };

    const CreatePartner = () => {
        history.push('/partner-view')
    }

    const searchPartner = () => {
        getPartnerListData(1, 10)
    }

    useEffect(() => {
        getPartnerListData(1, 10)
    }, [])
    
    return (
        <>
            <div className="col-12 p-0">
                <div className="bg-navigation">
                    <h1 className="text-white">Partner Page</h1>
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
                                                    placeholder="Search"
                                                    type="text"
                                                    InputstyleClass="custom-input custom-height"
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                    required />

                                                <Buttons
                                                    type="submit"
                                                    children="Search"
                                                    styleClass="search-button ml-2"
                                                    handleClick={searchPartner} />
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
                                <Buttons handleClick={CreatePartner} styleClass="search-button ml-2" children="Create"></Buttons>
                                </div>
                            </div>

                            <div className="App">
                                <PartnerList
                                    data={partnerData}
                                    getPartnerListManagement={getPartnerListData}
                                    totalSize={totalSize}
                                    selectRow={selectRow}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default PartnerManagement
