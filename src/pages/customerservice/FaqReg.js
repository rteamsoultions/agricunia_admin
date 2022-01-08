import React, { useState } from 'react'
import { Container, Row, Col, Form} from 'react-bootstrap'
import { useHistory } from 'react-router'
import Buttons from '../../common/Buttons'
import InputField from '../../common/InputField'
import swal from 'sweetalert';
 
function FaqReg() {
    const [state, setState ] = useState({
        creator_AddnNote:'',
        })

    const [isEdit] = useState(false)

    // const [isEdit, setIsEdit] = useState(false)
    
    // const viewMore = () =>{
    //    console.log("Hi");
    // }

    const history = useHistory();
    const listfaq = () =>{
        history.push('/faqlist');
    }

    const handleChange = (e) => {

        setState({
        ...state,
        [e.target.name]: e.target.value
        });
        };

    const FaqRegAlert = () =>{  
        swal("Posting Complete", "This post has been registered!");
    }

    const FaqAmendRegAlert = () =>{  
        swal("Posting Complete", "You have registered the post successfully");
    }

    const faqdeletebutton =() => {

        swal({
            title: "Posting Delete",
            text: "Do you want to delete this post?",
           
            buttons: ["Cancle", "Delete"],
            // dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Posting Delete","You have deleted the post successfully.", {
               
              });
            } 
         
          });
        }
    return (
        <>
             <div className="col-12 p-0">
        <div className="bg-navigation">
            <h1 className="text-white">FAQ</h1>
        </div>
    </div>

    <Container fluid className="creator-table">
        <Row className="pt-5 pl-md-3 mt-4 mt-md-0 pb-5">
            <Col lg={12}>
            <Form>
                <div className="overflow-table">
                    <Col xs={12} className="pb-3 pl-0 pt-5">
                    { !isEdit && (
                        <h4 className="font-weight-bold title-color">Register</h4>
                        )
                        }
                       
                        { isEdit && (
                        <h4 className="font-weight-bold title-color">View Details</h4>
                        )
                        }
                    </Col>
                    <Container fluid class="mt-3 ">
                        <Row>
                           
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Title</Col>
                            <Col md={9} className="profile-table-td-input ">
                                <div className="py-2">
                                    <InputField 
                                    name="creatortel" 
                                    value={state.creatortel} 
                                    placeholder="Enter the title" 
                                    type="tel" 
                                    InputstyleClass="custom-input mb-0" 
                                    onChange={handleChange} 
                                    required />
                                </div>
                            </Col>
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Content</Col>
                            <Col md={9} className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField
                                     
                                    name="creator_AddnNote" 
                                    value={state.creator_AddnNote} 
                                    placeholder="Enter the content" 
                                    type="textarea" 
                                    InputstyleClass="custom-input mb-0 content-text" 
                                    onChange={handleChange}/>
                                </div>
                            </Col>
                            { isEdit && (
                                <>
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Registration date</Col>
                            <Col md={9} className="profile-table-td-input">
                                <label class="profile-label">YYYY-MM-DD HH:MM</label>
                            </Col>
                            </>
                            )}
                        
                       
                        </Row>
                    </Container>
                    { !isEdit && (
                    <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                    <div className="text-center">
                        <Buttons
                        type="submit" 
                        children="List" 
                        styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" 
                        handleClick={listfaq} />

                        <Buttons 
                        type="submit" 
                        children="Register" 
                        styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-pink" 
                        handleClick={FaqRegAlert} />

                    </div>
                    
                    </Col>)}
                    { isEdit && (
                    <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                    <div className="text-center">
                        <Buttons
                        type="submit" 
                        children="List" 
                        styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" 
                        handleClick={listfaq} />

                        <Buttons 
                        type="submit" 
                        children="Register" 
                        styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-pink" 
                        handleClick={FaqAmendRegAlert} />

                        <Buttons
                        type="submit" 
                        children="Delete" 
                        styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" 
                        handleClick={faqdeletebutton} />

                    </div>
                    
                    </Col>
                    )}

                </div>
            </Form>
            </Col>
        </Row>
    </Container>
        </>
    )
}

export default FaqReg
