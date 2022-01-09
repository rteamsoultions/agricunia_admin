import React from 'react';
import { Container } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function BlogDes() {

    return (
        <>
            <div className="col-12 p-0">
                <div className="bg-navigation">
                    <h1 className="text-white">Blog Description</h1>
                </div>
            </div>

            <Container className='mt-5 pt-5'>
                <div className="App">
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>Enter Blog Description</p>"
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
            </Container>
        </>
    )

}

export default BlogDes;