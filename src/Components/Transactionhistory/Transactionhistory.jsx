import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Transactionhistory.css";

export default function Transactionhistory() {
  const [type, setType] = useState("deposit");
  const [status, setStatus] = useState("pending"); // Start with pending

  // FULL DATA FOR ALL TYPES / STATUSES
  const data = {
    withdraw: {
      complete: [
        {
          method: "Jazzcash",
          amount: "120Rs",
          charge: "0Rs",
          afterCharge: "120PKR",
          number: "03090051799",
          account: "Sajid Ali",
          status: "success",
          date: "Sep 08 2024 09:53",
        },
        {
          method: "Easypaisa",
          amount: "500Rs",
          charge: "10Rs",
          afterCharge: "490PKR",
          number: "03120098765",
          account: "Bilal Ahmed",
          status: "success",
          date: "Aug 21 2024 12:15",
        },
        {
          method: "Bank Transfer",
          amount: "2000Rs",
          charge: "0Rs",
          afterCharge: "2000PKR",
          number: "NBP-123456",
          account: "Ahsan Khan",
          status: "success",
          date: "Jul 15 2024 14:10",
        },
      ],
      pending: [
        {
          method: "Jazzcash",
          amount: "300Rs",
          charge: "0Rs",
          afterCharge: "300PKR",
          number: "03151234567",
          account: "Ali Raza",
          status: "pending",
          date: "Aug 10 2024 08:45",
        },
        {
          method: "Easypaisa",
          amount: "750Rs",
          charge: "15Rs",
          afterCharge: "735PKR",
          number: "03085556666",
          account: "Naeem Akhtar",
          status: "pending",
          date: "Aug 05 2024 15:50",
        },
        {
          method: "Bank Transfer",
          amount: "1500Rs",
          charge: "0Rs",
          afterCharge: "1500PKR",
          number: "HBL-654321",
          account: "Hamza Tariq",
          status: "pending",
          date: "Jul 25 2024 11:20",
        },
      ],
      rejected: [
        {
          method: "Jazzcash",
          amount: "100Rs",
          charge: "0Rs",
          afterCharge: "100PKR",
          number: "03445554444",
          account: "Fahad Ali",
          status: "rejected",
          date: "Aug 01 2024 17:30",
        },
        {
          method: "Easypaisa",
          amount: "600Rs",
          charge: "10Rs",
          afterCharge: "590PKR",
          number: "03224443333",
          account: "Ahmed Hassan",
          status: "rejected",
          date: "Jul 18 2024 10:00",
        },
        {
          method: "Bank Transfer",
          amount: "2500Rs",
          charge: "0Rs",
          afterCharge: "2500PKR",
          number: "UBL-987654",
          account: "Sana Khan",
          status: "rejected",
          date: "Jul 05 2024 09:15",
        },
      ],
    },
    deposit: {
      complete: [
        {
          method: "Jazzcash",
          amount: "500Rs",
          charge: "0Rs",
          afterCharge: "500PKR",
          number: "03098887777",
          account: "Zeeshan Ali",
          status: "success",
          date: "Aug 28 2024 16:25",
        },
        {
          method: "Easypaisa",
          amount: "1200Rs",
          charge: "0Rs",
          afterCharge: "1200PKR",
          number: "03229998888",
          account: "Ali Khan",
          status: "success",
          date: "Aug 15 2024 11:40",
        },
        {
          method: "Bank Transfer",
          amount: "3000Rs",
          charge: "0Rs",
          afterCharge: "3000PKR",
          number: "Meezan-333333",
          account: "Umair Qureshi",
          status: "success",
          date: "Jul 30 2024 19:05",
        },
      ],
      pending: [
        {
          method: "Jazzcash",
          amount: "800Rs",
          charge: "0Rs",
          afterCharge: "800PKR",
          number: "03094445555",
          account: "Farhan Ali",
          status: "pending",
          date: "Aug 09 2024 07:30",
        },
        {
          method: "Easypaisa",
          amount: "250Rs",
          charge: "0Rs",
          afterCharge: "250PKR",
          number: "03440001111",
          account: "Samiullah",
          status: "pending",
          date: "Jul 29 2024 14:50",
        },
        {
          method: "Bank Transfer",
          amount: "2000Rs",
          charge: "0Rs",
          afterCharge: "2000PKR",
          number: "HBL-222222",
          account: "Hassan Raza",
          status: "pending",
          date: "Jul 21 2024 12:00",
        },
      ],
      rejected: [
        {
          method: "Jazzcash",
          amount: "1000Rs",
          charge: "0Rs",
          afterCharge: "1000PKR",
          number: "03118889999",
          account: "Qasim Ali",
          status: "rejected",
          date: "Aug 03 2024 09:30",
        },
        {
          method: "Easypaisa",
          amount: "150Rs",
          charge: "0Rs",
          afterCharge: "150PKR",
          number: "03012223333",
          account: "Waqas Ahmed",
          status: "rejected",
          date: "Jul 16 2024 18:20",
        },
        {
          method: "Bank Transfer",
          amount: "5000Rs",
          charge: "0Rs",
          afterCharge: "5000PKR",
          number: "UBL-555555",
          account: "Kamran Iqbal",
          status: "rejected",
          date: "Jul 10 2024 15:10",
        },
      ],
    },
  };

  const transactionList =
    data[type] && data[type][status] ? data[type][status] : [];

  return (
    <div className="transaction-container">
      <div className="transaction-header">
        <Link to="/setting" className="back-linkth">
          <FaArrowLeft />
        </Link>
        <h2 className="transaction-title">Transaction History</h2>
      </div>

      <div className="type-tabs">
        <button
          className={type === "deposit" ? "active" : ""}
          onClick={() => setType("deposit")}
        >
          Deposit History
        </button>
        <button
          className={type === "withdraw" ? "active" : ""}
          onClick={() => setType("withdraw")}
        >
          Withdraw History
        </button>
      </div>

      <div className="status-tabs">
        <button
          className={status === "pending" ? "active" : ""}
          onClick={() => setStatus("pending")}
        >
          PENDING
        </button>
        <button
          className={status === "complete" ? "active" : ""}
          onClick={() => setStatus("complete")}
        >
          COMPLETE
        </button>
        <button
          className={status === "rejected" ? "active" : ""}
          onClick={() => setStatus("rejected")}
        >
          REJECTED
        </button>
      </div>

      {transactionList.length === 0 ? (
        <p>No transactions available.</p>
      ) : (
        transactionList.map((item, index) => (
          <div key={index} className="transaction-card">
            <h3>
              {type === "withdraw" ? "Withdraw With" : "Deposit With"}{" "}
              {item.method}
            </h3>
            <p>
              <span>Method:</span> {item.method}
            </p>
            <p>
              <span>Amount:</span> {item.amount}
            </p>
            <p>
              <span>Charge:</span> {item.charge}
            </p>
            <p>
              <span>After Charge:</span> {item.afterCharge}
            </p>
            <p>
              <span>{item.method} Number:</span>{" "}
              <strong className="highlight">{item.number}</strong>
            </p>
            <p>
              <span>Account Title:</span>{" "}
              <strong className="highlight">{item.account}</strong>
            </p>
            <p>
              <span>Status:</span> {item.status}
            </p>
            <p>
              <span>Date:</span> {item.date}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
