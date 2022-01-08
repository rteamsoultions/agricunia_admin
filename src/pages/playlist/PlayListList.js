
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import  { useHistory } from 'react-router-dom'
import Buttons from "../../common/Buttons";
    
export default function PlayListList() {
  const history = useHistory();

    const linkFollow = (cell, row, rowIndex, formatExtraData) => {
      return (
          <Buttons
          type="submit"
          children ="Manage"
          styleClass="rounded-0 bg-custom-black "
          handleClick={() => PlaylistManageBtn(row)}
          />
      );
    }

    const PlaylistManageBtn = (row) =>{
      console.log("row",row);
      history.push('/playlistreg');
    }

    const PlaylistRegBtn = () =>{
        history.push('/playlistreg');
    }


  const play_data = [
    { 
        id: 1, 
        play_title:"Artist",
        play_tracks:"Hong Gildong",
        play_Regdate:"Republic of Korea",
       
    },
  ];

const play_head = [
  {
    dataField: "id",
    text: "No",
  },
  {
    dataField: "play_title",
    text: "Title of the playlist",
  },
  {
    dataField: "play_tracks",
    text: "Number of tracks",
   
  },
  {
    dataField: "play_Regdate",
    text: "Registration date",
   
  },
  
  {
    dataField: "Manage",
    text: "Manage",
    formatter: linkFollow,
    
  },
];

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
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
      text: 'All', value: play_data.length
    }] 
  };
 
  return (
    <>
     <div className="py-2 total-results d-flex">    
         <div><h5 className="title-color font-weight-bold">Total <span className="span-color-pink"> 100 </span> Results</h5></div>
         <div className="reg-memberbtn">
             <Buttons
                type="submit"                    
                children ="Register"
                styleClass="rounded-0 bg-custom-black"
                handleClick={PlaylistRegBtn}
            />
         </div>
     </div>
   
    <div className="App">
     
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={play_data}
        columns={play_head}
        pagination={paginationFactory(options)}
      />
    </div>
    </>
  );
}



