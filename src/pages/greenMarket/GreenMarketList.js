import React from "react";
import { useHistory } from 'react-router-dom'
import RemotePagination from "../../common/RemotePagination";
import ReactHtmlParser from 'react-html-parser';
import { ApiDelete } from "../../helper/API/ApiData";

function GreenMarketList({ data, getGreenMarketListManagement, totalSize, selectRow, rowEvents }) {
    const history = useHistory();

    const linkEditFollow = (
        cell,
        row,
        rowIndex,
        formatExtraData
    ) => {
        return (
            <a className="action-link see-details-link" onClick={() => { history.push(`/green-market-details?id=${row.id}`) }}> Edit</a>
        );
    };

    const imageFormatter = (
        cell,
        row,
        rowIndex,
        formatExtraData
    ) => {
        return (
            <img src={row.image} alt="" width="100" height="100" />
        );
    };

    const contentFormatter = (
        cell,
        row,
        rowIndex,
        formatExtraData
    ) => {
        return (
            <p>{ReactHtmlParser(row.content)}</p>
        );
    };

    const deleteBlog = (
        cell,
        row,
        rowIndex,
        formatExtraData
    ) => {
        return (
            <a className="action-link see-details-link" onClick={() => { DeleteBlogBtn(row.id) }}> Delete</a>
        );
    };

    const DeleteBlogBtn = (id) => {
        ApiDelete(`greenMarket/delete-green-market-by-admin/${id}`)
        .then((res) => {
            getGreenMarketListManagement(1, 10);
        })
        .catch((err) => {
            console.log("err",err);
        })
    }

    const columns = [
        {
            dataField: "no_id",
            text: "Sr no.",
        },
        {
            dataField: "title",
            text: "Title",
        },
        {
            dataField: "image",
            text: "Image",
            formatter: imageFormatter
        },
        {
            dataField: "content",
            text: "Description",
            formatter: contentFormatter
        },
        {
            dataField: "price",
            text: "Price"
        },
        {
            dataField: "category",
            text: "Category"
        },
        {
            dataField: "id",
            text: "Edit",
            formatter: linkEditFollow
        },
        {
            dataField: "id",
            text: "Delete",
            formatter: deleteBlog
        }
    ];

    const handleTableChange = (pagenumber, sizeperpage) => {
        getGreenMarketListManagement(pagenumber, sizeperpage);
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

export default GreenMarketList;
