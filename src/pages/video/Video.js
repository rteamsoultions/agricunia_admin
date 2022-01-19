import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useHistory } from 'react-router-dom'
import Buttons from "../../common/Buttons";
import InputField from "../../common/InputField";
import RemotePagination from "../../common/RemotePagination";
import { ApiDelete } from "../../helper/API/ApiData";

function Video({ data, getVideoListManagement, totalSize, selectRow, rowEvents }) {
    const history = useHistory();

    const editBtn = (id) => {
        history.push(`/video-View?id=${id}`);

    }

    const deleteBtn = (id) => {
        ApiDelete(`videoGallary/delete-video-gallary-by-admin/${id}`)
        .then((res) => {
            getVideoListManagement(1, 10);
        })
        .catch((err) => {
            console.log("err",err);
        })
    }

    const editlink = (cell, row, rowIndex, formatExtraData) => {
        return (
            <Buttons
                type="submit"
                children="Edit"
                styleClass="rounded-0 bg-custom-black "
                handleClick={() => editBtn(row.id)}
            />
        );
    }

    const deletelink = (cell, row, rowIndex, formatExtraData) => {
        return (
            <Buttons
                type="submit"
                children="Delete"
                styleClass="rounded-0 bg-custom-black "
                handleClick={() => deleteBtn(row.id)}
            />
        );
    }

    const imageFormatter = (
        cell,
        row,
        rowIndex,
        formatExtraData
    ) => {
        return (
            <img src={row.display_image} alt="" width="100" height="100" />
        );
    };


    const columns = [
        {
            dataField: "no_id",
            text: "No",
        },
        {
            dataField: "display_image",
            text: "Thumb",
            formatter: imageFormatter,
        },
        {
            dataField: "title",
            text: "Title",
        },
        {
            dataField: "link",
            text: "Link",
        },
        {
            dataField: "created_at",
            text: "Date",
        },
        {
            dataField: "Edit",
            text: "Edit",
            formatter: editlink,

        },
        {
            dataField: "Delete",
            text: "Delete",
            formatter: deletelink,

        },
    ];

    const handleTableChange = (pagenumber, sizeperpage) => {
        getVideoListManagement(pagenumber, sizeperpage);
    };


    return (
        <>
            <div className="user-list checkbox-margin">
                <RemotePagination
                    data={data}
                    columns={columns}
                    totalSize={totalSize ?? 0}
                    onTableChange={(page, sizePerPage) =>
                        handleTableChange(page, sizePerPage)
                    }
                    pagesizedropdownflag
                    selectRow={selectRow}
                    rowEvents={rowEvents}
                    pageName=""
                    showCheckbox={false}
                />
            </div>
        </>
    )
}

export default Video;
