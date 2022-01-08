import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

    
export default function WithdrawalMemberList() {

    function priceFormatter(cell, row) {
    
        return (
          <strong style={ { color: '#B931B8' } }>{ cell }</strong>
        );
      }

  const products = [

   {
        id:1,
        w_member_type:"Creator",
        w_member_name:"Hong**",
        w_member_email:"abc@gmail.com",
        w_member_reason:"No service the user wants",
        w_member_by:"User",
        w_member_log_sign_date:"YYYY-MM-DD HH:MM YYYY-MM-DD HH:MM",
    },
    {
        id:2,
        w_member_type:"Creator",
        w_member_name:"Hong**",
        w_member_email:"abc@gmail.com",
        w_member_reason:"No service the user wants",
        w_member_by:"User",
        w_member_log_sign_date:"YYYY-MM-DD HH:MM YYYY-MM-DD HH:MM",
    },
    {
        id:3,
        w_member_type:"Creator",
        w_member_name:"Hong**",
        w_member_email:"abc@gmail.com",
        w_member_reason:"No service the user wants",
        w_member_by:"User",
        w_member_log_sign_date:"YYYY-MM-DD HH:MM YYYY-MM-DD HH:MM",
    },
    {
        id:4,
        w_member_type:"Creator",
        w_member_name:"Hong**",
        w_member_email:"abc@gmail.com",
        w_member_reason:"No service the user wants",
        w_member_by:"User",
        w_member_log_sign_date:"YYYY-MM-DD HH:MM YYYY-MM-DD HH:MM",
    },
    {
        id:5,
        w_member_type:"Creator",
        w_member_name:"Hong**",
        w_member_email:"abc@gmail.com",
        w_member_reason:"No service the user wants",
        w_member_by:"User",
        w_member_log_sign_date:"YYYY-MM-DD HH:MM YYYY-MM-DD HH:MM",
    },
    {
        id:6,
        w_member_type:"Creator",
        w_member_name:"Hong**",
        w_member_email:"abc@gmail.com",
        w_member_reason:"No service the user wants",
        w_member_by:"User",
        w_member_log_sign_date:"YYYY-MM-DD HH:MM YYYY-MM-DD HH:MM",
    },
    {
        id:7,
        w_member_type:"Creator",
        w_member_name:"Hong**",
        w_member_email:"abc@gmail.com",
        w_member_reason:"No service the user wants",
        w_member_by:"User",
        w_member_log_sign_date:"YYYY-MM-DD HH:MM YYYY-MM-DD HH:MM",
    },
    {
        id:8,
        w_member_type:"Creator",
        w_member_name:"Hong**",
        w_member_email:"abc@gmail.com",
        w_member_reason:"No service the user wants",
        w_member_by:"User",
        w_member_log_sign_date:"YYYY-MM-DD HH:MM YYYY-MM-DD HH:MM",
    },
    {
        id:9,
        w_member_type:"Creator",
        w_member_name:"Hong**",
        w_member_email:"abc@gmail.com",
        w_member_reason:"No service the user wants",
        w_member_by:"User",
        w_member_log_sign_date:"YYYY-MM-DD HH:MM YYYY-MM-DD HH:MM",
    },
    {
        id:10,
        w_member_type:"Creator",
        w_member_name:"Hong**",
        w_member_email:"abc@gmail.com",
        w_member_reason:"No service the user wants",
        w_member_by:"User",
        w_member_log_sign_date:"YYYY-MM-DD HH:MM YYYY-MM-DD HH:MM",
    },
   
    
  ];

const columns = [
  {
    dataField: "id",
    text: "No",
    
  },
  {
    dataField: "w_member_type",
    text: "User Type",
   
  },
  {
    dataField: "w_member_name",
    text: "Name",
    formatter: priceFormatter,
   
  },
  {
    dataField: "w_member_email",
    text: "Email",
   
  },
  {
    dataField: "w_member_reason",
    text: "Reason for withdrawal",
   
  },
  {
    dataField: "w_member_by",
    text: "Withdrawal by",
  },
  {
    dataField: "w_member_log_sign_date",
    text: "Withdrawal date/Sign up date",
   
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
      text: 'All', value: products.length
    }] 
  };
 
  return (
    <>
    <div className="py-2 total-results">    
    <h5 className="title-color font-weight-bold">Total <span className="span-color-pink"> 100 </span> Results</h5>
  </div>
    <div className="App">
     
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        pagination={paginationFactory(options)}
      />
    </div>
    </>
  );
}



