// src/admin/pages/Transactions/AllTransactions.jsx
import React from "react";
import { useMockStore } from "../../store";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import "../../styles/admin.css";

export default function AllTransactions() {
  const { db } = useMockStore();

  // Combine deposits and withdrawals into a single transactions array
  const tx = [
    ...db.deposits.map((d) => ({
      id: d.id,
      type: "Deposit",
      uid: d.uid,
      amount: d.amount,
      date: d.date,
      status: d.status,
    })),
    ...db.withdrawals.map((w) => ({
      id: w.id,
      type: "Withdrawal",
      uid: w.uid,
      amount: w.amount,
      date: w.date,
      status: w.status,
    })),
  ];

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar />
        <div className="admin-content">
          <h2>All Transactions</h2>
          <div className="card-box" style={{ padding: 12 }}>
            <table className="userlist-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Type</th>
                  <th>UID</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tx.map((t) => (
                  <tr key={t.id}>
                    <td data-label="ID">{t.id}</td>
                    <td data-label="Type">{t.type}</td>
                    <td data-label="UID">{t.uid}</td>
                    <td data-label="Amount">
                      PKR {t.amount ? t.amount.toLocaleString() : 0}
                    </td>
                    <td data-label="Date">{t.date}</td>
                    <td data-label="Status">{t.status}</td>
                  </tr>
                ))}
                {tx.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      style={{ textAlign: "center", color: "#666" }}
                    >
                      No transactions found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
