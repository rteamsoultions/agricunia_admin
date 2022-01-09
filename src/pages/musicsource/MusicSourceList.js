
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useHistory } from 'react-router-dom'
import Buttons from "../../common/Buttons";

export default function MusicSourceList() {
  const history = useHistory();

  const linkFollow = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Buttons
        type="submit"
        children="Manage"
        styleClass="rounded-0 bg-custom-black"
        handleClick={() => managememberbtn(row)}
      />
    );
  }

  const managememberbtn = (row) => {
    console.log("row", row);
    history.push('/musicsourcereg');
  }

  const musicRegForm = () => {
    history.push('/musicsourcereg');
  }

  function approvalformater(cell, row) {
    if (row.Musics_Status === "Disapproved") {
      return (
        <span>
          <strong style={{ color: '#29803b' }}>{cell}</strong>
        </span>
      );
    }

    return (
      <span>{cell}</span>
    );
  }

  const artist_data = [
    {
      id: 1,
      Musics_art: "Hong Gildong",
      Musics_Album: "Blooming",
      Musics_tracks: "4",
      Musics_reg_date: "YYYY.MM.DD HH:MM ",
      Musics_Status: "Approved",
    },

    {
      id: 2,
      Musics_art: "Hong Gildong",
      Musics_Album: "Blooming",
      Musics_tracks: "4",
      Musics_reg_date: "YYYY.MM.DD HH:MM ",
      Musics_Status: "Disapproved",
    },

    {
      id: 2,
      Musics_art: "Hong Gildong",
      Musics_Album: "Blooming",
      Musics_tracks: "4",
      Musics_reg_date: "YYYY.MM.DD HH:MM ",
      Musics_Status: "Disapproved",
    },

    {
      id: 2,
      Musics_art: "Hong Gildong",
      Musics_Album: "Blooming",
      Musics_tracks: "4",
      Musics_reg_date: "YYYY.MM.DD HH:MM ",
      Musics_Status: "Disapproved",
    },

    {
      id: 2,
      Musics_art: "Hong Gildong",
      Musics_Album: "Blooming",
      Musics_tracks: "4",
      Musics_reg_date: "YYYY.MM.DD HH:MM ",
      Musics_Status: "Disapproved",
    },


    {
      id: 2,
      Musics_art: "Hong Gildong",
      Musics_Album: "Blooming",
      Musics_tracks: "4",
      Musics_reg_date: "YYYY.MM.DD HH:MM ",
      Musics_Status: "Disapproved",
    },

    {
      id: 2,
      Musics_art: "Hong Gildong",
      Musics_Album: "Blooming",
      Musics_tracks: "4",
      Musics_reg_date: "YYYY.MM.DD HH:MM ",
      Musics_Status: "Disapproved",
    },
    {
      id: 2,
      Musics_art: "Hong Gildong",
      Musics_Album: "Blooming",
      Musics_tracks: "4",
      Musics_reg_date: "YYYY.MM.DD HH:MM ",
      Musics_Status: "Disapproved",
    },
    {
      id: 2,
      Musics_art: "Hong Gildong",
      Musics_Album: "Blooming",
      Musics_tracks: "4",
      Musics_reg_date: "YYYY.MM.DD HH:MM ",
      Musics_Status: "Disapproved",
    },
    {
      id: 2,
      Musics_art: "Hong Gildong",
      Musics_Album: "Blooming",
      Musics_tracks: "4",
      Musics_reg_date: "YYYY.MM.DD HH:MM ",
      Musics_Status: "Disapproved",
    },
    {
      id: 2,
      Musics_art: "Hong Gildong",
      Musics_Album: "Blooming",
      Musics_tracks: "4",
      Musics_reg_date: "YYYY.MM.DD HH:MM ",
      Musics_Status: "Disapproved",
    },
    {
      id: 2,
      Musics_art: "Hong Gildong",
      Musics_Album: "Blooming",
      Musics_tracks: "4",
      Musics_reg_date: "YYYY.MM.DD HH:MM ",
      Musics_Status: "Disapproved",
    },
    {
      id: 2,
      Musics_art: "Hong Gildong",
      Musics_Album: "Blooming",
      Musics_tracks: "4",
      Musics_reg_date: "YYYY.MM.DD HH:MM ",
      Musics_Status: "Disapproved",
    },
    {
      id: 2,
      Musics_art: "Hong Gildong",
      Musics_Album: "Blooming",
      Musics_tracks: "4",
      Musics_reg_date: "YYYY.MM.DD HH:MM ",
      Musics_Status: "Disapproved",
    },
    {
      id: 2,
      Musics_art: "Hong Gildong",
      Musics_Album: "Blooming",
      Musics_tracks: "4",
      Musics_reg_date: "YYYY.MM.DD HH:MM ",
      Musics_Status: "Disapproved",
    },
  ];

  const artist_head = [
    {
      dataField: "id",
      text: "No",
    },
    {
      dataField: "Musics_art",
      text: "Artist",
    },
    {
      dataField: "Musics_Album",
      text: "Album",
      // formatter: priceFormatter,
    },
    {
      dataField: "Musics_tracks",
      text: "Number of Tracks",

    },
    {
      dataField: "Musics_reg_date",
      text: "Registration Date",

    },
    {
      dataField: "Musics_Status",
      text: "Status",
      formatter: approvalformater

    },

    {
      dataField: "Manage",
      text: "Manage",
      formatter: linkFollow,

    },
  ];

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );


  const options = {
    paginationSize: 5,
    pageStartIndex: 1,
    alwaysShowAllBtns: true,
    hidePageListOnlyOnePage: true,
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [{
      text: '10', value: 10
    }, {
      text: '20', value: 20
    }, {
      text: 'All', value: artist_data.length
    }]
  };

  return (
    <>
      <div className="py-2 total-results d-flex">
        <div><h5 className="title-color font-weight-bold">Total <span className="span-color-pink"> 100 </span> Results</h5></div>
        <div className="reg-memberbtn">
          <Buttons
            type="submit"
            children="Register"
            styleClass="rounded-0 bg-custom-black"
            handleClick={musicRegForm}
          />
        </div>
      </div>

      <div className="App">

        <BootstrapTable
          bootstrap4
          keyField="id"
          data={artist_data}
          columns={artist_head}
          pagination={paginationFactory(options)}
        />
      </div>
    </>
  );
}

