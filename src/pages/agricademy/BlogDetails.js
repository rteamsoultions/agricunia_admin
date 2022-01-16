import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import { useHistory, useLocation } from 'react-router';
import Buttons from '../../common/Buttons';
import ImageUpload from '../../common/ImageUpload';
import InputField from '../../common/InputField';
import MessageCKEditor from '../../common/MessageCKEditor';
import { ApiDelete, ApiGet, ApiPost, ApiPut } from '../../helper/API/ApiData';

function BlogDetails() {
    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");

    const [detail, setDetail] = useState("")
    const [uniqueBlogId, setUniqueBlog] = useState("")
    const uniqueIdState = "";
    const [imgLoader] = useState(false)
    const [imageInfo, setImageInfo] = useState({
        image_URL: "",
        display_image_URL: "",
        signature_URL: "",
    });

    const [formErr, setFormErr] = useState({
        imageErr: "",
        titleErr: "",
        contentErr: ""
    })

    const validate = () => {
        let flag = false
        let err = {
            imageErr: "",
            titleErr: "",
            contentErr: ""
        }

        if (!title || title === "") {
            err.titleErr = "Please enter blog title"
            flag = true
        }

        if (!imageInfo.image_URL || imageInfo.image_URL === "") {
            err.imageErr = "Please select image"
            flag = true
        }

        if (!detail || detail === "") {
            err.contentErr = "Please enter blog description"
            flag = true
        }

        setFormErr(err)
        return flag
    }

    const getBlogById = () => {
        ApiGet(`blog/get-blog-by-id/${id}`)
            .then((res) => {
                setTitle(res.data.title)
                setImageInfo({
                    ...imageInfo.image_URL,
                    image_URL: res.data.image,
                    display_image_URL: res.data.display_image,
                })
                setDetail(res.data.content)
            })
            .catch((err) => {
                console.log("err", err);
            })
    }

    const save = () => {
        if (validate()) {
            return
        }

        const body = {
            title: title,
            image: imageInfo.image_URL,
            content: detail,
        }

        if (id) {
            ApiPut(`blog/edit-blog/${id}`, body)
                .then((res) => {
                    back()
                })
                .then((err) => {
                    console.log("err", err);
                })
        } else {
            ApiPost('blog/add-blog', body)
                .then((res) => {
                    back()
                })
                .then((err) => {
                    console.log("err", err);
                })
        }
    }


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
    const [title, setTitle] = useState("")

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

    const back = () => {
        history.push('/blog');
    }

    const DeleteBlogBtn = () => {
        ApiDelete(`blog/delete-blog-by-admin/${id}`)
        .then((res) => {
            back()
        })
        .catch((err) => {
            console.log("err",err);
        })
    }


    const handleChange = (newData) => {
        setDetail(newData)
    };

    const handleEditMessage = (messageId, messageContent, title) => {
        window.scrollTo(0, 0);
        setDetail(messageContent)
    };

    useEffect(() => {
        if (id) {
            getBlogById()
        }
    }, [id])

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
                                    <h4 className="font-weight-bold title-color">Blog Details</h4>
                                </Col>
                                <Container fluid class="mt-3 ">
                                    <Row>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Blog Title</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 d-flex">

                                                <InputField
                                                    name="creatortel"
                                                    value={title}
                                                    placeholder="Enter blog title here"
                                                    type="text"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                    onChange={(e) => setTitle(e.target.value)}
                                                />
                                                {formErr.titleErr && <p>{formErr.titleErr}</p>}
                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Blog Image</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 signature-inputs">
                                                <ImageUpload value={imageInfo.display_image_URL} onChange={imageOnChange} onRemove={onRemoveImage} loader={imgLoader} />
                                                <p className="mb-0 font-sm">

                                                    * Only images with the file name extension jpg/png, 2000x2000px to 6000x6000px can be uploaded.
                                                </p>
                                                {formErr.imageErr && <p>{formErr.imageErr}</p>}
                                            </div>
                                        </Col>

                                        <Col className='mt-5'>
                                            <div className="App">
                                                <MessageCKEditor
                                                    onChange={handleChange}
                                                    onEdit={handleEditMessage}
                                                    data={detail}
                                                    uniqueid={uniqueIdState}
                                                    fullToolbar={true}
                                                />
                                                {formErr.contentErr && <p>{formErr.contentErr}</p>}
                                            </div>
                                        </Col>

                                    </Row>
                                </Container>
                                <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                                    <div className="text-center">

                                        <Buttons type="button" children="Save" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 " handleClick={save} />
                                        <Buttons type="button" children="Back" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={back} />
                                        {id && <Buttons type="button" children="Delete" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={DeleteBlogBtn} />}
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

export default BlogDetails;
