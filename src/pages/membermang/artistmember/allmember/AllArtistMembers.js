import React, { useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import Buttons from '../../../../common/Buttons';

import InputField from '../../../../common/InputField';
import SelectOption from '../../../../common/SelectOption';
import ArtistMemberList from './ArtistMemberList';

function AllArtistMembers() {

const [state, setState ] = useState({
    artselectdate:'',
    artdatefrom:'',
    artdateto:'',
    artusertype:'',
    artselectcountry:'',
    artselectnamev:'',
    artname:'',

})


const handleChange = (e) => {

setState({
...state,
[e.target.name]: e.target.value
});
};


const handleDropdown = () =>{

}

const viewMore = () => {

}

return (
<>
    <div className="col-12 p-0">
        <div className="bg-navigation">
            <h1 className="text-white">Artist member</h1>
        </div>
    </div>
    <Container fluid>
        <Row className="pt-5 pl-md-3 mt-4 mt-md-0">

            <Col lg={12}>
            <Row>
                <Col lg={2} className="pt-4 pr-lg-0">
                <div className="head-member">
                    <h6>Period</h6>
                </div>
                </Col>
                <Col lg={10} className="pt-lg-4 pb-3 pb-lg-0 pl-lg-0">
                <Form.Row className="stela-row m-0">

                    <div className="p-2 ">
                        <SelectOption 
                        disabled data={[ 
                            {value: 1, label: 'Today' }, 
                            {value: 2, label: 'Yesterday' }, 
                            {value: 3, label: 'This Week' }, 
                            {value: 4, label: 'This Month' }, ]} 
                            onChange={handleDropdown} 
                            name="artselectdate" 
                            styleClass="drop-down-margin" 
                            defauultvalue="Sign up Date" />
                    </div>

                    <div className="p-2">
                        <InputField 
                        name="artdatefrom" 
                        value={state.artdatefrom} 
                        type="date" 
                        InputstyleClass="mb-0 manage-datepicker" 
                        onChange={handleChange} 
                        required />
                    </div>

                    <div className="pt-2"> _ </div>

                    <div className="p-2">
                        <InputField 
                        name="artdateto" 
                        value={state.artdateto} 
                        type="date" 
                        InputstyleClass="mb-0 manage-datepicker" 
                        onChange={handleChange} 
                        required />
                    </div>

                    <Buttons 
                    type="submit" 
                    children="Yesterday" 
                    styleClass="filter-button mr-1" 
                    handleClick={viewMore} />

                    <Buttons 
                    type="submit" 
                    children="Today" 
                    styleClass="filter-button mr-1" 
                    handleClick={viewMore} />


                    <Buttons 
                    type="submit" 
                    children="1 Months" 
                    styleClass="filter-button mr-1" 
                    handleClick={viewMore} />


                    <Buttons 
                    type="submit" 
                    children="3 Months" 
                    styleClass="filter-button mr-1" 
                    handleClick={viewMore} />


                    <Buttons 
                    type="submit" 
                    children="6 Months" 
                    styleClass="filter-button mr-1" 
                    handleClick={viewMore} />

                    <Buttons 
                    type="submit" 
                    children="1 Year" 
                    styleClass="filter-button mr-1" 
                    handleClick={viewMore} />

                </Form.Row>
                </Col>
            </Row>
            </Col>
        </Row>
    </Container>


    <Container fluid>
        <Row className=" pl-md-3 ">

            <Col lg={12}>
            <Row>
                <Col lg={2} className="pt-0 pr-lg-0">
                <div className="head-member">
                    <h6>Condition</h6>
                </div>
                </Col>
                <Col lg={10} className="pt-0 pl-lg-0">
                <Form.Row className="stela-row m-0">

                    <div className="p-2">
                        <SelectOption 
                        disabled data={[ 
                            {value: 1, label: 'Creator' }, 
                            {value: 2, label: 'Business' },  ]} 
                            onChange={handleDropdown} 
                            name="artusertype" 
                            defauultvalue="User Type" 
                            styleClass="drop-down-margin" />
                    </div>


                    <div className="p-2">
                        <SelectOption disabled 
                        data={[ 
                            {value: 1, label: 'india' }, 
                            {value: 2, label: 'USA' }, 
                            {value: 3, label: 'UK' }, 
                            {value: 4, label: 'Germany' }, ]} 
                            onChange={handleDropdown} 
                            name="artselectcountry" 
                            defauultvalue="Country" 
                            styleClass="drop-down-margin" />
                    </div>


                    <div className="p-2">
                        <SelectOption disabled 
                        data={[ 
                            {value: 1, label: 'india' }, 
                            {value: 2, label: 'USA' }, 
                            {value: 3, label: 'UK' }, 
                            {value: 4, label: 'Germany' }, ]} 
                            onChange={handleDropdown} 
                            name="artselectname" 
                            defauultvalue="Name" 
                            styleClass="drop-down-margin" />
                    </div>


                    <Form.Row>
                        <Col>
                        <div className="p-2 d-flex">
                            <InputField 
                            name="artname" 
                            value={state.artname} 
                            placeholder="Enter search terms" 
                            type="text" 
                            InputstyleClass="custom-input custom-height" 
                            onChange={handleChange} required />

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
                    <ArtistMemberList/>
                </div>
            </Col>
        </Row>
    </Container>
</>
)
}

export default AllArtistMembers