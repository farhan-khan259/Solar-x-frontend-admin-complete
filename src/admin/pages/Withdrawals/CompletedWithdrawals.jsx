// src/admin/pages/Withdrawals/CompletedWithdrawals.jsx
import { useMemo, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useMockStore } from "../../store";
import "../../styles/admin.css";
import "../../styles/userlist.css";

export default function CompletedWithdrawals() {
  const { db } = useMockStore();
  const [q, setQ] = useState("");

  // calculate completed inside useMemo
  const filtered = useMemo(() => {
    const completed =
      db.withdrawals?.filter((w) => w.status === "completed") || [];
    return completed.filter((w) =>
      JSON.stringify(w).toLowerCase().includes(q.toLowerCase())
    );
  }, [db.withdrawals, q]); // only depends on db.withdrawals and search query

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar />
        <div className="admin-content">
          <h2>Completed Withdrawals</h2>
          <div style={{ marginBottom: 12 }}>
            <input
              placeholder="Search by UID, account, name, amount..."
              className="userlist-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <div className="card-box">
            <table className="userlist-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>UID</th>
                  <th>Method</th>
                  <th>Account</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((w) => (
                  <tr key={w.id}>
                    <td data-label="ID">{w.id}</td>
                    <td data-label="UID">{w.uid}</td>
                    <td data-label="Method">{w.method}</td>
                    <td data-label="Account">{w.account}</td>
                    <td data-label="Name">{w.name}</td>
                    <td data-label="Amount">
                      PKR {w.amount?.toLocaleString()}
                    </td>
                    <td data-label="Date">{w.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && <p>No completed withdrawals found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
