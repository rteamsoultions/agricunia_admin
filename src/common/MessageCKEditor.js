import { CKEditor } from "@ckeditor/ckeditor5-react";
import { API } from "../config/API/api.config";
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { useEffect, useState } from "react";


const MessageCKEditor = (props) => {
    let IFRAME_SRC = '//cdn.iframe.ly/api/iframe';
    let API_KEY = '13c9bd8f21b29e738b1645';
    const [wordCount, setWordCount] = useState(0);
    const [totalChars, setTotalChars] = useState(0);

    useEffect(() => {
        const CharAndWordCount = () => {
            const data = props.data;
            var regex = /\s+/gi;
            const strippedString = data.replace(/(<([^>]+)>)/gi, "");
            var wordCount = strippedString.trim().replace(regex, " ").split(" ").length;
            var totalChars = strippedString.length;
            setWordCount(wordCount);
            setTotalChars(totalChars);
        };

        CharAndWordCount();
    }, [props.data]);

    const handleChange = (event, editor) => {
        const data = editor.getData();
        var regex = /\s+/gi;
        const strippedString = data.replace(/(<([^>]+)>)/gi, "");
        var wordCount = strippedString
            .trim()
            .replace(regex, " ")
            .split(" ").length;
        var totalChars = strippedString.length;
        setWordCount(wordCount);
        setTotalChars(totalChars);
        props.onChange(data);
    };

    return (
        <>
            {props.fullToolbar ?
                <CKEditor
                    onReady={editor => {
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                    }}
                    onError={({ willEditorRestart }) => {
                        if (willEditorRestart) {
                            this.editor.ui.view.toolbar.element.remove();
                        }
                    }}
                    editor={DecoupledEditor}
                    data={props.data}
                    onChange={handleChange}
                    config={{
                        previewsInData: true,
                        allowedContent: true,
                        fontSize: {

                            options: [
                                8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 41, 42, 43, 44, 45, 46]

                        },
                        // toolbar: [ 'bold', 'italic', 'link', 'undo', 'redo', 'numberedList', 'bulletedList' ],
                        mediaEmbed: {
                            previewsInData: true,
                            providers: [
                                {
                                    name: 'iframely previews',
                                    url: /.+/,
                                    html: match => {
                                        const url = match[0];
                                        var iframeUrl = IFRAME_SRC + '?app=1 & omit_script=1&omit_css=true&api_key=' + API_KEY + '&url=' + encodeURIComponent(url);
                                        return (
                                            '<div class="iframely-embed">' +
                                            '<div class="iframely-responsive">' +
                                            `<iframe src="${iframeUrl}" ` +
                                            'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
                                            '</iframe>' +
                                            '</div>' +
                                            '</div>'
                                        );
                                    }
                                }
                            ]
                        },
                        ckfinder: {
                            uploadUrl: `${API.endpoint}/general/file-and-image-upload`,
                            withCredentials: true,
                            headers: {
                                "X-CSRF-TOKEN": "CSFR-Token",
                                Authorization: "Bearer <JSON Web Token>",
                            },
                        }
                    }}
                />
                :
                <CKEditor
                    onReady={editor => {
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                    }}
                    onError={({ willEditorRestart }) => {
                        if (willEditorRestart) {
                            this.editor.ui.view.toolbar.element.remove();
                        }
                    }}
                    editor={DecoupledEditor}
                    data={props.data}
                    onChange={handleChange}
                    config={{
                        previewsInData: true,
                        allowedContent: true,
                        toolbar: ['bold', 'italic', 'link', 'undo', 'redo', 'numberedList', 'bulletedList'],
                        mediaEmbed: {
                            previewsInData: true,
                            providers: [
                                {
                                    name: 'iframely previews',
                                    url: /.+/,
                                    html: match => {
                                        const url = match[0];
                                        var iframeUrl = IFRAME_SRC + '?app=1 & omit_script=1&omit_css=true&api_key=' + API_KEY + '&url=' + encodeURIComponent(url);
                                        return (
                                            '<div class="iframely-embed">' +
                                            '<div class="iframely-responsive">' +
                                            `<iframe src="${iframeUrl}" ` +
                                            'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
                                            '</iframe>' +
                                            '</div>' +
                                            '</div>'
                                        );
                                    }
                                }
                            ]
                        },
                        ckfinder: {
                            uploadUrl: `${API.endpoint}/general/file-and-image-upload`,
                            withCredentials: true,
                            headers: {
                                "X-CSRF-TOKEN": "CSFR-Token",
                                Authorization: "Bearer <JSON Web Token>",
                            },
                        }
                    }}
                />
            }
            {/* <div className="word-counter">
                <p className="mx-2">
                    Total Words: {wordCount}
                </p>
                <p>
                    Total Characters: {totalChars}
                </p>
            </div> */}
        </>
    );
};

export default MessageCKEditor;