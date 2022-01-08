import React, { useState } from 'react';
import { Col, Container, Form, Row ,Button, Modal, Tab, Nav, OverlayTrigger, Image, Popover, Accordion, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Buttons from '../../common/Buttons';
import ImageUpload from '../../common/ImageUpload';
import InputField from '../../common/InputField';
import SelectOption from '../../common/SelectOption';
import swal from 'sweetalert';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import RadioButton from '../../common/RadioButton';
import CheckBox from '../../common/CheckBox';







function MusicSourceReg() {

    const [AddTrack, setAddTrack] = useState(false);
    const [imgLoader] = useState(false);
    // const [imgLoader, setimgLoader] = useState(false);
    const [showSearchMember, setshowSearchMember] = useState(false);

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


    const handleDropdown = () =>{

    }

    const viewMore = () => {
    }

    const history = useHistory();

    const listMusicSource = () =>{
    history.push('/musicsource');
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

      
      const deletebutton =() => {

        swal({
            title: "Delete a track",
            text: "Do you want to delete the track?",
           
            buttons: ["Cancle", "Delete"],
            // dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Track Deleted","The track is deleted", {
               
              });
            } 
         
          });
        }

        const albumapprove = () =>{
            swal({
                title: "Album Approval ",
                text: " Do you want to approve the album(Blooming)? ",
               
                buttons: ["Cancle", "OK"],
                // dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Album Approval ","You have approved the album(Blooming). ", {
                   
                  });
                } 
               
              });
        }

        const VocaleTextArea = () => {
        }

        function priceFormatter(cell, row) {
    
            return (
              <strong style={ { color: '#B931B8' } }>{ cell }</strong>
            );
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
        
        const sub_history_data = [
            {
                id: 1, 
                Search_M_User: "Artist", 
                Search_M_Name: "Hong Gildong" ,
                Search_M_Country: "Republic of Korea", 
                Search_M_Email: "abc@gmail.com", 
                Search_M_Mobile:"01012341234",
            },
        
        

            
        
          ];
        
        
        const download_history = [
          {
            dataField: "id",
            text: "No",
            
          },
          {
            dataField: "Search_M_User",
            text: "User Type",
            
           
          },
          {
            dataField: "Search_M_Name",
            text: "Name",
            formatter: priceFormatter,
            
           
          },
          {
            dataField: "Search_M_Country",
            text: "Country",
           
          },
          {
            dataField: "Search_M_Email",
            text: "Email",
           
          },
          {
            dataField: "Search_M_Mobile",
            text: "Mobile No.",
           
          },
        
          {
            dataField: "License Agreement",
            text: "License Agreement",
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
              text: 'All', value: sub_history_data.length
            }] 
          };

          
        
    

return (
<>
    <div className="col-12 p-0">
        <div className="bg-navigation">
            <h1 className="text-white">Music Source</h1>
        </div>
    </div>

    <Container fluid className="creator-table">
        <Row className="pt-5 pl-md-3 mt-4 mt-md-0 pb-5">

            <Col lg={12}>
            <Form>

                <div className="overflow-table">
                    <Col xs={12} className="pb-3 pl-0 pt-5">
                        <h4 className="font-weight-bold title-color">Album Information</h4>
                    </Col>
                    <Container fluid  class="mt-3 ">

                        <Row>
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Artist</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                <Buttons   styleClass="p-0 search-member-modal" handleClick={()=> {setshowSearchMember(true)}} >
                                    <InputField
                                    name="creatortel" 
                                    value={state.creatortel} 
                                    placeholder="Artist Name" 
                                    type="search" 
                                    InputstyleClass="custom-input mb-0" 
                                   />
                                </Buttons>
                                </div>
                            </Col>
                     
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Title</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField
                                    name="creatortel" 
                                    value={state.creatortel} 
                                    placeholder="Track Title" 
                                    type="text" 
                                    InputstyleClass="custom-input mb-0" 
                                    onChange={handleChange} required />
                                </div>
                            </Col>
                        
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Number of tracks</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField 
                                    name="creatortel" 
                                    value={state.creatortel} 
                                    placeholder="No of Track" 
                                    type="text" 
                                    InputstyleClass="custom-input mb-0" 
                                    onChange={handleChange} required />
                                </div>
                            </Col>
                        
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Cover Page   </Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <ImageUpload value={eventInfo.image_URL} onChange={imageOnChange} onRemove={onRemoveImage} loader={imgLoader}/>
                                    <p className="mb-0 font-sm">
                                    * This is an image displayed on the playlist list and detail page.<br/>
                                    * Only images with the file name extension jpg/png, 2000x2000px to 6000x6000px can be uploaded.
                                    </p>
                                </div>
                            </Col>
                       
                        </Row>
                        <Col xs={12} className="pb-3 pl-0 pt-5 d-flex">
                            <h4 className="font-weight-bold title-color title-color font-weight-bold">Tracks</h4>
                            <Buttons type="submit" children="Add a track" styleClass="rounded-0 bg-custom-black ml-4 px-3" handleClick={viewMore} />
                        </Col> 
                        
                        

                        <Row>
                            <Col md={12}  className="profile-table-td-input d-md-flex ">
                                <div className="mx-auto">
                                    <label class="profile-label py-5">
                                        <span >Add a track</span>
                                       
                                    </label>
                                </div>
                               
                            </Col>
                            <Col md={1}  className="profile-table-td title-color font-weight-bold">1</Col>
                            <Col md={11}  className="profile-table-td-input d-md-flex">
                                <div className="">
                                    <label class="profile-label">
                                        <span >Title  Artist’s name｜Album title</span>
                                        <span className="pl-4">Indie, Folk</span>
                                        <span className="pl-4">3:52</span>
                                    </label>
                                </div>
                                <div className="pt-2 ml-auto deletebutton">
                                    <Buttons  children="Amend" styleClass="rounded-0 bg-custom-black ml-2 px-3" handleClick={()=> {setAddTrack(true)}} />
                                    <Buttons type="submit" children="Delete" styleClass="rounded-0 bg-custom-black ml-2 px-3"  handleClick={deletebutton}/>
                                </div>
                            </Col>
                        </Row>

                       

                        <Col xs={12} className="pb-3 pl-0 pt-5">
                            <h4 className="font-weight-bold title-color title-color font-weight-bold">Approval</h4>
                        </Col>

                        <Row>
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Status</Col>
                            <Col md={9} className="profile-table-td-input ">
                                <div className="py-2">
                                    <Buttons type="submit" children="Pending" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line focus-status" handleClick={viewMore} />
                                    <Buttons type="submit" children="Approve" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line focus-status" handleClick={albumapprove} />
                                </div>
                            </Col>
                        </Row>  

                
                  

                        <Row className="mt-5">
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Admin note</Col>
                            <Col md={9} className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField 
                                    name="creatortel" 
                                    value={state.creatortel} 
                                    placeholder="" 
                                    type="textarea" 
                                    InputstyleClass="custom-input mb-0" 
                                    onChange={handleChange}/>
                                </div>
                            </Col>
                      
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Change History</Col>
                            <Col md={9} className="profile-table-td-input ">
                                <div className="py-2">
                                    <label class="profile-label">Hong Gildong / YYYY-MM-DD HH:MM / Admin memo</label>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                    <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                    <div className="text-center">
                        <Buttons type="submit" children="List" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={listMusicSource} />
                        <Buttons type="submit" children="Register" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-pink" handleClick={viewMore} />
                    </div>
                    </Col>

                </div>
            </Form>
            </Col>
        </Row>
    </Container>


    <Modal show={AddTrack} onHide={()=> {setAddTrack(false)}}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title pt-4">
                <span className="font-weight-bold ">Track Information</span>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="music-source-tab">

          
                
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
            <Col sm={12}>
            <Nav variant="pills" className="flex-row">
                <Nav.Item className="col-md-4 p-0">
                    <Nav.Link eventKey="first">Summary</Nav.Link>
                </Nav.Item>
                <Nav.Item className="col-md-4 p-0">
                    <Nav.Link eventKey="second">Detail</Nav.Link>
                </Nav.Item>
                <Nav.Item className="col-md-4 p-0">
                    <Nav.Link eventKey="Third">Participants</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={12}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                
            <Form className="pt-5">

                <div className="overflow-table">
                    
                    <Container fluid class="mt-5">

                        <Row>
                           
                        
                            <Col md={3}   className="profile-table-td title-color font-weight-bold">Title</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField 
                                    name="creatortel" 
                                    value={state.creatortel} 
                                    placeholder="See you on Friday" 
                                    type="text" 
                                    InputstyleClass="custom-input mb-0" 
                                    onChange={handleChange}  />
                                </div>
                            </Col>
                        
                        
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Version</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <SelectOption 
                                    disabled data={[ 
                                        {value: 1, label: 'india' }, 
                                        {value: 2, label: 'USA' }, 
                                        {value: 3, label: 'UK' }, 
                                        {value: 4, label: 'Germany' }, ]} 
                                        onChange={handleDropdown} 
                                        name="selectstelamcountry" 
                                        styleClass="drop-down-margin" 
                                        defauultvalue="Select Version" />
                                </div>
                            </Col>


                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Language</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <SelectOption 
                                    disabled data={[ 
                                        {value: 1, label: 'india' }, 
                                        {value: 2, label: 'USA' }, 
                                        {value: 3, label: 'UK' }, 
                                        {value: 4, label: 'Germany' }, ]} 
                                        onChange={handleDropdown} 
                                        name="selectstelamcountry" 
                                        styleClass="drop-down-margin" 
                                        defauultvalue="Select Language" />
                                </div>
                            </Col>
                        
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Vocal</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <Form.Group className="d-flex">
                                        <div class="checkboxes checkbox-add_top_15 mr-5">
                                            <CheckBox
                                                label="Vocal"
                                                type="radio" 
                                                name="exampleRadios1"
                                                id="exampleRadios1" 
                                                value="option1" 
                                                styleCheck="checkmark"
                                            />
                                        </div>
                                        <div class="checkboxes checkbox-add_top_15 mr-5">
                                            <CheckBox
                                                label="Instrumental"
                                                type="radio" 
                                                name="exampleRadios1"
                                                id="exampleRadios1" 
                                                value="option2" 
                                                styleCheck="checkmark"
                                            />
                                        </div>
                                        
                                    </Form.Group>
                                    <div className={VocaleTextArea}>
                                        <InputField 
                                        name="vocal_summary" 
                                        value={state.vocal_summary} 
                                        placeholder="It displays lyrics in this space" 
                                        type="textarea" 
                                        InputstyleClass="custom-input mb-0" 
                                        onChange={handleChange}/>
                                    </div>
                                </div>
                            </Col>


                            
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">
                            <OverlayTrigger
                               
                                placement="bottom"
                                overlay={
                                    <Popover id="popover-positioned" className="popover">
                                    <Popover.Title as="h3"><b>Explicit</b></Popover.Title>
                                    <Popover.Content>
                                        <p className="exp-tooltip">If a song mentions offensive or abusive language, drug-related terms, or violence, it will be displayed as <span className="span-color-pink">‘Explicit’</span> when uploaded. (Used to notify users if a song contains offensive or offensive lyrics.)</p>
                                    </Popover.Content>
                                    <Popover.Title as="h3"><b>Clean</b></Popover.Title>
                                    <Popover.Content>
                                        <p className="exp-tooltip">This track is a version that does not contain profanity or offensive language.</p>
                                    </Popover.Content>
                                    </Popover>
                                }
                                >
                                {({ ref, ...triggerHandler }) => (
                                    <div className="d-flex mx-auto">
                                    <p className="m-0 mr-2">Explicit</p>
                                    <Button
                                    variant="light"
                                    {...triggerHandler}
                                    className="d-inline-flex  p-0  align-items-center"
                                    >
                                    
                                    <Image
                                    ref={ref}
                                    roundedCircle
                                    src="./img/question.png"
                                    />
                                    </Button>
                                    </div>
                                )}
                            </OverlayTrigger>
                            </Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <Form.Group className="d-flex">
                                        <div class="checkboxes checkbox-add_top_15 mr-5">
                                            <CheckBox
                                                label="Explicit"
                                                type="radio" 
                                                name="exampleRadios4"
                                                id="exampleRadios4" 
                                                value="option3" 
                                                styleCheck="checkmark"
                                            />
                                        </div>
                                        <div class="checkboxes checkbox-add_top_15 mr-5">
                                            <CheckBox
                                                label="Clean"
                                                type="radio" 
                                                name="exampleRadios4"
                                                id="exampleRadios4" 
                                                value="option4" 
                                                styleCheck="checkmark"
                                            />
                                        </div>
                                       
                                    </Form.Group>
                                   
                                </div>
                            </Col>
                        </Row>

                        


                       

                    

                    </Container>
                  
                    <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                    <div className="text-center">
                        <Buttons type="submit" children="List" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={viewMore} />
                        <Buttons type="submit" children="Save" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-pink" handleClick={viewMore} />
                        
                    </div>
                    </Col>

                </div>
            </Form>
           
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Col className="px-0 pt-4 d-flex">
                    <h4 className="font-weight-bold title-color pt-2">Keyword</h4>
                    <Buttons type="submit" children="Show all" styleClass=" ml-2 mt-1 mb-2 bg-line rounded-border" handleClick={viewMore} />
                    <Buttons type="submit" children="Close all" styleClass="ml-2 mt-1 mb-2 bg-line rounded-border" handleClick={viewMore} />
                </Col>
                <Col className="p-0 track-info-detail">
                <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header className="px-0">
                    
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <span  className="font-weight-bold title-color">Genre (up to <span className="span-color-pink"> 2 </span> selections, <span className="span-color-pink"> 2 </span>/2) <span className="span-color-pink"> Pop, Hip hop </span></span>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>  
                    <div className="d-flex">
                        
                        <RadioButton
                            type="checkbox" 
                            name="data1"
                            id="data1"
                            value="data11"
                            BtnLable="Pop"
                        />

                        
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
               
                </Accordion>
                </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="Third">
                    <h1>3</h1>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
           

        </Modal.Body>
    </Modal>

    <Modal show={showSearchMember} onHide={()=> {setshowSearchMember(false)}}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title pt-4">
                <span className="font-weight-bold ">Search members</span>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                 
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
                            {value: 1, label: 'India' }, 
                            {value: 2, label: 'USA' },]} 
                            onChange={handleDropdown} 
                            name="msourcestatus" 
                            defauultvalue="Country" 
                            styleClass="drop-down-margin" />
                    </div>


                    <div className="p-2">
                        <SelectOption 
                         data={[ 
                            {value: 1, label: 'Mobile Number' }, 
                            {value: 2, label: 'Email' }, ]} 
                            onChange={handleDropdown} 
                            name="msourcetrack" 
                            defauultvalue="Name" 
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
                   
            <Col lg={12}>
            <Row>
              
                <Col lg={12} className="pt-4">
                <div className="py-2 total-results d-flex">    
                    <div><h5 className="title-color font-weight-bold">Total <span className="span-color-pink"> 100 </span> Results</h5></div>
                 </div>
                </Col>
                <Col lg={12} className="pt-2">
                <div className="App">
     
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={sub_history_data}
                    columns={download_history}
                    pagination={paginationFactory(options)}
                />
                </div>
                </Col>
                <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                    <div className="text-center">
                        <Buttons 
                        type="submit" 
                        children="취소" 
                        styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" 
                        handleClick={viewMore} />

                        <Buttons 
                        type="submit" 
                        children="완료" 
                        styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-pink" 
                        handleClick={viewMore} />

                    </div>
                    </Col>
            </Row>
            </Col>

        </Modal.Body>
    </Modal>

   
    
</>
)
}

export default MusicSourceReg;