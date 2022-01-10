import React, { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import MessageCKEditor from '../../common/MessageCKEditor';

function ProductsDes() {
    const [detail, setDetail] = useState("")
    const uniqueIdState = "";

    const handleChange = (newData) => {
        setDetail(newData)
    };

    const handleEditMessage = (messageId, messageContent, title) => {
        window.scrollTo(0, 0);
        setDetail(messageContent)
    };

    return (
        <>
            <div className="col-12 p-0">
                <div className="bg-navigation">
                    <h1 className="text-white">Pesticide Products page Description</h1>
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
                    {/* <CKEditor
                        editor={ClassicEditor}
                        data="<p>Enter Pesticide Products Description</p>"
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
                    /> */}
                </div>
            </Container>
            <Col xs={12} className="pb-3 pl-0 pt-5 w-100 text-center">
                <button className='bg-custom-black text-white'>save</button>
            </Col>
        </>
    )

}

export default ProductsDes;
