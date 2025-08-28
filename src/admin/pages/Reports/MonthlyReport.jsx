// src/admin/pages/Reports/MonthlyReport.jsx
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import "../../styles/admin.css";

export default function MonthlyReport() {
  // Dummy summary data
  const summary = {
    totalDeposits: 125000,
    totalWithdrawals: 98000,
    totalUsers: 320,
    netProfit: 27000,
  };

  // Dummy table data for deposits and withdrawals
  const deposits = [
    {
      id: 1,
      uid: "U101",
      method: "JazzCash",
      amount: 5000,
      date: "2025-08-01",
    },
    {
      id: 2,
      uid: "U102",
      method: "Easypaisa",
      amount: 12000,
      date: "2025-08-03",
    },
    { id: 3, uid: "U103", method: "Bank", amount: 8000, date: "2025-08-07" },
  ];

  const withdrawals = [
    {
      id: 1,
      uid: "U101",
      method: "JazzCash",
      amount: 3000,
      date: "2025-08-04",
    },
    {
      id: 2,
      uid: "U105",
      method: "Easypaisa",
      amount: 7000,
      date: "2025-08-08",
    },
    { id: 3, uid: "U107", method: "Bank", amount: 5000, date: "2025-08-10" },
  ];

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar />
        <div className="admin-content">
          <h2>Monthly Report</h2>

          {/* Summary Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            <div
              className="card-box"
              style={{ padding: 16, textAlign: "center" }}
            >
              <h3>Total Deposits</h3>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                PKR {summary.totalDeposits.toLocaleString()}
              </p>
            </div>
            <div
              className="card-box"
              style={{ padding: 16, textAlign: "center" }}
            >
              <h3>Total Withdrawals</h3>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                PKR {summary.totalWithdrawals.toLocaleString()}
              </p>
            </div>
            <div
              className="card-box"
              style={{ padding: 16, textAlign: "center" }}
            >
              <h3>Total Users</h3>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                {summary.totalUsers.toLocaleString()}
              </p>
            </div>
            <div
              className="card-box"
              style={{ padding: 16, textAlign: "center" }}
            >
              <h3>Net Profit</h3>
              <p
                style={{ fontSize: "20px", fontWeight: "bold", color: "green" }}
              >
                PKR {summary.netProfit.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Deposits Table */}
          <div
            className="card-box"
            style={{ padding: 12, marginBottom: "20px" }}
          >
            <h3 style={{ marginBottom: "10px" }}>Recent Deposits</h3>
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
                {deposits.length > 0 ? (
                  deposits.map((d) => (
                    <tr key={d.id}>
                      <td data-label="ID">{d.id}</td>
                      <td data-label="UID">{d.uid}</td>
                      <td data-label="Method">{d.method}</td>
                      <td data-label="Amount">
                        PKR {d.amount.toLocaleString()}
                      </td>
                      <td data-label="Date">{d.date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      style={{ textAlign: "center", color: "#666" }}
                    >
                      No deposit records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Withdrawals Table */}
          <div className="card-box" style={{ padding: 12 }}>
            <h3 style={{ marginBottom: "10px" }}>Recent Withdrawals</h3>
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
                {withdrawals.length > 0 ? (
                  withdrawals.map((w) => (
                    <tr key={w.id}>
                      <td data-label="ID">{w.id}</td>
                      <td data-label="UID">{w.uid}</td>
                      <td data-label="Method">{w.method}</td>
                      <td data-label="Amount">
                        PKR {w.amount.toLocaleString()}
                      </td>
                      <td data-label="Date">{w.date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      style={{ textAlign: "center", color: "#666" }}
                    >
                      No withdrawal records found
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
