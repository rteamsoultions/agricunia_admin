import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useHistory } from 'react-router-dom'
import Buttons from "../../common/Buttons";
import InputField from "../../common/InputField";
import RemotePagination from "../../common/RemotePagination";
import { ApiDelete } from "../../helper/API/ApiData";

export default function Gallary({ data, getGallaryListManagement, totalSize, selectRow, rowEvents }) {
    const history = useHistory();

    const editBtn = (id) => {
        history.push(`/gallary-view?id=${id}`);

    }

    const deleteBtn = (id) => {
        ApiDelete(`imageGallary/delete-image-gallary-by-admin/${id}`)
        .then((res) => {
            getGallaryListManagement(1, 10);
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
            text: "Image",
            formatter: imageFormatter,

        },
        {
            dataField: "title",
            text: "Title",
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
        getGallaryListManagement(pagenumber, sizeperpage);
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
    );
}
