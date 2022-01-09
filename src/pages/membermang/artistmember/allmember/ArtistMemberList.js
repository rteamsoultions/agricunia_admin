
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Buttons from '../../../../common/Buttons';
import  { useHistory } from 'react-router-dom'
    
export default function ArtistMemberList() {
  const history = useHistory();

    const linkFollow = (cell, row, rowIndex, formatExtraData) => {
      return (
          <Buttons
          type="submit"
          children ="Manage"
          styleClass="rounded-0 bg-custom-black"
          handleClick={() => managememberbtn(row)}
          />
      );
    }

    const managememberbtn = (row) =>{
      console.log("row",row);
      history.push('/artistprofilereg');
    }

    const regmemberbtn = () =>{
        history.push('/artistprofilereg');
    }

    function priceFormatter(cell, row) {
    
      return (
        <strong style={ { color: '#29803b' } }>{ cell }</strong>
      );
    }

  const artist_data = [
    { 
        id: 1, 
        artist_type:"Artist",
        artist_name:"Hong Gildong",
        artist_country:"Republic of Korea",
        artist_email:"abc@gmail.com",
        artist_mobile:"01012341234",
        artist_sales:"Yes",
        artist_music:"Registered",
        artist_reg_date:"YYYY-MM-DD HH:MM",
       
    },
  ];

const artist_head = [
  {
    dataField: "id",
    text: "No",
  },
  {
    dataField: "artist_type",
    text: "User Type",
  },
  {
    dataField: "artist_name",
    text: "Name",
    formatter: priceFormatter,
  },
  {
    dataField: "artist_country",
    text: "Country",
   
  },
  {
    dataField: "artist_email",
    text: "Email",
   
  },
  {
    dataField: "artist_mobile",
    text: "Mobile No.",
   
  },
  {
    dataField: "artist_sales",
    text: "Sales history",
   
  },
  {
    dataField: "artist_music",
    text: "Music Source",
   
  },
  {
    dataField: "artist_reg_date",
    text: "Registration Date",
   
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
                children ="Register"
                styleClass="rounded-0 bg-custom-black"
                handleClick={regmemberbtn}
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



