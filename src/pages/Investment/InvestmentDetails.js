import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import { useHistory, useLocation } from 'react-router';
import Buttons from '../../common/Buttons';
import ImageUpload from '../../common/ImageUpload';
import InputField from '../../common/InputField';
import SelectOption from '../../common/SelectOption';
import { ApiDelete, ApiGet, ApiPost, ApiPut } from '../../helper/API/ApiData';

function InvestmentDetails() {

    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");

    const [countryOptions, setCountryOptions] = useState([{
        label: "",
        value: 0
    }])
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
        image: imageInfo.image_URL,
        description: "",
        start_farm_cycle: "",
        end_farm_cycle: "",
        price: "",
        roi: "",
        country: 0
    })

    const [stateErr, setStateErr] = useState({
        titleErr: "",
        imageErr: "",
        descriptionErr: "",
        start_farm_cycleErr: "",
        end_farm_cycleErr: "",
        priceErr: "",
        roiErr: "",
        countryErr: ""
    })

    const validate = () => {
        let flag = false
        let err = {
            titleErr: "",
            imageErr: "",
            descriptionErr: "",
            start_farm_cycleErr: "",
            end_farm_cycleErr: "",
            priceErr: "",
            roiErr: "",
            countryErr: ""
        }

        if (!state.title || state.title === "") {
            err.titleErr = "Please enter blog title"
            flag = true
        }
        if (!state.description || state.description === "") {
            err.descriptionErr = "Please enter description"
            flag = true
        }
        if (!state.start_farm_cycle || state.start_farm_cycle === "") {
            err.start_farm_cycleErr = "Please enter start farm cycle"
            flag = true
        }
        if (!state.end_farm_cycle || state.end_farm_cycle === "") {
            err.end_farm_cycleErr = "Please enter end farm cycle"
            flag = true
        }
        if (!state.price || state.price === "") {
            err.priceErr = "Please enter price"
            flag = true
        }
        if (!state.roi || state.roi === "") {
            err.roiErr = "Please enter roi"
            flag = true
        }
        if (!state.country || state.country === "") {
            err.countryErr = "Please select country"
            flag = true
        }

        if (!imageInfo.image_URL || imageInfo.image_URL === "") {
            err.imageErr = "Please select image"
            flag = true
        }


        setStateErr(err)
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

    const getCountry = () => {
        ApiGet('general/getCountry')
            .then((res) => {
                console.log("res", res);
                setCountryOptions(
                    res.data &&
                    res.data.map((c) => {
                        return {
                            label: c.name,
                            value: c.id
                        }
                    })
                )
            })
            .then((err) => {
                console.log("err", err);
            })
    }

    const getInvestmentById = () => {
        ApiGet(`investment/get-investment-by-id/${id}`)
            .then((res) => {
                setState({
                    ...state,
                    title: res.data.title,
                    display_image: res.data.display_image,
                    description: res.data.description,
                    start_farm_cycle: res.data.start_farm_cycle,
                    end_farm_cycle: res.data.end_farm_cycle,
                    price: res.data.price,
                    roi: res.data.roi,
                    country: res.data.country_id,
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
        if (validate()) {
            return
        }

        const body = {
            title: state.title,
            image: imageInfo.image_URL,
            description: state.description,
            start_farm_cycle: state.start_farm_cycle,
            end_farm_cycle: state.end_farm_cycle,
            price: state.price,
            roi: state.roi,
            country_id: state.country
        }

        console.log('body', body);

        // return 

        if (id) {
            ApiPut(`investment/edit-investment/${id}`, body)
                .then((res) => {
                    back()
                })
                .then((err) => {
                    console.log("err", err);
                })
        } else {
            ApiPost('investment/add-investment', body)
                .then((res) => {
                    back()
                })
                .then((err) => {
                    console.log("err", err);
                })
        }

    }

    const DeletePostBtn = () => {
        ApiDelete(`investment/delete-investment-by-admin/${id}`)
            .then((res) => {
                back()
            })
            .catch((err) => {
                console.log("err", err);
            })
    }

    const back = () => {
        history.push('/investment-list');
    }

    useEffect(() => {
        getCountry()
        if (id) {
            getInvestmentById()
        }
    }, [id])

    return (
        <div>
            <div>
                <div className="col-12 p-0">
                    <div className="bg-navigation">
                        <h1 className="text-white">Investment Details </h1>
                    </div>
                </div>

                <Container fluid className="creator-table">
                    <Row className="pt-5 pl-md-3 mt-4 mt-md-0 pb-5">
                        <Col lg={12}>
                            <div className="overflow-table">
                                <Col xs={12} className="pb-3 pl-0 pt-5">
                                    <h4 className="font-weight-bold title-color">Investment Details</h4>
                                </Col>
                                <Container fluid class="mt-3 ">
                                    <Row>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Investment Title</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 d-flex">

                                                <InputField
                                                    name="title"
                                                    value={state.title}
                                                    placeholder="Enter Partner Investment Title"
                                                    type="text"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                    onChange={(e) => setState({ ...state, title: e.target.value })}
                                                />
                                                {stateErr.titleErr && <p>{stateErr.titleErr}</p>}

                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Investment Image</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 signature-inputs">
                                                <ImageUpload value={imageInfo.display_image_URL} onChange={imageOnChange} onRemove={onRemoveImage} loader={imgLoader} />
                                                <p className="mb-0 font-sm">

                                                    * Only images with the file name extension jpg/png, 2000x2000px to 6000x6000px can be uploaded.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Investment Description</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 d-flex">

                                                <InputField
                                                    name="description"
                                                    value={state.description}
                                                    placeholder="Investment Description"
                                                    type="textarea"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                    onChange={(e) => setState({ ...state, description: e.target.value })}
                                                />

                                                {stateErr.descriptionErr && <p>{stateErr.descriptionErr}</p>}

                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Start Farm Cycle</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            {/* <div className="py-2">
                                                <SelectOption
                                                    disabled data={[
                                                        { value: 1, label: '1 months' },
                                                        { value: 2, label: 'Ready' },
                                                        { value: 3, label: 'Egg' },
                                                        { value: 4, label: 'Rice' },]}
                                                    onChange={handleDropdown}
                                                    name="selectstelamcountry"
                                                    styleClass="drop-down-margin"
                                                    defauultvalue="Select Country" />
                                            </div> */}
                                            <div className="py-2 d-flex align-items-center">
                                                <InputField
                                                    name="start_farm_cycle"
                                                    value={state.start_farm_cycle}
                                                    placeholder="Enter Months"
                                                    type="number"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                    onChange={(e) => setState({ ...state, start_farm_cycle: e.target.value })}
                                                />
                                                {stateErr.start_farm_cycleErr && <p>{stateErr.start_farm_cycleErr}</p>}
                                                <div className='pl-3'>
                                                    In Months
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={3} className="profile-table-td title-color font-weight-bold">End Farm Cycle</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            {/* <div className="py-2">
                                                <SelectOption
                                                    disabled data={[
                                                        { value: 1, label: '1 months' },
                                                        { value: 2, label: 'Ready' },
                                                        { value: 3, label: 'Egg' },
                                                        { value: 4, label: 'Rice' },]}
                                                    onChange={handleDropdown}
                                                    name="selectstelamcountry"
                                                    styleClass="drop-down-margin"
                                                    defauultvalue="Select Country" />
                                            </div> */}
                                            <div className="py-2 d-flex align-items-center">
                                                <InputField
                                                    name="end_farm_cycle"
                                                    value={state.end_farm_cycle}
                                                    placeholder="Enter Months"
                                                    type="number"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                    onChange={(e) => setState({ ...state, end_farm_cycle: e.target.value })}
                                                />
                                                {stateErr.end_farm_cycleErr && <p>{stateErr.end_farm_cycleErr}</p>}
                                                <div className='pl-3'>
                                                    In Months
                                                </div>
                                            </div>
                                        </Col>

                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Price Tag</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 d-flex align-items-center">
                                                <InputField
                                                    name="price"
                                                    value={state.price}
                                                    placeholder="Enter in $"
                                                    type="number"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                    onChange={(e) => setState({ ...state, price: e.target.value })}
                                                />

                                                {stateErr.priceErr && <p>{stateErr.priceErr}</p>}
                                                <div className='pl-3'>
                                                    In $
                                                </div>
                                            </div>
                                        </Col>


                                        <Col md={3} className="profile-table-td title-color font-weight-bold">Location</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 ">
                                                <SelectOption
                                                    disabled
                                                    data={countryOptions && countryOptions}
                                                    name="country"
                                                    styleClass="drop-down-margin"
                                                    defauultvalue="Select Country"
                                                    value={state.country}
                                                    onChange={(e) => setState({ ...state, country: e })}
                                                />
                                                {stateErr.countryErr && <p>{stateErr.countryErr}</p>}
                                            </div>
                                        </Col>


                                        <Col md={3} className="profile-table-td title-color font-weight-bold">ROI</Col>
                                        <Col md={9} className="profile-table-td-input">
                                            <div className="py-2 d-flex align-items-center">
                                                <InputField
                                                    name="roi"
                                                    value={state.roi}
                                                    placeholder="ROI in %"
                                                    type="number"
                                                    InputstyleClass="custom-input mb-0 custom-width"
                                                    onChange={(e) => setState({ ...state, roi: e.target.value })}
                                                />
                                                {stateErr.roiErr && <p>{stateErr.roiErr}</p>}
                                                <div className='pl-3'>
                                                    In %
                                                </div>
                                            </div>
                                        </Col>


                                    </Row>
                                </Container>
                                <Col xs={12} className="pb-3 pl-0 pt-5 w-100">
                                    <div className="text-center">

                                        <Buttons type="button" children="Save" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 " handleClick={SavePostBtn} />
                                        {id && <Buttons type="button" children="Delete" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={DeletePostBtn} />}
                                        <Buttons type="button" children="Back" styleClass="rounded-0 bg-custom-black ml-2 mt-1 mb-2 bg-line" handleClick={back} />
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

export default InvestmentDetails;
