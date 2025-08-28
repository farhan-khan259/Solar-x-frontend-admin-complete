// src/admin/pages/Deposits/PendingDeposits.jsx
import { useMemo, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import "../../styles/userlist.css";

export default function PendingDeposits() {
  const [q, setQ] = useState("");

  // Dummy data with 10 pending deposits
  const deposits = useMemo(
    () => [
      {
        id: 1,
        uid: "U001",
        method: "Easypaisa",
        amount: 2000,
        date: "2025-08-25",
        status: "pending",
        proof: "https://via.placeholder.com/300x200.png?text=Receipt+1",
      },
      {
        id: 2,
        uid: "U002",
        method: "JazzCash",
        amount: 5000,
        date: "2025-08-24",
        status: "pending",
        proof: "https://via.placeholder.com/300x200.png?text=Receipt+2",
      },
      {
        id: 3,
        uid: "U003",
        method: "Bank Transfer",
        amount: 10000,
        date: "2025-08-24",
        status: "pending",
        proof: "https://via.placeholder.com/300x200.png?text=Receipt+3",
      },
      {
        id: 4,
        uid: "U004",
        method: "Easypaisa",
        amount: 3000,
        date: "2025-08-23",
        status: "pending",
        proof: "https://via.placeholder.com/300x200.png?text=Receipt+4",
      },
      {
        id: 5,
        uid: "U005",
        method: "JazzCash",
        amount: 7000,
        date: "2025-08-23",
        status: "pending",
        proof: "https://via.placeholder.com/300x200.png?text=Receipt+5",
      },
      {
        id: 6,
        uid: "U006",
        method: "Bank Transfer",
        amount: 12000,
        date: "2025-08-22",
        status: "pending",
        proof: "https://via.placeholder.com/300x200.png?text=Receipt+6",
      },
      {
        id: 7,
        uid: "U007",
        method: "Easypaisa",
        amount: 1500,
        date: "2025-08-22",
        status: "pending",
        proof: "https://via.placeholder.com/300x200.png?text=Receipt+7",
      },
      {
        id: 8,
        uid: "U008",
        method: "JazzCash",
        amount: 2500,
        date: "2025-08-21",
        status: "pending",
        proof: "https://via.placeholder.com/300x200.png?text=Receipt+8",
      },
      {
        id: 9,
        uid: "U009",
        method: "Bank Transfer",
        amount: 8000,
        date: "2025-08-21",
        status: "pending",
        proof: "https://via.placeholder.com/300x200.png?text=Receipt+9",
      },
      {
        id: 10,
        uid: "U010",
        method: "Easypaisa",
        amount: 6000,
        date: "2025-08-20",
        status: "pending",
        proof: "https://via.placeholder.com/300x200.png?text=Receipt+10",
      },
    ],
    []
  );

  // Search + filter
  const filtered = useMemo(() => {
    return deposits.filter((d) =>
      JSON.stringify(d).toLowerCase().includes(q.toLowerCase())
    );
  }, [deposits, q]);

  const approveDeposit = (id) => {
    alert(`Deposit ID ${id} approved!`);
  };

  const rejectDeposit = (id) => {
    alert(`Deposit ID ${id} rejected!`);
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar />
        <div className="admin-content">
          <h2>Pending Deposits</h2>
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
                <th>Proof</th>
                <th>Actions</th>
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
                  <td data-label="Proof">
                    <a href={d.proof} target="_blank" rel="noreferrer">
                      View
                    </a>
                  </td>
                  <td data-label="Actions">
                    <button
                      className="action-btn view"
                      onClick={() => approveDeposit(d.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="action-btn delete"
                      onClick={() => rejectDeposit(d.id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && <p>No pending deposits found.</p>}
        </div>
      </div>
    </div>
  );
}
