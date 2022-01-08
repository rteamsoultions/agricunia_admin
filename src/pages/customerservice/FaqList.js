import React, { useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import Buttons from '../../common/Buttons';
import InputField from '../../common/InputField';
import FaqResult from './FaqResult';





function FaqList() {

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




const viewMore = () => {

}

return (
<>
    <div className="p-0">
        <div className="bg-navigation">
        <Col className="w-100">
            <Row>
                <Col md={12}><h1 className="text-white">FAQ</h1></Col>
                
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
                <FaqResult/>
                </div>
            </Col>
        </Row>
    </Container>

   

    
</>
)
}

export default FaqList