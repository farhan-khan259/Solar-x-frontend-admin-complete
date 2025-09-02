import { useState } from "react";
import "../../styles/userdetails.css";

export default function UserDetails() {
  const [user, setUser] = useState({
    name: "Bilal",
    uid: "REF138351001",
    deposit: 5000,
    withdrawal: 1000,
    teamMembers: 500,
    teamCommission: 7000,
    password: "1246778",
    email: "sajimayo133@gmail.com",
    balance: 2000,
  });

  // Balance Add
  const handleAddBalance = () => {
    const amount = parseInt(prompt("Enter amount to add:"), 10);
    if (!isNaN(amount) && amount > 0) {
      setUser({ ...user, balance: user.balance + amount });
      alert(`PKR ${amount} added to balance!`);
    }
  };

  // Balance Subtract
  const handleSubtractBalance = () => {
    const amount = parseInt(prompt("Enter amount to subtract:"), 10);
    if (!isNaN(amount) && amount > 0 && amount <= user.balance) {
      setUser({ ...user, balance: user.balance - amount });
      alert(`PKR ${amount} subtracted from balance!`);
    } else {
      alert("Invalid amount.");
    }
  };

  // Delete Account
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this account?")) {
      alert("User account deleted successfully!");
      // Later: API call to delete
    }
  };

  // Login to Account (Admin Impersonation)
  const handleLogin = () => {
    alert(`Logging in as ${user.name}...`);
    // Later: Redirect to user dashboard session
  };

  // Activate Plan
  const handleDeletePlan = () => {
    alert("Plan Deleted Successfully!");
    // Later: API call to delete plan
  };

  // Ban User
  const handleBanUser = () => {
    alert("User Banned Successfully!");
    // Later: API call to Ban User
  };

  return (
    <div className="admin-layout">
      <div className="main-content">
        <div className="userdetails-container">
          <h2>User Details</h2>

          <div className="user-card">
            <p>
              <strong>User Name:</strong> {user.name}
            </p>
            <p>
              <strong>UID:</strong> {user.uid}
            </p>
            <p>
              <strong>Deposit:</strong> {user.deposit} PKR
            </p>
            <p>
              <strong>Withdrawal:</strong> {user.withdrawal} PKR
            </p>
            <p>
              <strong>Total Team Members:</strong> {user.teamMembers}
            </p>
            <p>
              <strong>Total Team Commission:</strong> {user.teamCommission} PKR
            </p>
            <p>
              <strong>Login Password:</strong> {user.password}
            </p>
            <p>
              <strong>Registration Email:</strong> {user.email}
            </p>
            <p>
              <strong>Current Balance:</strong> {user.balance} PKR
            </p>
          </div>

          <div className="actions">
            <button className="btn green" onClick={handleAddBalance}>
              Add Balance
            </button>
            <button className="btn orange" onClick={handleSubtractBalance}>
              Subtract Balance
            </button>
            <button className="btn red" onClick={handleDelete}>
              Delete Account
            </button>
            <button className="btn blue" onClick={handleLogin}>
              Login to Account
            </button>
            <button className="btn purple" onClick={handleDeletePlan}>
              Delete Plan
            </button>
            <button className="btn yellow" onClick={handleBanUser}>
              Ban User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
