import React, { useEffect, useState } from 'react'
import { ApiPost } from '../helper/API/ApiData';
import { Loader } from './Loader';


const ImageUpload = (props) => {

    const [imgfile, setimgfile] = useState({
        url: "",
        file: "",
        isDragging: false,
    });

    useEffect(() => {
        if (props.value) {
            setimgfile({
                ...imgfile,
                url: props.value
            });
        }
    }, [props.value])

    const dropClass = imgfile.isDragging ? "dragDrop dragging relative" : "dragDrop relative ";

    const onRemove = () => {
        setimgfile({
            url: "",
            file: "",
            isDragging: false,
        });

        props.onRemove()
    }

    const handleDrags = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setimgfile({
            ...imgfile,
            isDragging: true,
        });
    }

    const handleDragEnter = (e) => {
        handleDrags(e);
    }

    const handleDragOver = (e) => {
        handleDrags(e);
    }

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setimgfile({
            ...imgfile,
            isDragging: false,
        });
    }

    const onChange = (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        handleFiles(file);

        props.onChange(file)
    }

    const handleDrop = (e) => {
        e.stopPropagation();
        e.preventDefault();

        const data = e.dataTransfer;
        const file = data.files[0];

        props.onChange(file)
        handleFiles(file);

        setimgfile({
            ...imgfile,
            isDragging: false,
        });
    }

    const handleFiles = (file) => {
        // this could be refactored to not use the file reader
        var reader = new FileReader();
        reader.onloadend = () => {
            var imageUrl = window.URL.createObjectURL(file);
            setimgfile({
                file: file,
                url: imageUrl,
            });
        }

        if (file) {
            reader.readAsDataURL(file);
        }


    }

    const uploadInput = () => {
        document.getElementById("uploadImageInput").click()
    }

    return (


        <div className="image-upload-width">
            <input type="file" id="uploadImageInput" onChange={onChange} accept="image/*" className="invisible" />
            <div className="uploadInput ">

                <div className={`position-relative ${dropClass}`} onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave}>

                    <div className="custom-upload-input" onClick={uploadInput}>

                        {props.loader &&
                            <span className="">
                                <Loader />
                            </span>
                        }

                        {!imgfile.url &&
                            <span className="upload-btn-cloud">
                                <svg xmlns="http://www.w3.org/2000/svg" className="upload-image-icon" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <span className="">Click or Drag file here to upload</span>
                            </span>
                        }
                    </div>
                    <div className="uploded-image">

                        <div className="">
                            {
                                imgfile.url && !props.loader &&
                                (
                                    <div className="previewItem">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="close-image" fill="currentColor" onClick={() => onRemove()}>
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                                        </svg>
                                        <img className="imagePreview" src={imgfile.url} alt="upload-preview" />
                                        <div className="">
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ImageUpload