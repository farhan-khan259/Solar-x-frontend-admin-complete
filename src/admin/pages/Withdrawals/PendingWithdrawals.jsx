// src/admin/pages/Withdrawals/PendingWithdrawals.jsx
import { useMemo, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import "../../styles/admin.css";
import "../../styles/userlist.css";

export default function PendingWithdrawals() {
  const [q, setQ] = useState("");

  // --- Dummy pending withdrawals inside useMemo (so data is stable) ---
  const withdrawals = useMemo(
    () => [
      {
        id: 1,
        uid: "U001",
        method: "Easypaisa",
        account: "03001234567",
        name: "Ali Khan",
        amount: 5000,
        date: "2025-08-25",
        status: "pending",
      },
      {
        id: 2,
        uid: "U002",
        method: "JazzCash",
        account: "03007654321",
        name: "Sara Ahmed",
        amount: 2500,
        date: "2025-08-25",
        status: "pending",
      },
      {
        id: 3,
        uid: "U003",
        method: "Bank",
        account: "PK30HABB000123456789",
        name: "Bilal Hussain",
        amount: 10000,
        date: "2025-08-25",
        status: "pending",
      },
      {
        id: 4,
        uid: "U004",
        method: "Easypaisa",
        account: "03111223344",
        name: "Ayesha Malik",
        amount: 4000,
        date: "2025-08-26",
        status: "pending",
      },
      {
        id: 5,
        uid: "U005",
        method: "Bank",
        account: "PK33MEZN000987654321",
        name: "Usman Raza",
        amount: 7500,
        date: "2025-08-26",
        status: "pending",
      },
      {
        id: 6,
        uid: "U006",
        method: "JazzCash",
        account: "03219998888",
        name: "Hina Tariq",
        amount: 3000,
        date: "2025-08-26",
        status: "pending",
      },
      {
        id: 7,
        uid: "U007",
        method: "Easypaisa",
        account: "03445556677",
        name: "Ahmed Iqbal",
        amount: 12000,
        date: "2025-08-26",
        status: "pending",
      },
      {
        id: 8,
        uid: "U008",
        method: "Bank",
        account: "PK11MCIB000555443322",
        name: "Zain Ali",
        amount: 6000,
        date: "2025-08-26",
        status: "pending",
      },
      {
        id: 9,
        uid: "U009",
        method: "JazzCash",
        account: "03335557777",
        name: "Nimra Fatima",
        amount: 4500,
        date: "2025-08-26",
        status: "pending",
      },
      {
        id: 10,
        uid: "U010",
        method: "Easypaisa",
        account: "03009998877",
        name: "Fahad Sheikh",
        amount: 8000,
        date: "2025-08-26",
        status: "pending",
      },
    ],
    []
  );

  // --- Approve & Reject handlers (just console.log for now) ---
  const approveWithdrawal = (id) => {
    console.log(`Approved withdrawal ID ${id}`);
  };
  const rejectWithdrawal = (id) => {
    console.log(`Rejected withdrawal ID ${id}`);
  };

  // --- Filtered list ---
  const filtered = useMemo(() => {
    const pending = withdrawals.filter((w) => w.status === "pending");
    return pending.filter((w) =>
      JSON.stringify(w).toLowerCase().includes(q.toLowerCase())
    );
  }, [withdrawals, q]);

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar />
        <div className="admin-content">
          <h2>Pending Withdrawals</h2>
          <div style={{ marginBottom: 12 }}>
            <input
              placeholder="Search UID, account, amount..."
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
                  <th>Actions</th>
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
                    <td data-label="Amount">PKR {w.amount.toLocaleString()}</td>
                    <td data-label="Date">{w.date}</td>
                    <td data-label="Actions">
                      <button
                        className="action-btn view"
                        onClick={() => approveWithdrawal(w.id)}
                      >
                        Approve
                      </button>
                      <button
                        className="action-btn delete"
                        onClick={() => rejectWithdrawal(w.id)}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && <p>No pending withdrawals found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
