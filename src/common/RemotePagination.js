import { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';

// interface Props {
//   data: UserListData[] | CategoryListData[] | BlogListData[] | PortfolioListData[] | teamMemberListData[] | faqListData[] | ServicesListData[] | careerReqListData[] | careerReqestData[] | TechListData[] | ClientListData[];
//   columns: any
//   onTableChange: (page?: any, sizePerPage?: any) => void;
//   totalSize: number;
//   pagesizedropdownflag: boolean;
//   selectRow: any;
//   rowEvents: any;
//   pageName: any;
//   showCheckbox: boolean;
// }

const RemotePagination = ({ data, columns, onTableChange, totalSize, pagesizedropdownflag, selectRow, showCheckbox }) => {
  const [page, setPage] = useState(1);
  const [sizePerPage, setSizePerPage] = useState(10);
  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
    onTableChange(pageNumber, sizePerPage);
  }
  const onSizePerPageChange = (sizeperpage) => {
    setSizePerPage(sizeperpage)
    setPage(1);
    onTableChange(1, sizeperpage);
  }

  return (
    <div>
      {showCheckbox ?

        <PaginationProvider
          pagination={
            paginationFactory({
              custom: true,
              // firstPageText:<img src="./img/firstarrow.svg"/>,
              // lastPageText:<img src="./img/lastarrow.svg"/>,
              // prePageText: <img src="./img/nextarrow.svg"/>,
              // nextPageText: <img src="./img/prevarrow.svg"/>,

              page,
              sizePerPage,
              totalSize,
              sizePerPageList: [{
                text: '10', value: 10
              }, {
                text: '20', value: 20
              }, {
                text: '50', value: 50
              }, {
                text: '100', value: 100
              }
                // , {
                //   text: 'All', value: totalSize
                // }
              ],
              alwaysShowAllBtns: true,
            })
          }
        >
          {
            ({
              paginationProps,
              paginationTableProps
            }) => (
              <div>
                <BootstrapTable
                  {...paginationTableProps}

                  remote
                  keyField="id"
                  data={data}
                  columns={columns}
                  onTableChange={() => onTableChange(page, sizePerPage)}
                  selectRow={selectRow}
                />
                <div className="paginationcustom">
                  <PaginationListStandalone
                    {...paginationProps}
                    onPageChange={(p) => onPageChange(p)}
                  />
                  {totalSize > 0 && pagesizedropdownflag &&
                    <SizePerPageDropdownStandalone
                      {...paginationProps}
                      onSizePerPageChange={(e) => onSizePerPageChange(e)}
                    />
                  }

                </div>
              </div>
            )
          }
        </PaginationProvider>

        :


        <PaginationProvider
          pagination={
            paginationFactory({
              custom: true,
              // firstPageText:<img src="./img/firstarrow.svg"/>,
              // lastPageText:<img src="./img/lastarrow.svg"/>,
              // prePageText: <img src="./img/nextarrow.svg"/>,
              // nextPageText: <img src="./img/prevarrow.svg"/>,

              page,
              sizePerPage,
              totalSize,
              sizePerPageList: [{
                text: '10', value: 10
              }, {
                text: '20', value: 20
              }, {
                text: '50', value: 50
              }, {
                text: '100', value: 100
              }
                // , {
                //   text: 'All', value: totalSize
                // }
              ],
              alwaysShowAllBtns: true,
            })
          }
        >
          {
            ({
              paginationProps,
              paginationTableProps
            }) => (
              <div>
                <BootstrapTable
                  {...paginationTableProps}

                  remote
                  keyField="id"
                  data={data}
                  columns={columns}
                  onTableChange={() => onTableChange(page, sizePerPage)}
                // selectRow={selectRow}
                />
                <div className="paginationcustom">
                  <PaginationListStandalone
                    {...paginationProps}
                    onPageChange={(p) => onPageChange(p)}
                  />
                  {totalSize > 0 && pagesizedropdownflag &&
                    <SizePerPageDropdownStandalone
                      {...paginationProps}
                      onSizePerPageChange={(e) => onSizePerPageChange(e)}
                    />
                  }

                </div>
              </div>
            )
          }
        </PaginationProvider>
      }


    </div>
  )
};

export default RemotePagination;