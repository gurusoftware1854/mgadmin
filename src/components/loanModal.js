import React from "react";
import { useState } from "react";
import { useNavigation } from "react-router-dom";
import { COLORS } from "../utils/AppColors";
import { main } from "../const";

const LoanModal = ({ item }) => {
  console.log("loans", item);
  // const item = items.loan_details;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);

  // const {navigation} = useNavigation();

  const openModal = (loan) => {
    setSelectedLoan(loan);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedLoan(null);
  };

  return (
    <>
      {item.status != "0" && (
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
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ flex: 1 }}>
                Loan Amount : {item.loan_details.loan_amount}
              </p>
              <p style={{ flex: 1, textAlign: "right" }}>
                Interest Rate : {item.loan_details.interest_rate}
              </p>
            </div>
            <p>Loan Duration : {item.loan_details.loan_duration} months</p>
            {item.purpose && <p>Purpose : {item.loan_details.purpose} </p>}

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <button
              // onPress={() =>
              //   navigation.navigate("Loan Installments", {
              //     loanId: item.installments,
              //   })
              // }
              >
                Installments
              </button>
              <button onPress={() => openModal(item)}>
                Loan Details
              </button>
            </div>
          </div>

          {/* <modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={closeModal}
          >
            <div
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                  width: "80%",
                }}
              >
                {selectedLoan && (
                  <>
                     <p>
                      <p style={{ fontWeight: "bold" }}>Loan ID: </p>
                      {selectedLoan.id}
                    </p> 
                    {item.userid && (
                      <p>
                        <p style={{ fontWeight: "bold" }}>User ID: </p>
                        {selectedLoan.userid}
                      </p>
                    )}
                    <p>
                      <p style={{ fontWeight: "bold" }}>Loan Amount: </p>
                      {selectedLoan.loan_amount}
                    </p>
                    {selectedLoan.interest_rate != "0" && (
                      <p>
                        <p style={{ fontWeight: "bold" }}>Interest Rate:</p>
                        {selectedLoan.interest_rate}
                      </p>
                    )}
                    <p>
                      <p style={{ fontWeight: "bold" }}>Loan Duration: </p>
                      {selectedLoan.loan_duration} months
                    </p>
                    {/* <p>
                      <p style={{ fontWeight: "bold" }}>Status: </p>
                      {selectedLoan.status == 1 ? "Approved " : "Pending"}
                    </p> 
                    <p>
                      <p style={{ fontWeight: "bold" }}>Paid Amount: </p>
                      {selectedLoan.paid_amount}
                    </p>
                    <p>
                      <p style={{ fontWeight: "bold" }}>Remaining Amount: </p>
                      {selectedLoan.remain_amount}
                    </p>
                    <p>
                      <p style={{ fontWeight: "bold" }}>Remaining Months: </p>
                      {selectedLoan.remain_month}
                    </p>

                    
                    <button
                      style={{
                        marginTop: 20,
                        backgroundColor: main,
                        padding: 10,
                        borderRadius: 5,
                      }}
                      onPress={closeModal}
                    >
                      <p
                        style={{
                          color: "#fff",
                          textAlign: "center",
                          fontWeight: 400,
                        }}
                      >
                        Close
                      </p>
                    </button>
                  </>
                )}
              </div>
            </div>
          </modal> */}
        </>
      )}
    </>
  );
};

export default LoanModal;
