import React, { useEffect, useState } from "react";
import Sakhi_user_spinner from "../../components/sakhi_user_spinner.js";
import DatePickerComp from "../../components/datePicker.js";
import { baseUrl } from "../../const.js";
import apiClient from "../../const.js";
import TabAdminReport from "../../components/TabAdminReport.js";
import HeaderName from "../../components/HeaderName.js";
import ExportExcel from "../../components/exportExcel.js";
const Sakhi_master_report = () => {
  const [selectedUser, setSelectedUser] = useState({ id: "", name: "" });
  const [dueDate, setDueDate] = useState("");
  const [endDueDate, setEndDueDate] = useState("");
  const [transaction, setTransaction] = useState([]);
  const [loans, setLoans] = useState([]);
  const [openModal, setOpenModal] = useState([]);
  const [account, setAccount] = useState([]);

  useEffect(() => {
    console.log("Selected User ID:", selectedUser.id);
    apiClient
      .post(`${baseUrl}/sakhi/admin_sakhi_report.php`, {
        card: selectedUser.id,
      })
      .then((response) => {
        console.log(response.data);
        const transactions = response.data.trans_result || [];
        const loansData = response.data.sakhi_loans_result || [];
        const accountsData = response.data.main_result || [];

        // Filter transactions based on date range
        const filteredTransactions = transactions.filter((item) => {
          const transactionDate = new Date(item.transaction_date); // Assuming `item.date` is the date property
          const start = dueDate ? new Date(dueDate) : null;
          const end = endDueDate ? new Date(endDueDate) : null;

          if (start && end) {
            return transactionDate >= start && transactionDate <= end;
          } else if (start) {
            return transactionDate >= start;
          } else if (end) {
            return transactionDate <= end;
          }
          return true; // No filtering if no dates are set
        });

        setTransaction(filteredTransactions);
        setLoans(loansData);
        setAccount(accountsData);
        console.log("Filtered Transactions:", filteredTransactions);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedUser, dueDate, endDueDate]);

  return (
    <>
      <main
        className="main-content card w-full px-[var(--margin-x)] pb-8"
        style={{ display: "flex", flexDirection: "column" ,gap:12}}
      >
        <HeaderName mainname={"Sakhi"} title={"Master Report"} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Sakhi_user_spinner
            onSelect={(user) => setSelectedUser(user)}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />

          <DatePickerComp
            dueDate={dueDate}
            placeholder="Start Date"
            setDueDate={setDueDate}
          />
          <DatePickerComp
            dueDate={endDueDate}
            placeholder="End Date"
            setDueDate={setEndDueDate}
          />
        </div>
        <ExportExcel
          data={transaction}
          userName={selectedUser.name}
          fromDate={dueDate || "2023-01-01"}
          toDate={endDueDate || "2023-12-31"}
          title="Sakhi Report"
        />
        
          <TabAdminReport
            transaction={transaction}
            loans={loans}
            openModal={openModal}
          />
        
      </main>
    </>
   
  );
};

export default Sakhi_master_report;
