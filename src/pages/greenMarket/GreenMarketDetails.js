import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import Buttons from '../../common/Buttons';
import ImageUpload from '../../common/ImageUpload';
import InputField from '../../common/InputField';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SelectOption from '../../common/SelectOption';

function GreenMarketDetails() {
    const [imgLoader] = useState(false);
    const history = useHistory();
    const [eventInfo, setEventInfo] = useState({
        image_URL: "",
        signature_URL: "",
    });
    const imageOnChange = (file) => {
        console.log("image-loaded");
    }

    const [state, setState] = useState({

        selectoptioncountry: '',
        creatortel: '',
        creatoremail: '',
        companyname: '',
        vocal_summary: '',
        Weblink: '',
    })

    const onRemoveImage = () => {
        console.log("onRemove Called");
        setEventInfo({
            ...eventInfo,
            image_URL: "",
            signature_URL: "",
        },
            (value) => {
                console.log("value", value);
            }
        )

        console.log("image url", eventInfo.image_URL, eventInfo.signature_URL);

    }
    const SavePostBtn = () => {



    }


    const handleDropdown = () => {

    }

    const liststelastation = () => {
        history.push('/stelastation');
    }

    const DeletePostBtn = () => {
    }

    return (
        <div>
            <div>
                <div className="col-12 p-0">
                    <div className="bg-navigation">
                        <h1 className="text-white">Blog Details </h1>
                    </div>
                </div>

                <Container fluid className="creator-table">
                    <Row className="pt-5 pl-md-3 mt-4 mt-md-0 pb-5">
                        <Col lg={12}>
                            <div className="overflow-table">
                                <Col xs={12} className="pb-3 pl-0 pt-5">
                                    <h4 className="font-weight-bold title-color">Green Market Details</h4>
                                </Col>
                                <Container fluid class="mt-3 ">
                                    <Row>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Product Title Title</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 d-flex">

                                                <InputField
                                                    name="creatortel"
                                                    value={state.creatortel}
                                                    placeholder="Enter Partner Name Here"
                                                    type="search"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                />

                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Product Image</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 signature-inputs">
                                                <ImageUpload value={eventInfo.image_URL} onChange={imageOnChange} onRemove={onRemoveImage} loader={imgLoader} />
                                                <p className="mb-0 font-sm">

                                                    * Only images with the file name extension jpg/png, 2000x2000px to 6000x6000px can be uploaded.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Product price</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 d-flex">

                                                <InputField
                                                    name="creatortel"
                                                    value={state.creatortel}
                                                    placeholder="Price in $"
                                                    type="number"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                />

                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Select Category</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2">
                                                <SelectOption
                                                    disabled data={[
                                                        { value: 1, label: 'Meat' },
                                                        { value: 2, label: 'Ready' },
                                                        { value: 3, label: 'Egg' },
                                                        { value: 4, label: 'Rice' },]}
                                                    onChange={handleDropdown}
                                                    name="selectstelamcountry"
                                                    styleClass="drop-down-margin"
                                                    defauultvalue="Select Country" />
                                            </div>
                                        </Col>

                                        <Col className='mt-5'>
                                            <div className="App">
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data="<p>Enter Products Description</p>"
                                                    onReady={editor => {
                                                        // You can store the "editor" and use when it is needed.
                                                        console.log('Editor is ready to use!', editor);
                                                    }}
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData();
                                                        console.log({ event, editor, data });
                                                    }}
                                                    onBlur={(event, editor) => {
                                                        console.log('Blur.', editor);
                                                    }}
                                                    onFocus={(event, editor) => {
                                                        console.log('Focus.', editor);
                                                    }}
                                                />
                                            </div>
                                        </Col>

                                    </Row>
                                </Container>
                                <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                                    <div className="text-center">

                                        <Buttons type="submit" children="Save" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 " handleClick={SavePostBtn} />
                                        <Buttons type="submit" children="Delete" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={DeletePostBtn} />
                                    </div>
                                </Col>


                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default GreenMarketDetails;
