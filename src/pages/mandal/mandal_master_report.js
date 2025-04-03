import React, { useEffect, useState } from "react";
import Mandal_user_spinner from "../../components/mandal_user_spinner";
import DatePickerComp from "../../components/datePicker";
import { baseUrl } from "../../const";
import apiClient from "../../const";
import TabAdminReport from "../../components/TabAdminReport.js";
import HeaderName from "../../components/HeaderName.js";
import ExportExcel from "../../components/exportExcel.js";

const Mandal_master_report = () => {
  const [selectedUser, setSelectedUser] = useState({ id: "", name: "" });
  const [dueDate, setDueDate] = useState("");
  const [endDueDate, setEndDueDate] = useState("");
  const [transaction, setTransaction] = useState([]);
  const [loans, setLoans] = useState([]);
  const [account, setAccount] = useState([]);

  useEffect(() => {
    fetchData();
    console.log(selectedUser)
  }, [selectedUser, dueDate, endDueDate]);

  const fetchData = async () => {
    const requestData = {};

    if (selectedUser.id) {
      requestData.card = selectedUser.id;
    }
    if (dueDate) {
      requestData.start_date = dueDate;
    }
    if (endDueDate) {
      requestData.end_date = endDueDate;
    }

    try {
      const response = await apiClient.post(
        `${baseUrl}/mandal/admin_mandal_report.php`,
        requestData
      );

      const transactions = response.data.trans_result || [];
      const loansData = response.data.mandal_loans_result || [];
      const accountsData = response.data.main_result || [];

      let filteredTransactions = transactions;

      // Only filter if dueDate or endDueDate is set
      if (dueDate || endDueDate || selectedUser.id) {
        filteredTransactions = transactions.filter((item) => {
          console.log(selectedUser.id, "---", item.userid)
          const transactionDate = new Date(item.transaction_date);
          const start = dueDate ? new Date(dueDate) : null;
          const end = endDueDate ? new Date(endDueDate) : null;
          const id = item.userid;
          if (start && end) {
            return transactionDate >= start && transactionDate <= end;
          } else if (start) {
            return transactionDate >= start;
          } else if (end) {
            return transactionDate <= end;
          } else if (selectedUser) {
            return id == selectedUser.id;
          }
          return true; // Return all if no filters applied
        });
      }

      setTransaction(filteredTransactions);
      setLoans(loansData);
      setAccount(accountsData);

      console.log("Filtered Transactions:", filteredTransactions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <main
        className="main-content card w-full px-[var(--margin-x)] pb-8"
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
      >
        <HeaderName mainname={"Mandal"} title={"Master Report"} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Mandal_user_spinner
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
          userName="John Doe"
          fromDate={dueDate || "2023-01-01"}
          toDate={endDueDate || "2023-12-31"}
          title="Mandal Report"
        />
        <TabAdminReport transaction={transaction} loans={loans} />
      </main>
    </>
  );
};

export default Mandal_master_report;
