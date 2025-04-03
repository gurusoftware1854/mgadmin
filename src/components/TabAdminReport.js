import React, { useState } from "react";
import DataTable from "react-data-table-component";

const OnSaleProducts = ({ transaction }) => {
  const [searchInput, setSearchInput] = useState("");

  const columns = [
    {
      name: "User ID",
      selector: (row) => row.userid, // Correct selector
      sortable: true,
    },
    {
      name: "Transaction Type",
      selector: (row) => row.transaction_type, // Correct selector
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.amount, // Correct selector
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.transaction_date, // Correct selector
      sortable: true,
    },
  ];

  // Filter transactions based on search input
  const filteredData = transaction?.filter((item) =>
    item.transaction_type?.toLowerCase().includes(searchInput.toLowerCase())
  ) || [];

  return (
    <div>
      

      {/* DataTable */}
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 30]}
        highlightOnHover
      />
    </div>
  );
};


const TabAdminReport = ({ transaction }) => {



  return (
    <div className="mt-5">
      <div className="tabs flex flex-col">
        <div className="tab-content pt-4">
          <OnSaleProducts transaction={transaction} />
        </div>
      </div>
    </div>
  );
};

export default TabAdminReport;
