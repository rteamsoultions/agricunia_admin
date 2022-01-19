import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useHistory } from 'react-router-dom'
import Buttons from "../../common/Buttons";
import InputField from "../../common/InputField";
import RemotePagination from "../../common/RemotePagination";
import { ApiDelete } from "../../helper/API/ApiData";

function InvestmentList({ data, getInvestmentListManagement, totalSize, selectRow, rowEvents }) {
    const history = useHistory();

    // const viewBtn = () => {
    //     history.push('/investment-details');
    // }

    const editBtn = (id) => {
        history.push(`/investment-details?id=${id}`);

    }

    const deleteBtn = (id) => {
        ApiDelete(`investment/delete-investment-by-admin/${id}`)
            .then((res) => {
                getInvestmentListManagement(1, 10);
            })
            .catch((err) => {
                console.log("err", err);
            })
    }


    // const viewlink = (cell, row, rowIndex, formatExtraData) => {
    //     return (
    //         <Buttons
    //             type="submit"
    //             children="View"
    //             styleClass="rounded-0 bg-custom-black "
    //             handleClick={viewBtn}
    //         />
    //     );
    // }

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
            dataField: "id",
            text: "No",
        },
        {
            dataField: "title",
            text: "Product-Title",
        },
        {
            dataField: "display_image",
            text: "Image",
            formatter: imageFormatter,
        },
        {
            dataField: "description",
            text: "Description",
        },
        {
            dataField: "start_farm_cycle",
            text: "Start Farm Cycle",
        },
        {
            dataField: "end_farm_cycle",
            text: "Target Yield",
        },
        {
            dataField: "price",
            text: "Price",
        },
        {
            dataField: "country_name",
            text: "Loction",
        },
        {
            dataField: "roi",
            text: "ROI",
        },
        // {
        //     dataField: "View",
        //     text: "View",
        //     formatter: editlink,

        // },
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
        getInvestmentListManagement(pagenumber, sizeperpage);
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

export default InvestmentList;
