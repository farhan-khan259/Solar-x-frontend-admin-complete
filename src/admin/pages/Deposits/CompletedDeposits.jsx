// src/admin/pages/Deposits/CompletedDeposits.jsx
import { useMemo, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useMockStore } from "../../store";
import "../../styles/userlist.css";

export default function CompletedDeposits() {
  const { db } = useMockStore();
  const completed = db.deposits.filter((d) => d.status === "completed");
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () =>
      completed.filter((c) =>
        JSON.stringify(c).toLowerCase().includes(q.toLowerCase())
      ),
    [completed, q]
  );

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar />
        <div className="admin-content">
          <h2>Completed Deposits</h2>
          <div style={{ marginBottom: 12 }}>
            <input
              placeholder="Search UID, method, amount..."
              className="userlist-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <table className="userlist-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>UID</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((d) => (
                <tr key={d.id}>
                  <td data-label="ID">{d.id}</td>
                  <td data-label="UID">{d.uid}</td>
                  <td data-label="Method">{d.method}</td>
                  <td data-label="Amount">PKR {d.amount.toLocaleString()}</td>
                  <td data-label="Date">{d.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
