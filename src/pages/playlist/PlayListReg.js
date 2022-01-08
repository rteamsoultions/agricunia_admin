import React, { useState } from 'react';
import { Col, Container, Form, Row, Modal} from 'react-bootstrap';
import { useHistory } from 'react-router';
import Buttons from '../../common/Buttons';
import InputField from '../../common/InputField';
import SelectOption from '../../common/SelectOption';
  import swal from 'sweetalert';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";





function PlayListReg() {

    const [AddPlayListTrack, setAddPlayListTrack] = useState(false);

    const [state, setState ] = useState({

    selectoptioncountry:'',
    creatortel: '',
    creatoremail:'',
    companyname:'',
    introduction:'',
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

    const Playlistlist = () =>{
    history.push('/playlist');
    }


     
  
      
      const RegListPopUP=() =>{
        swal({
            title: "Register a Playlist",
            text: "Do you want to register a playlist?",
           
            buttons: ["Cancle", "Approve"],
            // dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Playlist registered","The playlistg has been registered", {
               
              });
            } 
         
          });
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

        const deleteplaylist = () =>{
            swal({
                title: "Delete a playlist",
                text: "Do you want to delete the playlist?",
               
                buttons: ["Cancle", "Delete"],
                // dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Playlist Deleted","The playlist is deleted", {
                   
                  });
                } 
             
              });
        }

        const linkFollow = (cell, row, rowIndex, formatExtraData) => {
            return (
                <Buttons
                type="submit"
                children ="Select"
                styleClass="rounded-0 bg-custom-black"
                handleClick={viewMore}/>
            );
          }


         


        const plat_sel_data = [
            { 
                id: 1, 
                play_sel_album:"Blooming",
                play_sel_artist:"IU",
                play_sel_track:"See you on Friday",
                play_sel_genre:"Indie, Classic",
                play_sel_lyrics:"Included",
                play_sel_exp:"Excluded",
                play_sel_status:"Approved",
                play_sel_regdate:"YYYY.MM.DD HH:MM ",
               
            },
          ];
        
        const plat_sel_head = [
          {
            dataField: "id",
            text: "No",
          },
          {
            dataField: "play_sel_album",
            text: "Album",
          },
          {
            dataField: "play_sel_artist",
            text: "Artist",
           
          },
          {
            dataField: "play_sel_track",
            text: "Track",
           
          },
          {
            dataField: "play_sel_genre",
            text: "Genre",
           
          },
          {
            dataField: "play_sel_lyrics",
            text: "Lyrics",
           
          },
          {
            dataField: "play_sel_exp",
            text: "Explicit",
           
          },
          {
            dataField: "play_sel_status",
            text: "Status",
           
          },
          {
            dataField: "play_sel_regdate",
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
              text: 'All', value: plat_sel_data.length
            }] 
          };


return (
<>
    <div className="col-12 p-0">
        <div className="bg-navigation">
            <h1 className="text-white">Playlist</h1>
        </div>
    </div>

    <Container fluid className="creator-table">
        <Row className="pt-5 pl-md-3 mt-4 mt-md-0 pb-5">

            <Col lg={12}>
            <Form>

                <div className="overflow-table">
                    <Col xs={12} className="pb-3 pl-0 pt-5">
                        <h4 className="font-weight-bold title-color">Playlist information</h4>
                    </Col>
                    <Container fluid  class="mt-3 ">

                        <Row>
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Title of the playlist</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField
                                    name="creatortel" 
                                    value={state.creatortel} 
                                    placeholder="Enter the name" 
                                    type="search" 
                                    InputstyleClass="custom-input mb-0" 
                                    onChange={handleChange} required />
                                </div>
                            </Col>
                     
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Number of track</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <label class="profile-label">*It is automatically calculated and displayed after registering the playlist.</label>
                            </Col>
                        
                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Total playing time</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <label class="profile-label">*It is automatically calculated and displayed after registering the playlist.</label>
                            </Col>


                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Introduction</Col>
                            <Col md={9}  className="profile-table-td-input">
                                <div className="py-2">
                                    <InputField 
                                    name="introduction" 
                                    value={state.introduction} 
                  
                                    type="textarea" 
                                    placeholder="No content has been entered."
                                    InputstyleClass="custom-input mb-0" 
                                    onChange={handleChange}/>
                                </div>
                            </Col>

                            <Col md={3}  className="profile-table-td title-color font-weight-bold">Non-Disclosure/Disclosure</Col>
                            <Col md={9}  className="profile-table-td-input">
                                
                               
                                    <Buttons 
                                    type="submit" 
                                    children="Non-disclosure" 
                                    styleClass="rounded-0 bg-custom-black bg-pink ml-2" 
                                    handleClick={viewMore}/>

                                    <Buttons 
                                    type="submit" 
                                    children="Disclosure" 
                                    styleClass="rounded-0 bg-custom-black mr-4 ml-1" 
                                    handleClick={viewMore}/>

                                <label class="profile-label">* When it is not disclosed, it is not displayed in the front.</label>
                            </Col>
                        
                           
                        </Row>
                        <Col xs={12} className="pb-3 pl-0 pt-5 d-flex">
                            <h4 className="font-weight-bold title-color title-color font-weight-bold">Track Information</h4>
                            <Buttons type="submit" children="Add a track" styleClass="rounded-0 bg-custom-black ml-4 px-3" handleClick={()=> {setAddPlayListTrack(true)}} />
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
                                    <Buttons  children="Amend" styleClass="rounded-0 bg-custom-black ml-2 px-3" handleClick={viewMore} />
                                    <Buttons type="submit" children="Delete" styleClass="rounded-0 bg-custom-black ml-2 px-3"  handleClick={deletebutton}/>
                                </div>
                            </Col>
                        </Row>

                       

                       
                
                  

                     
                    </Container>
                    <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                    <div className="text-center">
                        <Buttons type="submit" children="List" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={Playlistlist} />
                        <Buttons type="submit" children="Register" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-pink" handleClick={RegListPopUP} />
                    </div>
                    </Col>

                    <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                    <div className="text-center">
                        <Buttons type="submit" children="List" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={Playlistlist} />
                        <Buttons type="submit" children="Save" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-pink" handleClick={viewMore} />
                        <Buttons type="submit" children="Delete" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={deleteplaylist} />
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
            <Modal.Title id="example-custom-modal-styling-title pt-4">
                <span className="font-weight-bold ">Select a track</span>
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

                    <div className="p-2">
                        <SelectOption 
                        disabled data={[ 
                            {value: 1, label: 'Approved' }, 
                            {value: 2, label: 'DisApproved' },]} 
                            onChange={handleDropdown} 
                            name="msourcestatus" 
                            defauultvalue="Genre" 
                            styleClass="drop-down-margin" />
                    </div>

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
                            {value: 1, label: 'Lyrics incl.' }, 
                            {value: 2, label: 'Lyrics excl.' },]} 
                            onChange={handleDropdown} 
                            name="msourcestatus" 
                            defauultvalue="Lyrics incl." 
                            styleClass="drop-down-margin" />
                    </div>

                    <div className="p-2">
                        <SelectOption 
                        disabled data={[ 
                            {value: 1, label: 'Explicit incl.' }, 
                            {value: 2, label: 'Explicit excl.' },]} 
                            onChange={handleDropdown} 
                            name="msourcestatus" 
                            defauultvalue="Explicit incl." 
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
            </Col>
               
                <Col lg={12} className="pt-4">
                <div><h5 className="title-color font-weight-bold">Total <span className="span-color-pink"> 100 </span> Results / <span className="span-color-pink"> 1 </span> Selected</h5></div>
                </Col>
                <Col lg={12} className="stela-profile">
                <div className="App">
                    <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={plat_sel_data}
                    columns={plat_sel_head}
                    pagination={paginationFactory(options)}
                    />
                </div>
                </Col>
              
            </Row>
            </Col>

            <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                    <div className="text-center">
                        <Buttons type="submit" children="Cancel" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={viewMore} />
                        <Buttons type="submit" children="Save" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-pink" handleClick={viewMore} />
                    </div>
                    </Col>

        </Modal.Body>
    </Modal>



    
</>
)
}

export default PlayListReg;