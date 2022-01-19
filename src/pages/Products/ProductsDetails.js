import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import { useHistory, useLocation } from 'react-router';
import Buttons from '../../common/Buttons';
import ImageUpload from '../../common/ImageUpload';
import InputField from '../../common/InputField';
import { ApiDelete, ApiGet, ApiPost, ApiPut } from '../../helper/API/ApiData';

function ProductsDetails() {
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
        title: "",
        image: "",
        description: "",
        link: ""
    })

    const [formErr, setFormErr] = useState({
        titleErr: "",
        imageErr: "",
        descriptionErr: "",
        linkErr: ""
    })

    const validate = () => {
        let flag = false
        let err = {
            titleErr: "",
            imageErr: "",
            descriptionErr: "",
            linkErr: ""
        }

        if (!state.title || state.title === "") {
            err.titleErr = "Please enter product title"
            flag = true
        }

        if (!state.description || state.description === "") {
            err.descriptionErr = "Please enter description"
            flag = true
        }

        if (!state.link || state.link === "") {
            err.linkErr = "Please enter link"
            flag = true
        }

        if (!imageInfo.image_URL || imageInfo.image_URL === "") {
            err.imageErr = "Please select image"
            flag = true
        }


        setFormErr(err)
        return flag
    }

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

    const getProductById = () => {
        ApiGet(`pesticide/get-pesticide-user-by-id/${id}`)
            .then((res) => {
                setState({
                    ...state,
                    title: res.data.title,
                    description: res.data.description,
                    link: res.data.link
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

    const SavePostBtn = () => {
        if(validate()){
            return
        }

        const body = {
            title: state.title,
            image: imageInfo.image_URL,
            description: state.description,
            link: state.link,
        }
        debugger
        if (id) {
            ApiPut(`pesticide/edit-pesticide/${id}`, body)
                .then((res) => {
                    back()
                })
                .then((err) => {
                    console.log("err", err);
                })
        } else {
            ApiPost('pesticide/add-pesticide', body)
                .then((res) => {
                    back()
                })
                .then((err) => {
                    console.log("err", err);
                })
        }


    }

    const back = () => {
        history.push('/products-list');
    }

    const DeleteProductBtn = () => {
        ApiDelete(`pesticide/delete-pesticide-by-admin/${id}`)
        .then((res) => {
            back()
        })
        .catch((err) => {
            console.log("err",err);
        })
    }

    useEffect(() => {
        if (id) {
            getProductById()
        }
    }, [id])

    return (
        <div>
            <div>
                <div className="col-12 p-0">
                    <div className="bg-navigation">
                        <h1 className="text-white">Products Details </h1>
                    </div>
                </div>

                <Container fluid className="creator-table">
                    <Row className="pt-5 pl-md-3 mt-4 mt-md-0 pb-5">
                        <Col lg={12}>
                            <div className="overflow-table">
                                <Col xs={12} className="pb-3 pl-0 pt-5">
                                    <h4 className="font-weight-bold title-color">Products Details</h4>
                                </Col>
                                <Container fluid class="mt-3 ">
                                    <Row>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Products Title</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 d-flex">

                                                <InputField
                                                    name="title"
                                                    value={state.title}
                                                    placeholder="Enter Products Name Here"
                                                    type="search"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                    onChange={(e) => setState({...state, title: e.target.value})}
                                                />
                                                {formErr.titleErr && <p>{formErr.titleErr}</p>}
                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Products Image</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 signature-inputs">
                                                <ImageUpload value={imageInfo.display_image_URL} onChange={imageOnChange} onRemove={onRemoveImage} loader={imgLoader} />
                                                <p className="mb-0 font-sm">

                                                    * Only images with the file name extension jpg/png, 2000x2000px to 6000x6000px can be uploaded.
                                                </p>
                                                {formErr.imageErr && <p>{formErr.imageErr}</p>}
                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Products Description</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 d-flex">

                                                <InputField
                                                    name="description"
                                                    value={state.description}
                                                    placeholder="Products Description"
                                                    type="textarea"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                    onChange={(e) => setState({...state, description: e.target.value})}
                                                />
                                                {formErr.descriptionErr && <p>{formErr.descriptionErr}</p>}

                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Products Link</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 d-flex align-items-center">
                                                <InputField
                                                    name="link"
                                                    value={state.link}
                                                    placeholder="Products Links"
                                                    type="text"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                    onChange={(e) => setState({...state, link: e.target.value})}
                                                />
                                                {formErr.linkErr && <p>{formErr.linkErr}</p>}
                                                {/* <div className='pl-3'>
                                                    In Months
                                                </div> */}
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                                <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                                    <div className="text-center">

                                        <Buttons type="submit" children="Save" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 " handleClick={SavePostBtn} />
                                        {id && <Buttons type="submit" children="Delete" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={DeleteProductBtn} />}
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

export default ProductsDetails;
