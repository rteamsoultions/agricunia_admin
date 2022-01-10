import React, { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import MessageCKEditor from '../../common/MessageCKEditor';
import { ApiGet, ApiGetNoAuth, ApiPost } from '../../helper/API/ApiData';
import { CategoryType } from '../../helper/Constant';

function AboutAgricunia() {
    const [detail, setDetail] = useState("")
    const [aboutAgricuniaId, setAboutAgricuniaId] = useState("")
    const uniqueIdState = "";

    const getData = () => {
        ApiGetNoAuth(`multidata/get-category-wise-display-user?category=AboutAgricunia`)
        .then((response) => {
            console.log("reasponse",response);
            setDetail(response && response.data && response.data.content ? response.data.content : "")
            setAboutAgricuniaId(response && response.data && response.data.id ? response.data.id : "")
        }).catch((error) => {
            console.log(error);
            // toast.error("Fail!")
        });
    }

    const saveData = () => {
        const body = {
                id: aboutAgricuniaId,
                content: detail,
                category: CategoryType.AboutAgricunia
        }
        ApiPost(`multidata/add-category-wise-content`, body)
            .then((response) => {
                console.log("reasponse",response);
            }).catch((error) => {
                console.log(error);
                toast.error("Fail!")
                // setTechData({ ...techData, displayImage: displayImage })
            });
    }

    const handleChange = (newData) => {
        setDetail(newData)
    };

    const handleEditMessage = (messageId, messageContent, title) => {
        window.scrollTo(0, 0);
        setDetail(messageContent)
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="col-12 p-0">
                <div className="bg-navigation">
                    <h1 className="text-white">About Agricunia</h1>
                </div>
            </div>

            <Container className='mt-5 pt-5'>
                <div className="App">
                    <MessageCKEditor
                        onChange={handleChange}
                        onEdit={handleEditMessage}
                        data={detail}
                        uniqueid={uniqueIdState}
                        fullToolbar={true}
                    />
                </div>
            </Container>
            <Col xs={12} className="pb-3 pl-0 pt-5 w-100 text-center">
                <button className='bg-custom-black text-white' onClick={saveData}>save</button>
            </Col>
        </>
    )

}

export default AboutAgricunia;
