import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { motion } from "framer-motion";
import { main, rupee } from "../const";

const OnSaleProducts = ({ transaction }) => {
    const [searchInput, setSearchInput] = useState("");
    console.log(transaction)

    const deleteFunction = (id, trans_id) => {
        if (window.confirm("Are you sure you want to delete this transaction?")) {
            console.log("Deleting transaction:", { id, trans_id });
            // Call your API or function to delete the record
        }
    };

    const columns = [
        { name: "User ID", selector: (row) => row.userid, sortable: true },
        { name: "Transaction Type", selector: (row) => row.transaction_type, sortable: true },
        { name: "Amount", selector: (row) => row.amount, sortable: true },
        { name: "Bonus", selector: (row) => row.bonus, sortable: true },
        { name: "Total", selector: (row) => row.total, sortable: true },
        { name: "Payment Mode", selector: (row) => row.p_mode, sortable: true },
        { name: "Date", selector: (row) => row.transaction_date, sortable: true },
        {
            name: "Actions",
            cell: (row) => (
                <button onClick={() => deleteFunction(row.id, row.trans_id)} className="delete-btn" style={{ backgroundColor: main, padding: 10, color: "#fff" }}>
                    DELETE
                </button>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
    ];

    const filteredData = transaction?.filter((item) =>
        item.transaction_type?.toLowerCase().includes(searchInput.toLowerCase())
    ) || [];

    return (
        <div>
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

const Loans = ({ loans }) => {
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    console.log(loans)
    // if (!loans?.loan_details || loans.loan_details.length === 0) {
    //     return <p className="text-gray-500">No loan records found.</p>;
    // }

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            {/* <h2 className="text-lg font-semibold mb-3">Loans List</h2> */}
            <ul className="divide-y divide-gray-200">
                {loans.map((item, index) => (
                    <li
                        key={index}
                        className="p-3 cursor-pointer hover:bg-gray-100 transition"
                        onClick={() => setSelectedTransaction(item)}
                    >
                        <p className="text-sm font-medium">{item.loan_details.remain_month == 0 ? "Complete" : "Continue"}</p>
                        <p className="text-sm text-gray-600">Amount: {rupee}{item.loan_details.loan_amount}</p>
                        <p className="text-sm text-gray-500">EMI: {item.loan_details.emi_amount}</p>
                        <p className="text-sm text-gray-500">Duration: {item.loan_details.loan_duration}</p>
                        <p className="text-sm text-gray-500">Paid Month: {item.loan_details.paid_month}</p>
                        <p className="text-sm text-gray-500">Paid Amount: {item.loan_details.paid_amount}</p>
                    </li>
                ))}
            </ul>


        </div>
    );
};

const Tabs = ({ transaction, loans, account }) => {
    const [activeTab, setActiveTab] = useState("tabHome");
    console.log(account)
    return (
        <div className="mt-5">
            <div className="px-4 pb-4 sm:px-5">
                <div className="w-full">
                    <div class="col-span-12 sm:col-span-6">
                        <div class="grid grid-cols-1 gap-4 sm:gap-5 sm:px-5 lg:grid-cols-3">
                            <div
                                class="rounded-lg border border-slate-150 p-4 dark:border-navy-600">
                                <div class="flex justify-between">
                                    <div>
                                        <span class="text-xs">{rupee}</span>
                                        <span
                                            class="text-2xl font-medium text-slate-700 dark:text-navy-100"
                                        >{account.Total_installment}</span>

                                    </div>
                                    <p class="text-xs-plus">Total Installment</p>
                                </div>
                            </div>
                            <div
                                class="rounded-lg border border-slate-150 p-4 dark:border-navy-600">
                                <div class="flex justify-between">
                                    <div>
                                        <span class="text-xs">{rupee}</span>
                                        <span
                                            class="text-2xl font-medium text-slate-700 dark:text-navy-100"
                                        >{account.total_bonus}</span>

                                    </div>
                                    <p class="text-xs-plus">Total Bonus</p>
                                </div>
                            </div>
                            <div class="rounded-lg border border-slate-150 p-4 dark:border-navy-600">
                                <div class="flex justify-between">
                                    <div>
                                        <span class="text-xs">{rupee}</span>
                                        <span
                                            class="text-2xl font-medium text-slate-700 dark:text-navy-100"
                                        >{account.withdraw}</span>

                                    </div>
                                    <p class="text-xs-plus">Total withdraw</p>
                                </div>
                            </div>
                            {account.remain_loans &&
                                <div class="rounded-lg border border-slate-150 p-4 dark:border-navy-600">
                                    <div class="flex justify-between">
                                        <div>
                                            <span class="text-xs">{rupee}</span>
                                            <span
                                                class="text-2xl font-medium text-slate-700 dark:text-navy-100"
                                            >{account.remain_loans}</span
                                            >

                                        </div>
                                        <p class="text-xs-plus">Remain Loan</p>
                                    </div>
                                </div>}

                        </div>

                    </div>

                    <div className="mt-5">
                        <div className="tabs flex flex-col">
                            <div className="is-scrollbar-hidden overflow-x-auto rounded-lg bg-slate-200 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
                                <div className="tabs-list flex px-1.5 py-1">
                                    <button
                                        onClick={() => setActiveTab("tabHome")}
                                        className={`btn shrink-0 flex-1 px-3 py-1.5 font-medium ${activeTab === "tabHome"
                                            ? "bg-white shadow-sm dark:bg-navy-500 dark:text-navy-100"
                                            : "hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                                            }`}
                                    >
                                        Transactions
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("tabProfile")}
                                        className={`btn shrink-0 flex-1 px-3 py-1.5 font-medium ${activeTab === "tabProfile"
                                            ? "bg-white shadow-sm dark:bg-navy-500 dark:text-navy-100"
                                            : "hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                                            }`}
                                    >
                                        Loans
                                    </button>
                                </div>
                            </div>

                            <div className="tab-content pt-4">
                                {activeTab === "tabHome" && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <OnSaleProducts transaction={transaction} />
                                    </motion.div>
                                )}
                                {activeTab === "tabProfile" && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Loans loans={loans} />
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
