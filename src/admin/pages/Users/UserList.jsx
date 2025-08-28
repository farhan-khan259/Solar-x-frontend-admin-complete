// src/admin/pages/UserList.jsx
import { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ add this
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import "../../styles/admin.css";
import "../../styles/userlist.css";
import UserProfileModal from "./UserProfileModal";

const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    phone: "+1 234 567 890",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    phone: "+44 987 654 321",
    status: "Suspended",
  },
  {
    id: 3,
    name: "Ali Khan",
    email: "ali@example.com",
    role: "User",
    phone: "+92 300 1234567",
    status: "Active",
  },
];

export default function UserList() {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleView = (user) => setSelectedUser(user);
  const handleCloseModal = () => setSelectedUser(null);

  const handleSuspendToggle = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Suspended" : "Active" }
          : u
      )
    );
    setSelectedUser((prev) =>
      prev
        ? { ...prev, status: prev.status === "Active" ? "Suspended" : "Active" }
        : prev
    );
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar />
        <div className="admin-content">
          <h2>Users</h2>
          <div className="card-box" style={{ padding: 12 }}>
            <table className="userlist-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td data-label="ID">{user.id}</td>
                    <td data-label="Name">{user.name}</td>
                    <td data-label="Email">{user.email}</td>
                    <td data-label="Role">
                      <span
                        className={`role-badge ${
                          user.role === "Admin" ? "admin" : "user"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td data-label="Status">
                      <span
                        className={`status-badge ${
                          user.status === "Active" ? "active" : "suspended"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td data-label="Actions">
                      <button
                        className="action-btn view"
                        onClick={() => handleView(user)}
                      >
                        <FaEye />
                      </button>

                      {/* ✅ fixed: now links to /user/:id */}
                      <Link to="/admin/userdetails">
                        <button className="action-btn edit">
                          <FaEdit />
                        </button>
                      </Link>

                      <button className="action-btn delete">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {users.length === 0 && (
              <p style={{ textAlign: "center", marginTop: 10 }}>
                No users found
              </p>
            )}
          </div>

          {selectedUser && (
            <UserProfileModal
              user={selectedUser}
              onClose={handleCloseModal}
              onSuspendToggle={handleSuspendToggle}
            />
          )}
        </div>
      </div>
    </div>
  );
}
