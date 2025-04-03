import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import apiClient, { main } from "../const";
import { baseUrl } from "../const";
import { COLORS } from "../utils/AppColors";

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const TransactionsModal = ({ item, page }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedInstallment, setSelectedInstallment] = useState(null);

  const openModal = (installment) => {
    setSelectedInstallment(installment);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setSelectedInstallment(null);
    setIsModalVisible(false);
  };

  const deleteTransaction = (userId, status) => {
    alert(
      "Confirm Deletion",
      "Are you sure you want to delete this transaction?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          style: "destructive",
          onPress: async () => {
            try {
              await apiClient.post(
                `${baseUrl}/${page}/manage_transaction.php`,
                {
                  userId,
                  status,
                }
              );
              alert("Success", "Transaction deleted successfully");
              // fetchUsers();
            } catch (error) {
              console.error("Error deleting transaction:", error);
              alert("Error", "Unable to delete transaction");
            }
          },
        },
      ]
    );
  };

  return (
    <>
      <div
        style={{
          padding: 10,
          marginBottom: 10,
          backgroundColor: COLORS.white,
          borderColor: COLORS.Gray_CBCBCB,
          marginHorizontal: 5,
          marginTop: 2,
          borderWidth: 1,
          borderRadius: 8,
          elevation: 5,
          gap: 2,
        }}
      >
        <div>
          <div>
            {item.transaction_type === "REGULAR" ||
            item.transaction_type === "LATEJOIN" ||
            item.transaction_type === "Withdraw" ? (
              <>
                {item.username && <p>Username: {item.username}</p>}
                <p>{item.transaction_type}</p>
                <p>Amount: {item.amount}</p>
                <p>Date: {item.transaction_date}</p>
                <p>Payment Mode: {item.p_mode}</p>
                {item.bonus && (
                  <>
                    <p>Bonus: {item.bonus}</p>
                    {/* <p >GST: {item.gst}</p> */}
                    <p>Total: {item.total}</p>
                  </>
                )}
              </>
            ) : item.transaction_type === "1" ? (
              <>
                <p>Username : {item.username}</p>
                <p>Gram: {item.transaction_type}</p>
                <p>Paid Amount: {item.amount}</p>
                <p>Date: {item.transaction_date}</p>
                <p>Payment Mode: {item.p_mode}</p>
              </>
            ) : (
              <>
                <p>{item.p_mode === "SELF" ? "INTEREST" : "EMI"}</p>
                {item.p_mode !== "SELF" && <p>Amount: {item.emi_amount}</p>}
                {item.int_percentage != "0" && item.int_percentage != null && (
                  <p>Interest percent: {item.int_percentage} %</p>
                )}
                {item.int_amount != "0" && <p>Interest: {item.amount}</p>}
                <p>Paid Amount: {item.total}</p>
                {item.date && <p>Date: {item.date}</p>}
                <p>Payment Mode: {item.p_mode}</p>
              </>
            )}
          </div>
          <div
            style={{
              // flex: 1,
              alignContent: "center",
              justifyContent: "space-around",
            }}
          >
            {page !== "user" && page == "ab" && (
              <div>
                <button onPress={() => deleteTransaction(item.id, 2)}>
                  <FontAwesomeIcon
                    name="trash-bin"
                    size={25}
                    color={main}
                    // style={styles.icon}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            {selectedInstallment && (
              <>
                <p style={styles.modalTitle}>
                  Installment ID: {selectedInstallment.id}
                </p>
                <p>Amount: {selectedInstallment.amount}</p>
                <p>
                  Date: {formatDate(selectedInstallment.transaction_date)}
                </p>
                <p>Payment Mode: {selectedInstallment.p_mode}</p>

                <button
                  style={styles.closeButton}
                  onPress={closeModal}
                >
                  <p style={styles.closeButtonText}>Close</p>
                </button>
              </>
            )}
          </div>
        </div>
      </Modal> */}
    </>
  );
};

export default TransactionsModal;
