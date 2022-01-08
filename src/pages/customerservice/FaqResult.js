
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import  { useHistory } from 'react-router-dom'
import Buttons from "../../common/Buttons";
import CheckBox from "../../common/CheckBox";

    
export default function FaqResult() {
  const history = useHistory();

    const linkFollow = (cell, row, rowIndex, formatExtraData) => {
      return (
          <Buttons
          type="submit"
          children ="Amend"
          styleClass="rounded-0 bg-custom-black "
          handleClick={() => faqamendbtn(row)}
          />
      );
    }

    const RowSelector = (cell, row, rowIndex, formatExtraData) => {
        return (
           <div class="checkboxes tabel-checkbox">
           <CheckBox
            type="checkbox" 
            name="checkbox"
            id="checkbox" 
            value="checkbox" 
            styleCheck="checkmark"
           />
        </div>
        );
      }

    const faqamendbtn = (row) =>{
      console.log("row",row);
      history.push('/faqreg');
    }

    const faqregBtn = () =>{
        history.push('/faqreg');
    }


  const play_data = [
    { 
        faq_select:"",
        id: 1, 
        faq_title:"How Can I log in?",
        faq_view:"156",
        faq_reg_date:"YYYY-MM-DD HH:MM ",
       
    },
    { 
        faq_select:"",
        id: 2, 
        faq_title:"How Can I log in?",
        faq_view:"156",
        faq_reg_date:"YYYY-MM-DD HH:MM ",
       
    },
  ];

const play_head = [
  {
    dataField: "faq_select",
    text: "FAQ",
    formatter: RowSelector,
  },
  {
    dataField: "id",
    text: "No",
  },
  {
    dataField: "faq_title",
    text: "Title",
  },
  {
    dataField: "faq_view",
    text: "Views",
   
  },
  {
    dataField: "faq_reg_date",
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
                styleClass="rounded-0 bg-custom-black bg-pink"
                handleClick={faqregBtn}
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




