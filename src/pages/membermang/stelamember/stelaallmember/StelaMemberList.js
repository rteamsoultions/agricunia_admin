// import React from 'react'
// import  { useHistory } from 'react-router-dom'
// import { Col, Row } from 'react-bootstrap'


// import Buttons from '../../../../common/Buttons';
// import SelectOption from '../../../../common/SelectOption';

// function StelaMemberList() {

//     const viewMore = () => {

//     }

//     const handleDropdown = () =>{

//     }

//     const history = useHistory();

//     const DetailProfile = () =>{
//         history.push('/creatorprofile');
        
//     }

// return (
    
// <>
//     <div className="py-2 total-results">    
//         <h5 className="title-color font-weight-bold">Total <span className="span-color-pink"> 100 </span> Results</h5>
//     </div>

//     <div className="overflow-table">
//         <table class="dashtable  mt-3 custom-border-light">
//             <tr>
//                 <th>No</th>
//                 <th>User Type</th>
//                 <th>Name</th>
//                 <th>Company Name</th>
//                 <th>Country</th>
//                 <th>Email</th>
//                 <th className="custom-mob-th">Mobile No.</th>
//                 <th>Sign up date/Last Log-in</th>
//                 <th className="custom-manage-btn">Manage</th>
//             </tr>
           
//             <tr>
//                 <td>100</td>
//                 <td>Creator</td>
//                 <td><span className="span-color-pink font-weight-bold">Hong Gildong</span></td>
//                 <td>-</td>
//                 <td>Republic of Korea</td>
//                 <td>abc@gmail.com</td>
//                 <td>01012341234</td>
//                 <td>YYYY-MM-DD HH:MM
//                 <br/>
//                     YYYY-MM-DD HH:MM
//                 </td>
//                 <td>
//                     <Buttons
//                         type="submit"
//                         children ="Manage"
//                         styleClass="rounded-0 bg-custom-black"
//                         handleClick={DetailProfile}
//                     />
//                 </td>
//             </tr>

            


//         </table>
//     </div>

//     <Row className="mt-5 pagination-btn">
//         <Col lg={3}>
//            <p className="title-color font-weight-bold"><span className="span-color-pink"> 1 </span> of 84 pages</p>
//         </Col>
//         <Col lg={6}>
//           <div className="text-center">
//             <Buttons
//                 type="submit"
//                 children ="<<"
//                 styleClass="rounded-0 arrrow-pagination"
//                 handleClick={viewMore}
//             />
//             <Buttons
//                 type="submit"
//                 children ="<"
//                 styleClass="rounded-0 arrrow-pagination"
//                 handleClick={viewMore}
//             />
//             <Buttons
//                 type="submit"
//                 children ="1"
//                 styleClass="rounded-0 number-pagination"
//                 handleClick={viewMore}
//             />
//             <Buttons
//                 type="submit"
//                 children ="2"
//                 styleClass="rounded-0 number-pagination"
//                 handleClick={viewMore}
//             />
//             <Buttons
//                 type="submit"
//                 children ="3"
//                 styleClass="rounded-0 number-pagination"
//                 handleClick={viewMore}
//             />
//             <Buttons
//                 type="submit"
//                 children ="4"
//                 styleClass="rounded-0 number-pagination"
//                 handleClick={viewMore}
//             />
//             <Buttons
//                 type="submit"
//                 children ="5"
//                 styleClass="rounded-0 number-pagination"
//                 handleClick={viewMore}
//             />
//             <Buttons
//                 type="submit"
//                 children ="6"
//                 styleClass="rounded-0 number-pagination"
//                 handleClick={viewMore}
//             />
//             <Buttons
//                 type="submit"
//                 children ="7"
//                 styleClass="rounded-0 number-pagination"
//                 handleClick={viewMore}
//             />
//             <Buttons
//                 type="submit"
//                 children ="8"
//                 styleClass="rounded-0 number-pagination"
//                 handleClick={viewMore}
//             />
//             <Buttons
//                 type="submit"
//                 children ="9"
//                 styleClass="rounded-0 number-pagination"
//                 handleClick={viewMore}
//             />
//              <Buttons
//                 type="submit"
//                 children ="10"
//                 styleClass="rounded-0 number-pagination"
//                 handleClick={viewMore}
//             />
//              <Buttons
//                 type="submit"
//                 children =">"
//                 styleClass="rounded-0 arrrow-pagination"
//                 handleClick={viewMore}
//             />
//              <Buttons
//                 type="submit"
//                 children =">>"
//                 styleClass="rounded-0 arrrow-pagination"
//                 handleClick={viewMore}
//             />

//           </div>
//         </Col>
//         <Col lg={2} className="ml-lg-auto">
//             <SelectOption data={[ {value: 1, label: '20 resultes' }, {value: 2, label: '50 resultes' }, {value: 3, label: '100 resultes' }, {value: 4, label: '200 resultes' }, ]} onChange={handleDropdown} name="selectoption" styleClass="drop-down-margin"  defauultvalue="10 resultes" />
//         </Col>
//     </Row>


// </>
// )
// }

// export default StelaMemberList




import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Buttons from '../../../../common/Buttons';
import  { useHistory } from 'react-router-dom'
    
export default function StelaMemberList() {
  const history = useHistory();

    const linkFollow = (cell, row, rowIndex, formatExtraData) => {
      return (
          <Buttons
          type="submit"
          children ="Manage"
          styleClass="rounded-0 bg-custom-black"
          handleClick={() => DetailProfile(row)}
          />
      );
    }

    const DetailProfile = (row) =>{
      console.log("row",row);
      history.push('/creatorprofile');
    }

    function priceFormatter(cell, row) {
    
      return (
        <strong style={ { color: '#B931B8' } }>{ cell }</strong>
      );
    }

  const products = [
    { id: 1, user_type: "Business", 
    user_name: "Hong Gildong", 
    company_name: "-" ,
    user_country: "Republic of Korea", 
    user_email: "abc@gmail.com", 
    user_mobile:"01012341234",
    user_log_sign_date:"YYYY-MM-DD HH:MM YYYY-MM-DD HH:MM",
    },

    
  ];

const columns = [
  {
    dataField: "id",
    text: "No",
    
  },
  {
    dataField: "user_type",
    text: "User Type",
    
   
  },
  {
    dataField: "user_name",
    text: "Name",
    formatter: priceFormatter,
   
  },
  {
    dataField: "company_name",
    text: "Company Name",
   
  },
  {
    dataField: "user_country",
    text: "Country",
   
  },
  {
    dataField: "user_email",
    text: "Email",
   
  },
  {
    dataField: "user_mobile",
    text: "Mobile No.",
   
  },
  {
    dataField: "user_log_sign_date",
    text: "Sign up date/Last Log-in",
   
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



