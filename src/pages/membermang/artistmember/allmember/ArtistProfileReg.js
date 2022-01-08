import React, { useState } from 'react';
import { Col, Container, Form, Row , Modal } from 'react-bootstrap';
import Buttons from '../../../../common/Buttons';
import InputField from '../../../../common/InputField';
import SelectOption from '../../../../common/SelectOption';
import { useHistory } from 'react-router';
import ImageUpload from '../../../../common/ImageUpload';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import CheckBox from '../../../../common/CheckBox';




function ArtistProfileReg() {

    const [GoMusicHis, setGoMusicHis] = useState(false);
    const [GoSaleHis, setGoSaleHis] = useState(false);
    const [GoSettDetails, setGoSettDetails] = useState(false);
    // const [imgLoader, setimgLoader] = useState(false)
    const [imgLoader] = useState(false)
    const [eventInfo, setEventInfo] = useState({
        image_URL: "",
        signature_URL:"",
      });
    const [state, setState ] = useState({

    selectoptioncountry:'',
    creatortel: '',
    creatoremail:'',
    companyname:'',
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

    const listartist = () =>{
    history.push('/allartistmembers');
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


      function approvalformater(cell, row) {
        if (row.musics_status === "Disapproved") {
          return (
            <span>
              <strong style={ { color: '#B931B8' } }>{ cell }</strong>
            </span>
          );
        }
      
        return (
          <span>{ cell }</span>
        );
      }

    
    const musics_detail = [
        { 
            id: 1, 
            musics_track:"See you on Friday",
            music_album:"Blooming",
            musics_genre:"Indie, R&B Soul",
            musics_language:"Korean",
            musics_status:"Approved",
            musics_released:" YYYY-MM-DD",
        },
        { 
            id: 2, 
            musics_track:"See you on Friday",
            music_album:"Blooming",
            musics_genre:"Indie, R&B Soul",
            musics_language:"Korean",
            musics_status:"Disapproved",
            musics_released:" YYYY-MM-DD",
        },
    ];

    const musics_detail_head = [
    {
        dataField: "id",
        text: "No",
    },
    {
        dataField: "musics_track",
        text: "Track",
    },
    {
        dataField: "music_album",
        text: "Album",
        
    },
    {
        dataField: "musics_genre",
        text: "Genre",
    
    },
    {
        dataField: "musics_language",
        text: "Language",
    
    },
    {
        dataField: "musics_status",
        text: "Status",
        formatter: approvalformater
    
    },
    {
        dataField: "musics_released",
        text: "Released Date",
    
    },
    ];



    const musics_sales = [
        { 
            id: 1, 
            musics_sales_mem:"Hong Gildong",
            music_sales_track:"See you on Friday",
            musics_sales_license:"Creator",
            musics_sales_det:"Basic (up to 5,000 members)",
        },
    ];

    const musics_sales_head = [
    {
        dataField: "id",
        text: "No",
    },
    {
        dataField: "musics_sales_mem",
        text: "stela member",
    },
    {
        dataField: "music_sales_track",
        text: "Track",
        
    },
    {
        dataField: "musics_sales_license",
        text: "License",
    
    },
    {
        dataField: "musics_sales_det",
        text: "License_detail",
    
    },
    ];

    const musics_sin_sales = [
        { 
            id: 1, 
            musics_sin_mem:"Hong Gildong",
            music_sin_track:"See you on Friday",
            musics_sin_license:"Broadcast Program",
            musics_sin_det:"Drama/Single license",
        },
    ];

    const musics_sin_sales_head = [
    {
        dataField: "id",
        text: "No",
    },
    {
        dataField: "musics_sin_mem",
        text: "stela member",
    },
    {
        dataField: "music_sin_track",
        text: "Track",
        
    },
    {
        dataField: "musics_sin_license",
        text: "Usage",
    
    },
    {
        dataField: "musics_sin_det",
        text: "Purpose_detail",
    
    },
    ];


    const sett_details = [
        { 
            id: 1, 
            sett_track:"What if",
            sett_licence:"Subscription",
            sett_purpose:"Creator",
            sett_p_detail:"Basic (up to 5,000 members)",
            sett_est_won:"16,000",
            sett_est_date:"YYYY-MM-DD /YYYY-MM-DD",
            sett_status:"Pending",
        },
        { 
            id: 2, 
            sett_track:"What if",
            sett_licence:"Subscription",
            sett_purpose:"Creator",
            sett_p_detail:"Basic (up to 5,000 members)",
            sett_est_won:"16,000",
            sett_est_date:"YYYY-MM-DD /YYYY-MM-DD",
            sett_status:"Complete",
        },
        { 
            id: 3, 
            sett_track:"What if",
            sett_licence:"Subscription",
            sett_purpose:"Creator",
            sett_p_detail:"Basic (up to 5,000 members)",
            sett_est_won:"16,000",
            sett_est_date:"YYYY-MM-DD /YYYY-MM-DD",
            sett_status:"Complete",
        },
    ];

    const sett_head = [
    {
        dataField: "id",
        text: "No",
    },
    {
        dataField: "sett_track",
        text: "Track",
    },
    {
        dataField: "sett_licence",
        text: "License",
        
    },
    {
        dataField: "sett_purpose",
        text: "License Name/Purpose",
    
    },
    {
        dataField: "sett_p_detail",
        text: "Purpose_detail",
    
    },
    {
        dataField: "sett_est_won",
        text: "Estimated Reverse/Settlement Amount (Won)",
    
    },
    {
        dataField: "sett_est_date",
        text: "Estimated Reverse/Settlement Date",
    
    },
    {
        dataField: "sett_status",
        text: "Status",
        formatter: priceFormatter
    },
    ];

    const options = {
        paginationSize: 5,
        pageStartIndex: 1,
        alwaysShowAllBtns: true, 
        hidePageListOnlyOnePage: true, 
        showTotal: false,
        disablePageTitle: true,
    };


    function priceFormatter(cell, row) {
        if (row.sett_status === "Pending") {
          return (
            <span>
              <strong style={ { color: '#B931B8' } }>{ cell }</strong>
            </span>
          );
        }
      
        return (
          <span>{ cell }</span>
        );
      }

return (
<>
    <div className="col-12 p-0">
        <div className="bg-navigation">
            <h1 className="text-white">Artist member</h1>
        </div>
    </div>

    <Container fluid className="creator-table">
        <Row className="pt-5 pl-md-3 mt-4 mt-md-0 pb-5">

            <Col lg={12}>
            <Form>

                <div className="overflow-table">
                    <Col xs={12} className="pb-3 pl-0 pt-5">
                        <h4 className="font-weight-bold title-color">Profile</h4>
                    </Col>



                    
                    <Container fluid class="mt-3 ">

                        <Row>
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">User Type</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <label class="profile-label">Artist</label>
                            </Col>
                        
                            <Col md={3}   className="profile-table-td title-color font-weight-bold">Name</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField 
                                    name="creatortel" 
                                    value={state.creatortel} 
                                    placeholder="Enter the name" 
                                    type="text" 
                                    InputstyleClass="custom-input mb-0" 
                                    onChange={handleChange} required />
                                </div>
                            </Col>
                        
                        
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Email</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField 
                                    name="creatortel" 
                                    value={state.creatortel} 
                                    placeholder="Enter the email address" 
                                    type="text" 
                                    InputstyleClass="custom-input mb-0" 
                                    onChange={handleChange} required />
                                </div>
                            </Col>
                        
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Country</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField 
                                    name="creatortel" 
                                    value={state.creatortel}
                                     placeholder="Enter the country name" 
                                     type="tel" 
                                     InputstyleClass="custom-input mb-0" 
                                     onChange={handleChange} 
                                     required />
                                </div>
                            </Col>
                      
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Mobile No.</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2 d-flex">

                                   <SelectOption 
                                        disabled data={[ 
                                        {value: 1, label: 'india' }, 
                                        {value: 2, label: 'USA' }, 
                                        {value: 3, label: 'UK' }, 
                                        {value: 4, label: 'Germany' }, ]} 
                                        onChange={handleDropdown} 
                                        name="selectstelamcountry" 
                                        styleClass="drop-down-margin input-mobile-number" 
                                        defauultvalue="Country Code" />

                                    <InputField 
                                    name="companyname" 
                                    value={state.companyname} 
                                    placeholder="Enter the mobile number" 
                                    type="text" 
                                    InputstyleClass="custom-input mb-0 input-mobile-no" 
                                    onChange={handleChange} 
                                    required />

                                </div>
                            </Col>
                       
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Introduction</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField 
                                    name="creatortel" 
                                    value={state.creatortel} 
                                    placeholder="No message entered" 
                                    type="textarea" 
                                    InputstyleClass="custom-input mb-0 " 
                                    onChange={handleChange}/>
                                </div>
                            </Col>
                                            
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Profile image</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <ImageUpload value={eventInfo.image_URL} onChange={imageOnChange} onRemove={onRemoveImage} loader={imgLoader}/>
                                    <p className="mb-0 font-sm">
                                    * This image is displayed in the upper area of the artist detail page.<br/>
                                    * Only images with the file name extension jpg/png, 2000x2000px to 6000x6000px can be uploaded.
                                    </p>
                                </div>
                            </Col>
                      
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">stela exclusive</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <Form.Group >
                                        <div class="checkboxes checkbox-add_top_15 mr-5">
                                            <CheckBox
                                                label="Marked"
                                                type="radio" 
                                                name="market_radio"
                                                id="market_radio" 
                                                value="market_radio" 
                                                styleCheck="checkmark"
                                            />
                                        </div>
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>

                        <Col xs={12} className="pb-3 pl-0 pt-5">
                            <h4 className="font-weight-bold title-color title-color font-weight-bold">Settlement/Contract Information</h4>
                        </Col>

                        <Row>
                            <Col md={3}   className="profile-table-td title-color font-weight-bold">Bank Name</Col>
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
                                        defauultvalue="Select Choose the bank name" />
                                </div>
                            </Col>
                        
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Account No.</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField 
                                    name="creatortel" 
                                    value={state.creatortel} 
                                    placeholder="Enter the account number" 
                                    type="text" 
                                    InputstyleClass="custom-input mb-0" 
                                    onChange={handleChange} 
                                    required />
                                </div>
                            </Col>
                        
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Account Holder</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField 
                                    name="creatortel" 
                                    value={state.creatortel} 
                                    placeholder="Enter the account holder’s name" 
                                    type="text" 
                                    InputstyleClass="custom-input mb-0" 
                                    onChange={handleChange} 
                                    required />
                                </div>
                            </Col>
                       
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Signature Image</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2 signature-inputs">
                                    <ImageUpload value={eventInfo.image_URL} onChange={imageOnChange} onRemove={onRemoveImage} loader={imgLoader}/>
                                    <p className="mb-0 font-sm">
                                    * The fine name extention (png)
                                    </p>
                                </div>
                            </Col>
                        </Row>


                        <Col xs={12} className="pb-3 pl-0 pt-5">
                            <h4 className="font-weight-bold title-color title-color font-weight-bold">Activities on the platform</h4>
                        </Col>

                   

                        <Row>
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Registered music sources</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <label class="profile-label">Approved <span className="span-color-pink font-weight-bold"> 3 </span> | Disapproved <span className="span-color-pink font-weight-bold"> 1 </span></label>
                                <Buttons 
                                type="submit" 
                                children="Go to music management" 
                                styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2" 
                                handleClick={()=> {setGoMusicHis(true)}}/>
                            </Col>
                      
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Sales history</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <label class="profile-label">Subscription license  <span className="span-color-pink font-weight-bold">1</span>  ｜Single license <span className="span-color-pink font-weight-bold">5</span> </label>
                                <Buttons 
                                type="submit" 
                                children="Go to Sales History" 
                                styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2" 
                                handleClick={()=> {setGoSaleHis(true)}}/>
                            </Col>
                       
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Settlement history</Col>
                            <Col md={9}  className="profile-table-td-input">

                                <label class="profile-label">Amount to settle:  <span className="span-color-pink font-weight-bold">16,000 Won</span> ｜Current reserves: <span className="span-color-pink font-weight-bold">30,000 Won</span> ｜Total settlememnt amount:  <span className="span-color-pink font-weight-bold">  100,000 Won</span></label>

                                <Buttons 
                                type="submit" 
                                children="Go to settlement details"
                                styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2" 
                                handleClick={()=> {setGoSettDetails(true)}}/>
                            </Col>
                        </Row>

                     
                        <br />
                        <br />

                        <Row>
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
                                    <label class="profile-label">Hong Gildong / YYYY-MM-DD HH:MM / Memo: Test
                                        <br />Hong Gildong / YYYY-MM-DD HH:MM / Memo: </label>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                    <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                    <div className="text-center">
                        <Buttons type="submit" children="List" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={listartist} />
                        <Buttons type="submit" children="Register" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-pink" handleClick={viewMore} />
                        
                    </div>
                    </Col>
                    <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                    <div className="text-center">
                        <Buttons type="submit" children="List" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={listartist} />
                        <Buttons type="submit" children="Save" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-pink" handleClick={viewMore} />
                        
                    </div>
                    </Col>

                </div>
            </Form>
            </Col>
        </Row>
    </Container>


    <Modal show={GoMusicHis} onHide={()=> {setGoMusicHis(false)}}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title pt-4">
                <span className="font-weight-bold ">Music Source History/Detail</span>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Col lg={12}>
            <Row>
                
                
                <Col lg={12} className="pt-4">
                    <h4 class="font-weight-bold title-color sub-modal-title">Music Source Details</h4>
                </Col>
                <Col lg={12} className="modal-tabel">
                <div className="App view-download_h_modal">
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={musics_detail}
                    columns={musics_detail_head}
                    pagination={paginationFactory(options)}
                />
                </div>
                </Col>
            </Row>
            </Col>

        </Modal.Body>
    </Modal>


    <Modal show={GoSaleHis} onHide={()=> {setGoSaleHis(false)}}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title pt-4">
                <span className="font-weight-bold ">Sales History</span>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Col lg={12}>
            <Row>
                
                
                <Col lg={12} className="pt-4">
                    <h4 class="font-weight-bold title-color sub-modal-title">Subscription license</h4>
                </Col>
                <Col lg={12} className="modal-tabel">
                <div className="App view-download_h_modal">
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={musics_sales}
                    columns={musics_sales_head}
                    pagination={paginationFactory(options)}
                />
                </div>
                </Col>
            </Row>
            </Col>


            <Col lg={12}>
            <Row>
                
                
                <Col lg={12} className="pt-4">
                    <h4 class="font-weight-bold title-color sub-modal-title">Single license</h4>
                </Col>
                <Col lg={12} className="modal-tabel">
                    <div className="App view-download_h_modal">
                    <BootstrapTable
                        bootstrap4
                        keyField="id"
                        data={musics_sin_sales}
                        columns={musics_sin_sales_head}
                        pagination={paginationFactory(options)}
                    />
                    </div>
                </Col>
            </Row>
            </Col>

        </Modal.Body>
    </Modal>

    <Modal show={GoSettDetails} onHide={()=> {setGoSettDetails(false)}}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title pt-4">
                <span className="font-weight-bold ">Settlement details</span>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Col lg={12}>
            <Row>
                
              
                <Col lg={12} className="modal-tabel">
                <div className="App view-download_h_modal">
                    <BootstrapTable
                        bootstrap4
                        keyField="id"
                        data={sett_details}
                        columns={sett_head}
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

export default ArtistProfileReg;