// import React from "react";
// import { useTable, usePagination, useSortBy } from "react-table";


// function Table({ columns, data }) {
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page,
//     canPreviousPage,
//     canNextPage,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     state: { pageIndex, pageSize }
//   } = useTable(
//     {
//       columns,
//       data,
     
//       initialState: { pageSize: 10 },
     

//     },
//     useSortBy, usePagination  
//   );


//   // Render the UI for your table
//   return (
//     <>
//       <table
//         {...getTableProps()}
//         border={1}
//         style={{ borderCollapse: "collapse", width: "100%" }}
//       >
//         <thead>
//           {headerGroups.map((group) => (
//             <tr {...group.getHeaderGroupProps()}>
//               {group.headers.map((column) => (
//                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}<span>{
//                 column.isSorted
//                     ? column.isSortedDesc
//                           ? ' 🔽'
//                           : ' 🔼'
//                     : ''
//             }</span></th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
      
//       </table>
//       <div className="pagination">
//         <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//           {"<<"}
//         </button>{" "}
//         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//           {"<"}
//         </button>{" "}
//         <button onClick={() => nextPage()} disabled={!canNextPage}>
//           {">"}
//         </button>{" "}
//         <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//           {">>"}
//         </button>{" "}
//         <span>
//           Page{" "}
//           <strong>
//             {pageIndex + 1} of {pageCount}
//           </strong>{" "}
//         </span>
//         <span>
//           | Go to page:{" "}
//           <input
//             type="number"
//             defaultValue={pageIndex + 1}
//             onChange={(e) => {
//               const page = e.target.value ? Number(e.target.value) - 1 : 0;
//               gotoPage(page);
//             }}
//             style={{ width: "100px" }}
//           />
//         </span>{" "}
//         <select
//           value={pageSize}
//           onChange={(e) => {
//             setPageSize(Number(e.target.value));
//           }}
//         >
//           {[10, 20, 30, 40, 50].map((pageSize) => (
//             <option key={pageSize} value={pageSize}>
//               Show {pageSize}
//             </option>
//           ))}
//         </select>
//       </div>
//     </>
//   );
// }

// function Demopage() {
    
//   const columns = React.useMemo(
//     () => [
      
//           {
//             Header: "Sub Heading 1a",
//             accessor: "firstcolumn",
//             disableSortBy: true,
            
            
//           },
//           {
//             Header: "Sub Heading 1b",
//             accessor: "secondcolumn",
//             disableSortBy: true,
            
        
            
//          },
//         {
//             Header: "Heading 2",
//             accessor: "thirdcolumn",
            
            
           
//         }, 
//     ],
//     []
//   );

//   const data = React.useMemo(
//     () => [
//       {
//         firstcolumn: "Row 1 Column 1",
//         secondcolumn: "Row 1 Column 2",
//         thirdcolumn: "Row 1 Column 3"
//       },
//       {
//         firstcolumn: "Row 2 Column 1",
//         secondcolumn: "Row 2 Column 2",
//         thirdcolumn: "Row 2 Column 3"
//       },
//       {
//         firstcolumn: "Row 3 Column 1",
//         secondcolumn: "Row 3 Column 2",
//         thirdcolumn: "Row 3 Column 3"
//       },
//       {
//         firstcolumn: "Row 4 Column 1",
//         secondcolumn: "Row 4 Column 2",
//         thirdcolumn: "Row 4 Column 3"
//       },
//       {
//         firstcolumn: "Row 5 Column 1",
//         secondcolumn: "Row 5 Column 2",
//         thirdcolumn: "Row 5 Column 3"
//       },
//       {
//         firstcolumn: "Row 6 Column 1",
//         secondcolumn: "Row 6 Column 2",
//         thirdcolumn: "Row 6 Column 3"
//       },
//       {
//         firstcolumn: "Row 7 Column 1",
//         secondcolumn: "Row 7 Column 2",
//         thirdcolumn: "Row 7 Column 3"
//       },
//       {
//         firstcolumn: "Row 8 Column 1",
//         secondcolumn: "Row 8 Column 2",
//         thirdcolumn: "Row 8 Column 3"
//       },
//       {
//         firstcolumn: "Row 9 Column 1",
//         secondcolumn: "Row 9 Column 2",
//         thirdcolumn: "Row 9 Column 3"
//       },
//       {
//         firstcolumn: "Row 10 Column 1",
//         secondcolumn: "Row 10 Column 2",
//         thirdcolumn: "Row 10 Column 3"
//       },
//       {
//         firstcolumn: "Row 11 Column 1",
//         secondcolumn: "Row 11 Column 2",
//         thirdcolumn: "Row 11 Column 3"
//       },
//       {
//         firstcolumn: "Row 12 Column 1",
//         secondcolumn: "Row 12 Column 2",
//         thirdcolumn: "Row 12 Column 3"
//       }
      
//     ],
//     []
//   );

//   return <Table columns={columns} data={data} />;
// }

// export default Demopage;


import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

export const productsGenerator = quantity => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
  }
  return items;
};

// const products = productsGenerator(100);



const products = [
  { id: 0, name: "Item name 0", price: 2100 },
  { id: 1, name: "Item name 1", price: 2101 },
  { id: 2, name: "Item name 2", price: 2102 },
  { id: 3, name: "Item name 3", price: 2103 },
];

const columns = [
  {
    dataField: "id",
    text: "Product ID",
    sort: true
  },
  {
    dataField: "name",
    text: "Product Name",
    sort: true
  },
  {
    dataField: "price",
    text: "Product Price"
  }
];

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
  );


  const options = {
    // custom: true,
    // totalSize: products.length,
    paginationSize: 10,
    pageStartIndex: 1,
    alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    // firstPageText: 'First',
    // prePageText: 'Back',
    // nextPageText: 'Next',
    // lastPageText: 'Last',
    // nextPageTitle: 'First page',
    // prePageTitle: 'Pre page',
    // firstPageTitle: 'Next page',
    // lastPageTitle: 'Last page',
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
  

export default function Demopage() {
  return (
    <div className="App">
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        pagination={paginationFactory(options)}
      />
    </div>
  );
}
