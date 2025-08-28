import Card from "../components/Card";
import Charts from "../components/Charts";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/admin.css";

export default function Dashboard() {
  const today = "2025-08-25"; // dynamic: new Date().toISOString().slice(0, 10)

  // --- Hardcoded random sample data ---
  const users = [
    { uid: 1, name: "Ali Khan", joinDate: "2025-08-25" },
    { uid: 2, name: "Sara Ahmed", joinDate: "2025-08-24" },
    { uid: 3, name: "John Doe", joinDate: "2025-08-23" },
  ];

  const deposits = [
    {
      id: "D001",
      uid: 1,
      amount: 5000,
      method: "Easypaisa",
      status: "completed",
      date: "2025-08-25",
    },
    {
      id: "D002",
      uid: 2,
      amount: 8000,
      method: "JazzCash",
      status: "pending",
      date: "2025-08-24",
    },
    {
      id: "D003",
      uid: 3,
      amount: 10000,
      method: "Bank",
      status: "completed",
      date: "2025-08-23",
    },
  ];

  const withdrawals = [
    {
      id: "W001",
      uid: 1,
      amount: 3000,
      method: "Bank",
      status: "completed",
      date: "2025-08-25",
    },
    {
      id: "W002",
      uid: 2,
      amount: 2000,
      method: "Easypaisa",
      status: "pending",
      date: "2025-08-21",
    },
  ];

  const plans = [
    { id: "P1", active: true },
    { id: "P2", active: false },
    { id: "P3", active: true },
  ];

  // --- Today Stats ---
  const todayUsers = users.filter((u) => u.joinDate === today).length;
  const todayDeposits = deposits
    .filter((d) => d.date === today && d.status === "completed")
    .reduce((sum, d) => sum + d.amount, 0);
  const todayWithdrawals = withdrawals
    .filter((w) => w.date === today && w.status === "completed")
    .reduce((sum, w) => sum + w.amount, 0);

  // --- Prepare dashboard cards ---
  const cards = [
    {
      title: "Today Users Join",
      value: todayUsers,
      color: "green",
      textColor: "#fff",
    },
    {
      title: "Today Deposit (PKR)",
      value: `PKR ${todayDeposits.toLocaleString()}`,
      color: "green",
      textColor: "#fff",
    },
    {
      title: "Today Withdraw (PKR)",
      value: `PKR ${todayWithdrawals.toLocaleString()}`,
      color: "green",
      textColor: "#fff",
    },

    { title: "Total Users", value: users.length, color: "#2196f3" },
    {
      title: "Total Deposits (PKR)",
      value: `PKR ${deposits
        .filter((d) => d.status === "completed")
        .reduce((sum, d) => sum + d.amount, 0)
        .toLocaleString()}`,
      color: "#4caf50",
    },
    {
      title: "Total Withdrawals (PKR)",
      value: `PKR ${withdrawals
        .filter((w) => w.status === "completed")
        .reduce((sum, w) => sum + w.amount, 0)
        .toLocaleString()}`,
      color: "#f44336",
    },
    {
      title: "Pending Deposits",
      value: deposits.filter((d) => d.status === "pending").length,
      color: "#ff9800",
    },
    {
      title: "Pending Withdrawals",
      value: withdrawals.filter((w) => w.status === "pending").length,
      color: "#ff5722",
    },
    {
      title: "Active Plans",
      value: plans.filter((p) => p.active).length,
      color: "#9c27b0",
    },
  ];

  const recentDeposits = deposits.slice(-5).reverse();
  const recentWithdrawals = withdrawals.slice(-5).reverse();

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="dashboard-container">
          {/* Dashboard Cards */}
          <div className="dashboard-cards">
            {cards.map((c, i) => (
              <Card key={i} {...c} />
            ))}
          </div>

          {/* Charts */}
          <div className="charts-section">
            <Charts />
          </div>

          {/* Recent Deposits */}
          <div className="recent-section">
            <h3>Recent Deposits</h3>
            <div className="table-responsive">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentDeposits.map((d) => (
                    <tr key={d.id}>
                      <td>{d.id}</td>
                      <td>
                        {users.find((u) => u.uid === d.uid)?.name || "Unknown"}
                      </td>
                      <td>{d.amount.toLocaleString()}</td>
                      <td>{d.method}</td>
                      <td>{d.status}</td>
                      <td>{d.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Withdrawals */}
          <div className="recent-section">
            <h3>Recent Withdrawals</h3>
            <div className="table-responsive">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentWithdrawals.map((w) => (
                    <tr key={w.id}>
                      <td>{w.id}</td>
                      <td>
                        {users.find((u) => u.uid === w.uid)?.name || "Unknown"}
                      </td>
                      <td>{w.amount.toLocaleString()}</td>
                      <td>{w.method}</td>
                      <td>{w.status}</td>
                      <td>{w.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
