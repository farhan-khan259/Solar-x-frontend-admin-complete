import Card from "../components/Card";
import Charts from "../components/Charts";
import Topbar from "../components/Topbar";
import "../styles/admin.css";

export default function Dashboard() {
  const today = "2025-08-25";

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

  const todayUsers = users.filter((u) => u.joinDate === today).length;
  const todayDeposits = deposits
    .filter((d) => d.date === today && d.status === "completed")
    .reduce((sum, d) => sum + d.amount, 0);
  const todayWithdrawals = withdrawals
    .filter((w) => w.date === today && w.status === "completed")
    .reduce((sum, w) => sum + w.amount, 0);

  const cards = [
    { title: "Today Users Join", value: todayUsers },
    {
      title: "Today Deposit (PKR)",
      value: `PKR ${todayDeposits.toLocaleString()}`,
    },
    {
      title: "Today Withdraw (PKR)",
      value: `PKR ${todayWithdrawals.toLocaleString()}`,
    },
    { title: "Total Users", value: users.length },
    {
      title: "Total Deposits (PKR)",
      value: `PKR ${deposits
        .filter((d) => d.status === "completed")
        .reduce((sum, d) => sum + d.amount, 0)
        .toLocaleString()}`,
    },
    {
      title: "Total Withdrawals (PKR)",
      value: `PKR ${withdrawals
        .filter((w) => w.status === "completed")
        .reduce((sum, w) => sum + w.amount, 0)
        .toLocaleString()}`,
    },
    {
      title: "Pending Deposits",
      value: deposits.filter((d) => d.status === "pending").length,
    },
    {
      title: "Pending Withdrawals",
      value: withdrawals.filter((w) => w.status === "pending").length,
    },
    { title: "Active Plans", value: plans.filter((p) => p.active).length },
  ];

  const recentDeposits = deposits.slice(-5).reverse();
  const recentWithdrawals = withdrawals.slice(-5).reverse();

  return (
    <div className="admin-layout">
      <div className="main-content">
        <Topbar />
        <div className="dashboard-container">
          {/* Cards */}
          <div className="dashboard-cards">
            {cards.map((c, i) => (
              <Card
                key={i}
                title={c.title}
                value={c.value}
                color={i < 3 ? "#e53935" : "#fff"} // first 3 cards red, rest white
                textColor={i < 3 ? "#fff" : "#000"} // first 3 white text, rest black
              />
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
