import React, { useState } from 'react';
import { Col, Container, Form, Row ,Modal, } from 'react-bootstrap';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Buttons from '../../../common/Buttons';
import InputField from '../../../common/InputField';
import ImageUpload from '../../../common/ImageUpload';




function StelaStationReg() {
    const [AddPlayListTrack, setAddPlayListTrack] = useState(false);
    // const [AddTrack, setAddTrack] = useState(false);
    const [imgLoader] = useState(false);
    // const [imgLoader, setimgLoader] = useState(false);


    const [eventInfo, setEventInfo] = useState({
        image_URL: "",
        signature_URL:"",
      });
    const [state, setState ] = useState({

    selectoptioncountry:'',
    creatortel: '',
    creatoremail:'',
    companyname:'',
    vocal_summary:'',
    })


    


    const handleChange = (e) => {

    setState({
    ...state,
    [e.target.name]: e.target.value
    });
    };



    const viewMore = () => {
    }



    const history = useHistory();

    const liststelastation = () =>{
    history.push('/stelastation');
    }

    const imageOnChange = (file) => {
       console.log("image-loaded");
      }

     
    
    const onRemoveImage = () => {
        console.log("onRemove Called");
        setEventInfo({
          ...eventInfo,
          image_URL: "",
          signature_URL:"",
        },
        (value) => {
          console.log("value",value);
        }
        )
    
        console.log("image url",eventInfo.image_URL,eventInfo.signature_URL);
    
      }

      
      const DeletePostBtn =() => {

        swal({
            title: "Delete the post",
            text: "Do you want to delete the post?",
           
            buttons: ["Cancle", "Delete"],
            // dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Delete the post","The post has been successfully deleted", {
               
              });
            } 
         
          });
        }

        const SavePostBtn =() => {

            swal({
                title: "Save the post",
                text: "The post has been successfully saved",
               
               
              })
             
            }

            const RegPostBtn =() => {

                swal({
                    title: "Registration Complete",
                    text: "The post has been successfully registered",
                   
                   
                  })
                 
                }




        const linkFollow = (cell, row, rowIndex, formatExtraData) => {
            return (
                <Buttons
                type="submit"
                children ="Select"
                styleClass="rounded-0 bg-custom-black focus-pink"
                handleClick={viewMore}
                />
            );
          }
        
        const sstation_list = [
            {
                id: 1, 
                sstation_play: "Best Pops 2020", 
                sstatiopn_reg_date: "YYYY.MM.DD HH:MM" ,
               
            },
        
          ];
        
        
        const sstation_head = [
          {
            dataField: "id",
            text: "No",
            
          },
          {
            dataField: "sstation_play",
            text: "Playlist",
            
           
          },
          {
            dataField: "sstatiopn_reg_date",
            text: "Registration Date",
          
           
          },
       
        
          {
            dataField: "Select",
            text: "Select",
            formatter: linkFollow,
            
          },
        ];

        const customTotal = (from, to, size) => (
            <span className="react-bootstrap-table-pagination-total">
              Showing { from } to { to } of { size } Results
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
              text: 'All', value: sstation_list.length
            }] 
          };

          
        
    

return (
<>
    <div className="col-12 p-0">
        <div className="bg-navigation">
            <h1 className="text-white">stela station</h1>
        </div>
    </div>

    <Container fluid className="creator-table">
        <Row className="pt-5 pl-md-3 mt-4 mt-md-0 pb-5">

            <Col lg={12}>
            <Form>

                <div className="overflow-table">
                    <Col xs={12} className="pb-3 pl-0 pt-5">
                        <h4 className="font-weight-bold title-color">View Detail</h4>
                        <h4 className="font-weight-bold title-color">Registration</h4>
                    </Col>
                    <Container fluid  class="mt-3 ">

                        <Row>
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Playlist Name</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2 d-flex">
                               
                                    <InputField
                                    name="creatortel" 
                                    value={state.creatortel} 
                                    placeholder="Artist Name" 
                                    type="search" 
                                    InputstyleClass="custom-input mb-0 custom-width" 
                                   />
                                    <Buttons
                                        type="submit"
                                        children ="Manage"
                                        styleClass="rounded-0 bg-custom-black ml-4"
                                        handleClick={()=> {setAddPlayListTrack(true)}}
                                        />
                                </div>
                            </Col>
                     
                                
                        
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Cover Page   </Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2 signature-inputs">
                                    <ImageUpload value={eventInfo.image_URL} onChange={imageOnChange} onRemove={onRemoveImage} loader={imgLoader}/>
                                    <p className="mb-0 font-sm">
                                    * This is an image displayed on stela staion detail page.<br/>
                                    * Only images with the file name extension jpg/png, 2000x2000px to 6000x6000px can be uploaded.
                                    </p>
                                </div>
                            </Col>

                            <Col md={3} className="profile-table-td title-color font-weight-bold">Registration Date</Col>
                            <Col md={9} className="profile-table-td-input ">
                                <div className="py-2">
                                    <label class="profile-label">YYYY-MM-DD HH:MM</label>
                                </div>
                            </Col>
                       
                        </Row>
                        
                        
                        

                     

                       

                     
                
                  

                    

                    </Container>
                    <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                    <div className="text-center">
                        <Buttons type="submit" children="List" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={liststelastation} />
                        <Buttons type="submit" children="Save" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-pink" handleClick={SavePostBtn} />
                        <Buttons type="submit" children="Delete" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={DeletePostBtn} />
                    </div>
                    </Col>

                    <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                    <div className="text-center">
                        <Buttons type="submit" children="List" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={liststelastation} />
                        <Buttons type="submit" children="Register" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-pink" handleClick={RegPostBtn} />
                        
                    </div>
                    </Col>

                </div>
            </Form>
            </Col>
        </Row>
    </Container>

    <Modal show={AddPlayListTrack} onHide={()=> {setAddPlayListTrack(false)}}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
  <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title pt-4" className="pl-3 text-left">
                <span className="font-weight-bold ">Select a playlist</span>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Col lg={12}>
            <Row>
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
                <Col lg={12}>
            <Row>
                <Col lg={2} className="pt-0 pr-lg-0">
                <div className="head-member">
                    <h6>Condition</h6>
                </div>
                </Col>
                <Col lg={10} className="pt-0 pl-lg-0">
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
            </Col>
               
                <Col lg={12} className="pt-4">
                <div><h5 className="title-color font-weight-bold">Total <span className="span-color-pink"> 100 </span> Results / <span className="span-color-pink"> 1 </span> Selected</h5></div>
                </Col>
                <Col lg={12} className="stela-profile">
                <div className="App">
                    <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={sstation_list}
                    columns={sstation_head}
                    pagination={paginationFactory(options)}
                    />
                </div>
                </Col>
              
            </Row>
            </Col>

          

        </Modal.Body>
    </Modal>


   
    
</>
)
}

export default StelaStationReg;