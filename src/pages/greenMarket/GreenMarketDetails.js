import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import { useHistory, useLocation } from 'react-router';
import Buttons from '../../common/Buttons';
import ImageUpload from '../../common/ImageUpload';
import InputField from '../../common/InputField';
import SelectOption from '../../common/SelectOption';
import MessageCKEditor from '../../common/MessageCKEditor';
import { ApiDelete, ApiGet, ApiPost, ApiPut } from '../../helper/API/ApiData';

function GreenMarketDetails() {
    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");

    const [detail, setDetail] = useState("")
    const uniqueIdState = "";

    const [imgLoader] = useState(false);
    
    const [marketData, setMarketData] = useState({
        title: "",
        price: "",
        category: ""
    })
    const [imageInfo, setImageInfo] = useState({
        image_URL: "",
        display_image_URL: "",
        signature_URL: "",
    });

    const [formErr, setFormErr] = useState({
        imageErr: "",
        contentErr: "",
        titleErr: "",
        priceErr: "",
        categoryErr: "",
    })


    const handleChange = (newData) => {
        setDetail(newData)
    };

    const handleEditMessage = (messageId, messageContent, title) => {
        window.scrollTo(0, 0);
        setDetail(messageContent)
    };

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

    const getMarketDataById = () => {
        ApiGet(`greenMarket/get-green-market-user-by-id/${id}`)
            .then((res) => {
                setMarketData({
                    ...marketData,
                    title:res.data.title,
                    price:res.data.price.toString(),
                    category:res.data.category
                })
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

    const validate = () => {
        let flag = false
        let err = {
            imageErr: "",
            contentErr: "",
            titleErr: "",
            priceErr: "",
            categoryErr: "",
        }

        if (!marketData.title || marketData.title === "") {
            err.titleErr = "Please enter green market title"
            flag = true
        }
        if (!marketData.price || marketData.price === "") {
            err.priceErr = "Please enter price"
            flag = true
        }
        if (!marketData.category || marketData.category === "") {
            err.categoryErr = "Please select category"
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


    const save = () => {
        if(validate()) {
            return
        }

        const body = {
            title: marketData.title,
            image: imageInfo.image_URL,
            content: detail,
            price: marketData.price,
            category: marketData.category,
        }

        if(id) {
            ApiPut(`greenMarket/edit-green-market/${id}`, body)
            .then((res) => {
                back()
            })
            .then((err) => {
                console.log("err", err);
            })
        } else {
            ApiPost('greenMarket/add-green-market', body)
            .then((res) => {
                back()
            })
            .then((err) => {
                console.log("err", err);
            })
        }

    }

    const back = () => {
        history.push('/green-market-list');
    }

    const DeleteBlogBtn = () => {
        ApiDelete(`greenMarket/delete-green-market-by-admin/${id}`)
            .then((res) => {
                back()
            })
            .catch((err) => {
                console.log("err", err);
            })
    }

    useEffect(() => {
        if (id) {
            getMarketDataById()
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
                                    <h4 className="font-weight-bold title-color">Green Market Details</h4>
                                </Col>
                                <Container fluid class="mt-3 ">
                                    <Row>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Product Title</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 d-flex">

                                                <InputField
                                                    name="creatortel"
                                                    value={marketData.title}
                                                    placeholder="Enter Partner Name Here"
                                                    type="search"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                    onChange={(e) => setMarketData({ ...marketData, title: e.target.value })}
                                                />
                                                {formErr.titleErr && <p>{formErr.titleErr}</p>}
                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Product Image</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 signature-inputs">
                                                <ImageUpload value={imageInfo.display_image_URL} onChange={imageOnChange} onRemove={onRemoveImage} loader={imgLoader} />
                                                <p className="mb-0 font-sm">

                                                    * Only images with the file name extension jpg/png, 2000x2000px to 6000x6000px can be uploaded.
                                                </p>
                                                
                                                {formErr.imageErr && <p>{formErr.imageErr}</p>}
                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Product price</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 d-flex">

                                                <InputField
                                                    name="creatortel"
                                                    value={marketData.price}
                                                    placeholder="Price in $"
                                                    type="number"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                    onChange={(e) => setMarketData({ ...marketData, price: e.target.value })}
                                                />
                                                
                                                {formErr.priceErr && <p>{formErr.priceErr}</p>}

                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Select Category</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2">
                                                <SelectOption
                                                    disabled data={[
                                                        { value: '', label: 'Select Category' },
                                                        { value: 'Meat', label: 'Meat' },
                                                        { value: 'Ready', label: 'Ready' },
                                                        { value: 'Egg', label: 'Egg' },
                                                        { value: 'Rice', label: 'Rice' },]}
                                                    value={marketData.category}
                                                    onChange={(e) => setMarketData({ ...marketData, category: e })}
                                                    name="selectstelamcountry"
                                                    styleClass="drop-down-margin"
                                                    defauultvalue="Select Category" />
                                                    
                                                {formErr.categoryErr && <p>{formErr.categoryErr}</p>}
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

                                        <Buttons type="submit" children="Save" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 " handleClick={save} />
                                        <Buttons type="submit" children="Back" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={back} />
                                        {id && <Buttons type="submit" children="Delete" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={DeleteBlogBtn} />}
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
