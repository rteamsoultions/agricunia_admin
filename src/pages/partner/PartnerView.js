import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import { useHistory, useLocation } from 'react-router';
import Buttons from '../../common/Buttons';
import ImageUpload from '../../common/ImageUpload';
import InputField from '../../common/InputField';
import { ApiDelete, ApiGet, ApiPost, ApiPut } from '../../helper/API/ApiData';

function PartnerView() {

    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");

    const [imgLoader] = useState(false);
    const [imageInfo, setImageInfo] = useState({
        image_URL: "",
        display_image_URL: "",
        signature_URL: "",
    });

    const imageOnChange = (file) => {
        let formData = new FormData();
        if (file) {
            formData.append('image', file);
        } else {
            return
        }
        ApiPost('general/file-and-image-upload', formData)
            .then((res) => {
                setImageInfo({
                    ...imageInfo,
                    image_URL: res.url,
                    display_image_URL: res.display_url
                })
            })
            .catch((err) => {
                console.log("err", err);
            })

    }

    const [state, setState] = useState({
        partner_name: "",
        partner_image: imageInfo.image_URL,
        partner_weblink: "",
    })

    const [formErr, setFormErr] = useState({
        partner_nameErr: "",
        partner_imageErr: "",
        partner_weblinkErr: ""
    })

    const onRemoveImage = () => {
        setImageInfo({
            ...imageInfo,
            image_URL: "",
            signature_URL: "",
        },
            (value) => {
                console.log("value", value);
            }
        )
    }

    const getPartnerById = () => {
        ApiGet(`partner/get-partner-user-by-id/${id}`)
            .then((res) => {
                setState({
                    ...state,
                    partner_name: res.data.partner_name,
                    partner_weblink: res.data.partner_weblink
                })
                setImageInfo({
                    ...imageInfo.image_URL,
                    image_URL: res.data.image,
                    display_image_URL: res.data.display_image,
                })
            })
            .catch((err) => {
                console.log("err", err);
            })
    }

    const validate = () => {
        let flag = false
        let err = {
            partner_nameErr: "",
            partner_imageErr: "",
            partner_weblinkErr: ""
        }

        if (!state.partner_name || state.partner_name === "") {
            err.partner_nameErr = "Please enter partner name"
            flag = true
        }

        if (!imageInfo.image_URL || imageInfo.image_URL === "") {
            err.partner_imageErr = "Please select image"
            flag = true
        }

        if (!state.partner_weblink || state.partner_weblink === "") {
            err.partner_weblinkErr = "Please enter web link"
            flag = true
        }

        setFormErr(err)
        return flag
    }

    const SavePostBtn = () => {
        if (validate()) {
            return
        }

        const body = {
            partner_name: state.partner_name,
            partner_image: imageInfo.image_URL,
            partner_weblink: state.partner_weblink,
        }

        if (id) {
            ApiPut(`partner/edit-partner/${id}`, body)
                .then((res) => {
                    back()
                })
                .then((err) => {
                    console.log("err", err);
                })
        } else {
            ApiPost('partner/add-partner', body)
                .then((res) => {
                    back()
                })
                .then((err) => {
                    console.log("err", err);
                })
        }


    }

    const DeletePostBtn = () => {
        ApiDelete(`partner/delete-partner-by-admin/${id}`)
        .then((res) => {
            back()
        })
        .catch((err) => {
            console.log("err",err);
        })
    }

    const back = () => {
        history.push('/partner')
    }

    useEffect(() => {
        if (id) {
            getPartnerById()
        }
    }, [id])

    return (
        <div>
            <div>
                <div className="col-12 p-0">
                    <div className="bg-navigation">
                        <h1 className="text-white">Partner Details </h1>
                    </div>
                </div>

                <Container fluid className="creator-table">
                    <Row className="pt-5 pl-md-3 mt-4 mt-md-0 pb-5">
                        <Col lg={12}>
                            <div className="overflow-table">
                                <Col xs={12} className="pb-3 pl-0 pt-5">
                                    <h4 className="font-weight-bold title-color">Partner Details</h4>
                                </Col>
                                <Container fluid class="mt-3 ">
                                    <Row>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Partner Name</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 d-flex">

                                                <InputField
                                                    name="creatortel"
                                                    value={state.partner_name}
                                                    placeholder="Enter Partner Name Here"
                                                    type="search"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                    onChange={(e) => setState({ ...state, partner_name: e.target.value })}
                                                />
                                                {formErr.partner_nameErr && <p>{formErr.partner_nameErr}</p>}
                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Logo</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 signature-inputs">
                                                <ImageUpload value={imageInfo.display_image_URL} onChange={imageOnChange} onRemove={onRemoveImage} loader={imgLoader} />
                                                <p className="mb-0 font-sm">

                                                    * Only images with the file name extension jpg/png, 2000x2000px to 6000x6000px can be uploaded.
                                                </p>
                                                {formErr.partner_imageErr && <p>{formErr.partner_imageErr}</p>}
                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Partner Weblink</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 d-flex">

                                                <InputField
                                                    name="creatortel"
                                                    value={state.partner_weblink}
                                                    placeholder="Ex. https://www.google.com/"
                                                    type="search"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                    onChange={(e) => setState({ ...state, partner_weblink: e.target.value })}
                                                />
                                                {formErr.partner_weblinkErr && <p>{formErr.partner_weblinkErr}</p>}

                                            </div>
                                        </Col>


                                    </Row>
                                </Container>
                                <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                                    <div className="text-center">

                                        <Buttons type="submit" children="Save" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 " handleClick={SavePostBtn} />
                                        {id && <Buttons type="submit" children="Delete" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={DeletePostBtn} />}
                                        <Buttons type="submit" children="Back" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={back} />
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

export default PartnerView;
