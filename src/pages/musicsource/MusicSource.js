import React, { useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import Buttons from '../../common/Buttons';
import InputField from '../../common/InputField';
import SelectOption from '../../common/SelectOption';
import MusicSourceList from './MusicSourceList';




function MusicSource() {

const [state, setState ] = useState({
msourcestatus: '',
msourcetrack:'',
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

// const history = useHistory();
// const musicRegForm = () =>{
//     history.push('/musicsourcereg');
//     }

return (
<>
    <div className="p-0">
        <div className="bg-navigation">
        <Col className="w-100">
            <Row>
                <Col md={6}><h1 className="text-white">Music Source</h1></Col>
                <Col md={6} className="d-flex">
                   
                    <p className="button-tabs-filter bg-gray text-white">Total : 100 </p>
                    <p className="button-tabs-filter">Approval :  50</p>
                    <p className="button-tabs-filter">Disapproved : 50</p>
                    
                    
                    
                    
                </Col>
            </Row>
        </Col>
            
        </div>
    </div>
    <Container fluid>
        <Row className="pt-5 pl-md-3 mt-4 mt-md-0">

            <Col lg={12}>
            <Row>
                <Col lg={2} className="pt-4 pr-lg-0">
                <div className="head-member">
                    <h6>Registration Date</h6>
                </div>
                </Col>
                <Col lg={10} className="pt-lg-4 pb-3 pb-lg-0 pl-lg-0">
                <Form.Row className="stela-row m-0">

                   

                    <div className="p-2">
                        <InputField 
                        name="date" 
                        value={state.date} 
                        type="date" 
                        InputstyleClass="mb-0 manage-datepicker" 
                        onChange={handleChange} required />
                    </div>

                    <div className="pt-2"> _ </div>

                    <div className="p-2">
                        <InputField 
                        name="dateend" 
                        value={state.dateend} 
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
                            {value: 1, label: 'Approved' }, 
                            {value: 2, label: 'DisApproved' },]} 
                            onChange={handleDropdown} 
                            name="msourcestatus" 
                            defauultvalue="Status" 
                            styleClass="drop-down-margin" />
                    </div>


                    <div className="p-2">
                        <SelectOption 
                        disabled data={[ 
                            {value: 1, label: 'Artist' }, 
                            {value: 2, label: 'Track' }, ]} 
                            onChange={handleDropdown} 
                            name="msourcetrack" 
                            defauultvalue="Album" 
                            styleClass="drop-down-margin" />
                    </div>


                  


                    <Form.Row>
                        <Col>
                        <div className="p-2 d-flex">
                            <InputField 
                            name="stelamembersearch" 
                            value={state.stelamembersearch} 
                            placeholder="Enter search terms" 
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
                <MusicSourceList/>
            </div>
                {/* <div className="pt-3 pl-md-3 pl-0">
                            <Buttons 
                            type="submit" 
                            children="Register" 
                            styleClass="search-button ml-2" 
                            handleClick={musicRegForm} />

                            <Buttons 
                            type="submit" 
                            children="Manage" 
                            styleClass="search-button ml-2" 
                            handleClick={viewMore} />
                </div> */}
            </Col>
        </Row>
    </Container>
</>
)
}

export default MusicSource