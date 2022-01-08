
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import  { useHistory } from 'react-router-dom'
import Buttons from "../../../common/Buttons";
    
export default function StelaStationResult() {
  const history = useHistory();
  const [state ] = useState({
    // const [state, setState ] = useState({
    msourcestatus: '',
    msourcetrack:'',
    order:'',
    })

    const [order, setOrder] = useState()
    
    const handleChange = (e) => {
        setOrder(e.target.value)
    };

    useEffect(() => {
        console.log("state",state);
    }, [state])
    
    useEffect(() => {
        console.log("order",order);
    }, [order])

    const linkFollow = (cell, row, rowIndex, formatExtraData) => {
      return (
          <Buttons
          type="submit"
          children ="Manage"
          styleClass="rounded-0 bg-custom-black "
          handleClick={() => StationManageBtn(row)}
          />
      );
    }

    const inputsFormater = (cell, row, rowIndex, formatExtraData) => {
        return (
            <>
            <input 
                name="order" 
                value={order} 
                placeholder="Enter Order Number" 
                type="number" 
                className="custom-input custom-height form-control mb-0 order-input"
                onChange={handleChange}
            />

            {/* <InputField 
            name="order" 
            value={order} 
            placeholder="Enter Order Number" 
            type="text" 
            InputstyleClass="custom-input mb-0"
            onChange={handleChange}
           
             /> */}

             </>
        );
      }

    const StationManageBtn = (row) =>{
      console.log("row",row);
      history.push('/stelastationreg');
        
    }

    const StationlistRegBtn = () =>{
      history.push('/stelastationreg');
    }

    const SaveOrderBtn = () =>{
        console.log("hi");
    }

  const play_data = [
    { 
        id: 1, 
        station_play:"Best Pops 2020",
        station_Regdate:"YYYY-MM-DD HH:MM ",
       
    },
    { 
        id: 2, 
        station_play:"Best Pops 2020 Best Pops 2020 Best Pops 2020 Best Pops 2020 Best Pops 2020 Best Pops 2020",
        station_Regdate:"YYYY-MM-DD HH:MM ",
       
    },
  ];

const play_head = [
  {
    dataField: "id",
    text: "No",
  },
  {
    dataField: "station_play",
    text: "Playlist",
  },
  {
    dataField: "station_order",
    text: "Order",
    formatter: inputsFormater,
  },
  {
    dataField: "station_Regdate",
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
         <div><h5 className="title-color font-weight-bold">Total <span className="span-color-pink"> 2 </span> Results</h5></div>
         <div className="reg-memberbtn">
             <Buttons
                type="submit"                    
                children ="Save order"
                styleClass="rounded-0 bg-custom-black mr-3"
                handleClick={SaveOrderBtn}
            />
            <Buttons
                type="submit"                    
                children ="Register"
                styleClass="rounded-0 bg-custom-black"
                handleClick={StationlistRegBtn}
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



