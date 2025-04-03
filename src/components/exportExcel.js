import React from "react";
import * as XLSX from "xlsx";

const ExportExcel = ({ data, userName, fromDate, toDate, title }) => {
  const jsonData = data;

  const headerMap = {
    transaction_date: "Date",
    userid: "Mandal Card No.",
    transaction_type: "Type",
    amount: "Amount",
    p_mode: "Payment Mode",
  };

  // Function to export the data as an Excel file
  const exportToExcel = () => {
    // Format data according to header map
    const formattedData = jsonData.map((item) => {
      const formattedItem = {};
      Object.keys(headerMap).forEach((col) => {
        formattedItem[headerMap[col]] = item[col];
      });
      return formattedItem;
    });

    // Prepare filter metadata with dynamic values
    const filterData = [
      [ "", "", "Mandal Master Report",""],
      [
        `Date: ${fromDate} - ${toDate}`,
        "",
        "",
        "Mandal User:",
        ` ${userName}`,
      ],
      [""], // Empty row for spacing
    ];

    // Create filter worksheet from filterData (metadata)
    const filterWs = XLSX.utils.aoa_to_sheet(filterData);

    // Merge first 5 cells in the first row (for title)
    filterWs["merges"] = [
      XLSX.utils.decode_range("A1:D1"), // Merge A1 to D1 (for title)
      XLSX.utils.decode_range("A2:D2"), // Merge A2 to D2 (for date and user)
    ];

    // Center align filter metadata
    filterWs["A1"].s = { alignment: { horizontal: "center" } };
    filterWs["A2"].s = { alignment: { horizontal: "center" } };

    // Create a new worksheet from the formatted data (transaction data)
    const dataWs = XLSX.utils.json_to_sheet(formattedData, { header: Object.values(headerMap) });

    // Add headers and set column widths for data
    const columns = Object.values(headerMap);
    XLSX.utils.sheet_add_aoa(dataWs, [columns], { origin: "A1" });
    dataWs["!cols"] = columns.map(() => ({ width: 20 })); // Set column widths

    // Combine both filter metadata and transaction data into one worksheet
    const combinedData = XLSX.utils.sheet_to_json(filterWs, { header: 1 }).concat(
      XLSX.utils.sheet_to_json(dataWs, { header: 1 })
    );
    const combinedWs = XLSX.utils.aoa_to_sheet(combinedData);

    // Create a new workbook and append both sheets
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, combinedWs, "Report");

    // Write the workbook to a file
    XLSX.writeFile(wb,title+".xlsx");
  };

  return (
    <div className="flex justify-end w-full">
    <button
      className="btn h-9 px-4 bg-primary text-white hover:bg-primary-focus 
                 focus:bg-primary-focus active:bg-primary-focus/90 
                 dark:bg-accent dark:hover:bg-accent-focus 
                 dark:focus:bg-accent-focus dark:active:bg-accent/90"
      onClick={exportToExcel}
    >
      Export to Excel
    </button>
  </div>
  
  );
};

export default ExportExcel;
