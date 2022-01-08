import React, { useState } from 'react';
import { Col, Container, Form, Row , Modal } from 'react-bootstrap';
import Buttons from '../../../../common/Buttons';
import InputField from '../../../../common/InputField';
import SelectOption from '../../../../common/SelectOption';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";




function CreatorProfile() {

    const [showViewHistory, setShowViewHistory] = useState(false);
    const [showViewLicense, setShowViewLicense] = useState(false);
    const [state, setState ] = useState({

    selectstelamcountry:'',
    creatortel: '',
    creatoremail:'',
    companyname:'',
    companyadd:'',
    creator_AddnNote:'',
    })

    const history = useHistory();

    const handleChange = (e) => {

    setState({
    ...state,
    [e.target.name]: e.target.value
    });
    };


    const handleDropdown = () =>{

    }


    const agreebutton =(type) => {

    var title = "";
    let succmsg = "";
    if(type==="emailAgree"){
    title = "Are You Sure to Email Agree?"
    succmsg = "Email Agree"
    }

    if(type==="emailDisagree"){
    title = "Are You Sure to Email Disagree?"
    succmsg = "Email Disagree"
    }

    if(type==="SMSAgree"){
    title = "Are You Sure to SMS Agree?"
    succmsg = "SMS Agree"
    }

    if(type==="SMSDisagree"){
    title = "Are You Sure to SMS Disagree?"
    succmsg = "SMS Disagree"
    }

    swal({
    title: title,
    icon: "warning",
    buttons: true,
    dangerMode: true,
    })
    .then((willDelete) => {
    if (willDelete) {

    if(type==="emailAgree"){
    fnemailAggree()

    }
    if(type==="emailDisagree"){
    fnemailAggree()
    }
    if(type==="SMSAgree"){
    fnemailAggree()
    }
    if(type==="SMSDisagree"){
    fnemailAggree()
    }

    swal(succmsg, {
    icon: "success",
    });
    }

    });
    }

    const fnemailAggree = () => {
    console.log("email agreed");
    }

    const viewMore = () => {
    }



    const liststela = () =>{
    history.push('/stelamember');
    }

    const usertype = "Creator";

    const companyclass = {};

    if (usertype === "Creator"){
    companyclass.display="none";
    }
    else{
    companyclass.display="revert";
    }




    const linkFollow = (cell, row, rowIndex, formatExtraData) => {
      return (
          <Buttons
          type="submit"
          children ="Download"
          styleClass="rounded-0 bg-custom-black bg-cream "
          handleClick={viewMore}
          />
      );
    }

    // const DetailProfile = (row) =>{
    //   console.log("row",row);
    //   history.push('/creatorprofile');
    // }



  const sub_history_data = [
    {
        id: 1, 
        sub_license: "Creator Basic/up to 5,000 members (16,000 Won)", 
        sub_period: "YYYY.MM.DD - YYYY.MM.DD" ,
        sub_artist_track: "IU/See you on Friday", 
        sub_latest_downloads: "YYYY-MM-DD HH:MM:SS", 
        sub_total_downloads:"6 times",
    },


    {
        id: 2, 
        sub_license: "Creator Basic/up to 5,000 members (16,000 Won)", 
        sub_period: "YYYY.MM.DD - YYYY.MM.DD" ,
        sub_artist_track: "IU/See you on Friday", 
        sub_latest_downloads: "YYYY-MM-DD HH:MM:SS", 
        sub_total_downloads:"6 times",
    },


    {
        id: 3, 
        sub_license: "Creator Basic/up to 5,000 members (16,000 Won)", 
        sub_period: "YYYY.MM.DD - YYYY.MM.DD" ,
        sub_artist_track: "IU/See you on Friday", 
        sub_latest_downloads: "YYYY-MM-DD HH:MM:SS", 
        sub_total_downloads:"6 times",
    },


    {
        id: 4, 
        sub_license: "Creator Basic/up to 5,000 members (16,000 Won)", 
        sub_period: "YYYY.MM.DD - YYYY.MM.DD" ,
        sub_artist_track: "IU/See you on Friday", 
        sub_latest_downloads: "YYYY-MM-DD HH:MM:SS", 
        sub_total_downloads:"6 times",
    },


    {
        id: 5, 
        sub_license: "Creator Basic/up to 5,000 members (16,000 Won)", 
        sub_period: "YYYY.MM.DD - YYYY.MM.DD" ,
        sub_artist_track: "IU/See you on Friday", 
        sub_latest_downloads: "YYYY-MM-DD HH:MM:SS", 
        sub_total_downloads:"6 times",
    },


    {
        id: 6, 
        sub_license: "Creator Basic/up to 5,000 members (16,000 Won)", 
        sub_period: "YYYY.MM.DD - YYYY.MM.DD" ,
        sub_artist_track: "IU/See you on Friday", 
        sub_latest_downloads: "YYYY-MM-DD HH:MM:SS", 
        sub_total_downloads:"6 times",
    },


    {
        id: 7, 
        sub_license: "Creator Basic/up to 5,000 members (16,000 Won)", 
        sub_period: "YYYY.MM.DD - YYYY.MM.DD" ,
        sub_artist_track: "IU/See you on Friday", 
        sub_latest_downloads: "YYYY-MM-DD HH:MM:SS", 
        sub_total_downloads:"6 times",
    },


    {
        id: 8, 
        sub_license: "Creator Basic/up to 5,000 members (16,000 Won)", 
        sub_period: "YYYY.MM.DD - YYYY.MM.DD" ,
        sub_artist_track: "IU/See you on Friday", 
        sub_latest_downloads: "YYYY-MM-DD HH:MM:SS", 
        sub_total_downloads:"6 times",
    },


    {
        id: 9, 
        sub_license: "Creator Basic/up to 5,000 members (16,000 Won)", 
        sub_period: "YYYY.MM.DD - YYYY.MM.DD" ,
        sub_artist_track: "IU/See you on Friday", 
        sub_latest_downloads: "YYYY-MM-DD HH:MM:SS", 
        sub_total_downloads:"6 times",
    },


    {
        id: 10, 
        sub_license: "Creator Basic/up to 5,000 members (16,000 Won)", 
        sub_period: "YYYY.MM.DD - YYYY.MM.DD" ,
        sub_artist_track: "IU/See you on Friday", 
        sub_latest_downloads: "YYYY-MM-DD HH:MM:SS", 
        sub_total_downloads:"6 times",
    },


    {
        id: 11, 
        sub_license: "Creator Basic/up to 5,000 members (16,000 Won)", 
        sub_period: "YYYY.MM.DD - YYYY.MM.DD" ,
        sub_artist_track: "IU/See you on Friday", 
        sub_latest_downloads: "YYYY-MM-DD HH:MM:SS", 
        sub_total_downloads:"6 times",
    },


    {
        id: 12, 
        sub_license: "Creator Basic/up to 5,000 members (16,000 Won)", 
        sub_period: "YYYY.MM.DD - YYYY.MM.DD" ,
        sub_artist_track: "IU/See you on Friday", 
        sub_latest_downloads: "YYYY-MM-DD HH:MM:SS", 
        sub_total_downloads:"6 times",
    },


    {
        id: 13, 
        sub_license: "Creator Basic/up to 5,000 members (16,000 Won)", 
        sub_period: "YYYY.MM.DD - YYYY.MM.DD" ,
        sub_artist_track: "IU/See you on Friday", 
        sub_latest_downloads: "YYYY-MM-DD HH:MM:SS", 
        sub_total_downloads:"6 times",
    },


    {
        id: 14, 
        sub_license: "Creator Basic/up to 5,000 members (16,000 Won)", 
        sub_period: "YYYY.MM.DD - YYYY.MM.DD" ,
        sub_artist_track: "IU/See you on Friday", 
        sub_latest_downloads: "YYYY-MM-DD HH:MM:SS", 
        sub_total_downloads:"6 times",
    },


    {
        id: 15, 
        sub_license: "Creator Basic/up to 5,000 members (16,000 Won)", 
        sub_period: "YYYY.MM.DD - YYYY.MM.DD" ,
        sub_artist_track: "IU/See you on Friday", 
        sub_latest_downloads: "YYYY-MM-DD HH:MM:SS", 
        sub_total_downloads:"6 times",
    },

    

  ];


const download_history = [
  {
    dataField: "id",
    text: "No",
    
  },
  {
    dataField: "sub_license",
    text: "License",
    
   
  },
  {
    dataField: "sub_period",
    text: "Period",

   
  },
  {
    dataField: "sub_artist_track",
    text: "Artist/Track",
   
  },
  {
    dataField: "sub_latest_downloads",
    text: "Latest download",
   
  },
  {
    dataField: "sub_total_downloads",
    text: "Total downloads",
   
  },

  {
    dataField: "License Agreement",
    text: "License Agreement",
    formatter: linkFollow,
    
  },
];



const sub_sin_history_data = [
    {
        id: 1, 
        sin_payment: "1905m0001", 
        sin_artist_track: "IU/See you on Friday" ,
        sin_license: "Broadcast Program/Drama Single license", 
        sin_paymentdate:"YYYY-MM-DD HH:MM:SS",
        sin_amount_won:"4,400,000",
        sin_payment_status:"Complete",
        sin_total_downloads:"6 times",
    },
    
  ];

const sin_download_history = [
    {
      dataField: "id",
      text: "No",
      
    },
    {
        dataField: "sin_payment",
        text: "Payment No.",
        
    },
    {
        dataField: "sin_artist_track",
        text: "Artist/Track",
       
    },
    {
      dataField: "sin_license",
      text: "License",
      
     
    },
    {
      dataField: "sin_paymentdate",
      text: "Payment date",
     
    },
    {
        dataField: "sin_amount_won",
        text: "Amount (Won)",
       
    },
    {
        dataField: "sin_payment_status",
        text: "Payment status",
       
    },
    {
      dataField: "sin_total_downloads",
      text: "Total downloads",
     
    },
  
    {
      dataField: "License Agreement",
      text: "License Agreement",
      formatter: linkFollow,
      
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



return (
<>
    <div className="col-12 p-0">
        <div className="bg-navigation">
            <h1 className="text-white">Profile</h1>
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
                            <Col md={3} className="profile-table-td title-color font-weight-bold">User Type</Col>
                            <Col md={9} className="profile-table-td-input">
                                <label class="profile-label">{usertype}</label>
                            </Col>
                        
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Name</Col>
                            <Col md={9} className="profile-table-td-input">
                                <label class="profile-label">Hong Gildong</label>
                            </Col>
                       
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Country</Col>
                            <Col md={9} className="profile-table-td-input">
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
                                        defauultvalue="Select Country" />
                                </div>
                            </Col>
                       
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Mobile No</Col>
                            <Col md={9} className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField 
                                    name="creatortel" 
                                    value={state.creatortel} 
                                    placeholder="Enter Creator Mobile Number" 
                                    type="tel" 
                                    InputstyleClass="custom-input mb-0" 
                                    onChange={handleChange} 
                                    required />
                                </div>
                            </Col>
                        
                      
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Company Name</Col>
                            <Col md={9} className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField 
                                    name="companyname" 
                                    value={state.companyname} 
                                    placeholder="Enter Company Name" 
                                    type="text" 
                                    InputstyleClass="custom-input mb-0" 
                                    onChange={handleChange} 
                                    required />
                                </div>
                            </Col>
                       
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Company Address</Col>
                            <Col md={9} className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField 
                                    name="companyadd" 
                                    value={state.companyadd} 
                                    placeholder="Enter Company Address" 
                                    type="text" 
                                    InputstyleClass="custom-input mb-0" 
                                    onChange={handleChange} 
                                    required />
                                </div>
                            </Col>
                       
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Email</Col>
                            <Col md={9} className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField 
                                    name="creatoremail" 
                                    value={state.creatoremail} 
                                    placeholder="Enter Creator email address" 
                                    type="email" 
                                    InputstyleClass="custom-input mb-0" 
                                    onChange={handleChange} 
                                    required />
                                </div>
                            </Col>
                        
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Age Verification</Col>
                            <Col md={9} className="profile-table-td-input">
                                <div className="py-2">
                                    <Buttons 
                                    type="submit" 
                                    children="OK" 
                                    styleClass="rounded-0 bg-custom-black bg-pink" 
                                    handleClick={viewMore} />
                                </div>
                            </Col>
                       
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Consent to receive event notice (optional)</Col>
                            <Col md={9} className="profile-table-td-input">
                                <div className="py-2">
                                    Email
                                    <Buttons 
                                    type="submit" 
                                    children="Agree" 
                                    styleClass="rounded-0 bg-custom-black bg-pink ml-2" 
                                    handleClick={()=> {agreebutton("emailAgree")}}/>

                                    <Buttons 
                                    type="submit" 
                                    children="Disagree" 
                                    styleClass="rounded-0 bg-custom-black mr-4 ml-1" 
                                    handleClick={()=> {agreebutton("emailDisagree")}}/>

                                    SMS
                                    <Buttons 
                                    type="submit" 
                                    children="Agree" 
                                    styleClass="rounded-0 bg-custom-black bg-pink ml-2" 
                                    handleClick={()=> {agreebutton("SMSAgree")}}/>

                                    <Buttons 
                                    type="submit" 
                                    children="Disagree" 
                                    styleClass="rounded-0 bg-custom-black ml-1" 
                                    handleClick={()=> {agreebutton("SMSDisagree")}}/>

                                </div>
                            </Col>
                       
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Sign up date / Last log-in</Col>
                            <Col md={9} className="profile-table-td-input">
                                <label class="profile-label">YYYY-MM-DD HH:MM / YYYY-MM-DD HH:MM </label>
                            </Col>
                        </Row>


                        <Col xs={12} className="pb-3 pl-0 pt-5">
                            <h4 className="font-weight-bold title-color title-color font-weight-bold">License Information</h4>
                        </Col>



                        <Row>
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Subscription License</Col>
                            <Col md={9} className="profile-table-td-input ">
                                <label class="profile-label"><span className="span-color-pink font-weight-bold">N/A</span></label>

                                <Buttons 
                                type="submit" 
                                children="View download history/Manage" 
                                styleClass="rounded-0 bg-custom-black ml-1 mt-2 mb-2" 
                                handleClick={()=> {setShowViewHistory(true)}}/>

                            </Col>
                        
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Single License</Col>
                            <Col md={9} className="profile-table-td-input">
                                <label class="profile-label"><span className="span-color-pink font-weight-bold">0</span> Licenses</label>

                                <Buttons 
                                type="submit" 
                                children="View details/Manage" 
                                styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2" 
                                handleClick={()=> {setShowViewLicense(true)}} />

                            </Col>
                        </Row>


                        <Col xs={12} className="pb-3 pl-0 pt-5">
                            <h4 className="font-weight-bold title-color title-color font-weight-bold">Channel Information</h4>
                        </Col>



                        <Row>
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Youtube</Col>
                            <Col md={9} className="profile-table-td-input ">
                                <label class="profile-label">https://www.youtube.com/stela | 150 subscribers</label>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col md={3} className="profile-table-td title-color font-weight-bold">Admin note</Col>
                            <Col md={9} className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField 
                                    name="creator_AddnNote" 
                                    value={state.creator_AddnNote} 
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
                        <Buttons 
                        type="submit" 
                        children="List" 
                        styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" 
                        handleClick={liststela} />

                        <Buttons 
                        type="submit" 
                        children="Save" 
                        styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-pink" 
                        handleClick={viewMore} />

                    </div>
                    </Col>

                </div>
            </Form>
            </Col>
        </Row>
    </Container>


    <Modal show={showViewHistory} onHide={()=> {setShowViewHistory(false)}}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title pt-4">
                <span className="font-weight-bold ">View download history/Manage</span>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Col lg={12}>
            <Row>
                <Col lg={12}>
                <h4 class="font-weight-bold title-color sub-modal-title">Subscription License Status</h4>
                </Col>
                <Col lg={3} className="pt-4 pr-lg-0">
                <div className="head-member">
                    <h6>Current Subscription License</h6>
                </div>
                </Col>
                <Col lg={9} className="pt-lg-4 pb-3 pb-lg-0 pl-lg-0">
                    <div className="">
                        <p className="mb-0 custom-border-light p-2 font-sm"><span className="font-weight-bold">Creator Basic / up to 5,000 members (16,000 Won) / Number of downloads available : NN/80</span><br />
                            Next payment due date YYYY.MM.DD</p>
                    </div>
                </Col>
                <Col lg={12} className="pt-4">
                    <h4 class="font-weight-bold title-color sub-modal-title">Download History</h4>
                </Col>
                <Col lg={12} className="pt-4">
                <div className="App view-download_h_modal">
     
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={sub_history_data}
                    columns={download_history}
                    pagination={paginationFactory(options)}
                />
                </div>
                </Col>
            </Row>
            </Col>

        </Modal.Body>
    </Modal>



    <Modal show={showViewLicense} onHide={()=> {setShowViewLicense(false)}}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title pt-4">
                <span className="font-weight-bold ">View single license history/Manage</span>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Col lg={12}>
            <Row>
                <Col lg={12}>
                    <h4 class="font-weight-bold title-color sub-modal-title">Single license status</h4>
                </Col>
                <Col lg={3} className="pt-4 pr-lg-0">
                <div className="head-member">
                    <h6>Current single license</h6>
                </div>
                </Col>
                <Col lg={9} className="pt-lg-4 pb-3 pb-lg-0 pl-lg-0">
                    <div className="">
                        <p className="mb-0 custom-border-light p-3">
                           <span className="span-color-pink font-weight-bold"> 10 </span> Licenses</p>
                    </div>
                </Col>
                <Col lg={12} className="pt-4">
                    <h4 class="font-weight-bold title-color sub-modal-title">Single license history</h4>
                </Col>
                <Col lg={12} className="stela-profile">
                <div className="App view-download_h_modal">
                    <BootstrapTable
                        bootstrap4
                        keyField="id"
                        data={sub_sin_history_data}
                        columns={sin_download_history}
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

export default CreatorProfile;