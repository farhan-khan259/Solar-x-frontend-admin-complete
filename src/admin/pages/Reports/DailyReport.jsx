// src/admin/pages/Reports/DailyReport.jsx
import { useMemo } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useMockStore } from "../../store";
import "../../styles/admin.css";

export default function DailyReport() {
  const { db } = useMockStore();
  const today = new Date().toISOString().slice(0, 10);

  // Pre-calculate report data using useMemo for performance
  const report = useMemo(() => {
    // Filter today's deposits & withdrawals
    const depositsToday = db.deposits.filter(
      (d) => d.date === today && d.status === "completed"
    );
    const withdrawalsToday = db.withdrawals.filter(
      (w) => w.date === today && w.status === "completed"
    );
    const newUsersToday = db.users.filter((u) => u.joined === today);

    // Totals
    const totalDeposits = depositsToday.reduce(
      (sum, d) => sum + (d.amount || 0),
      0
    );
    const totalWithdrawals = withdrawalsToday.reduce(
      (sum, w) => sum + (w.amount || 0),
      0
    );

    return {
      depositsToday,
      withdrawalsToday,
      newUsersToday,
      totalDeposits,
      totalWithdrawals,
    };
  }, [db, today]);

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar />
        <div className="admin-content">
          <h2>Daily Report</h2>

          {/* Summary Card */}
          <div className="card-box" style={{ padding: 16, marginBottom: 20 }}>
            <div style={{ marginBottom: 8 }}>
              <strong>Date:</strong> {today}
            </div>
            <div style={{ marginBottom: 8 }}>
              <strong>Deposits Today:</strong> PKR{" "}
              {report.totalDeposits.toLocaleString()}
            </div>
            <div style={{ marginBottom: 8 }}>
              <strong>Withdrawals Today:</strong> PKR{" "}
              {report.totalWithdrawals.toLocaleString()}
            </div>
            <div>
              <strong>New Users Today:</strong> {report.newUsersToday.length}
            </div>
          </div>

          {/* Detailed Deposits */}
          <h3>Deposits (Completed)</h3>
          {report.depositsToday.length === 0 ? (
            <div className="card-box" style={{ padding: 12, marginBottom: 20 }}>
              No deposits today.
            </div>
          ) : (
            <div
              className="card-box"
              style={{ padding: 12, marginBottom: 20, overflowX: "auto" }}
            >
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Amount (PKR)</th>
                    <th>Method</th>
                    <th>Txn ID</th>
                  </tr>
                </thead>
                <tbody>
                  {report.depositsToday.map((d, i) => (
                    <tr key={i}>
                      <td>{d.user || "Unknown"}</td>
                      <td>{d.amount.toLocaleString()}</td>
                      <td>{d.method || "N/A"}</td>
                      <td>{d.txnId || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Detailed Withdrawals */}
          <h3>Withdrawals (Completed)</h3>
          {report.withdrawalsToday.length === 0 ? (
            <div className="card-box" style={{ padding: 12, marginBottom: 20 }}>
              No withdrawals today.
            </div>
          ) : (
            <div
              className="card-box"
              style={{ padding: 12, marginBottom: 20, overflowX: "auto" }}
            >
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Amount (PKR)</th>
                    <th>Method</th>
                    <th>Txn ID</th>
                  </tr>
                </thead>
                <tbody>
                  {report.withdrawalsToday.map((w, i) => (
                    <tr key={i}>
                      <td>{w.user || "Unknown"}</td>
                      <td>{w.amount.toLocaleString()}</td>
                      <td>{w.method || "N/A"}</td>
                      <td>{w.txnId || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* New Users */}
          <h3>New Users</h3>
          {report.newUsersToday.length === 0 ? (
            <div className="card-box" style={{ padding: 12 }}>
              No users joined today.
            </div>
          ) : (
            <div
              className="card-box"
              style={{ padding: 12, overflowX: "auto" }}
            >
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Joined At</th>
                  </tr>
                </thead>
                <tbody>
                  {report.newUsersToday.map((u, i) => (
                    <tr key={i}>
                      <td>{u.name || "Unnamed"}</td>
                      <td>{u.email || "N/A"}</td>
                      <td>{u.joined}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
