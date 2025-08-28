// src/admin/pages/CMS/Announcements.jsx
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import "../../styles/admin.css";
import "../../styles/userlist.css";

export default function Announcements() {
  const [msg, setMsg] = useState("Welcome to Solarx0!");

  const handlePost = () => {
    alert("Posted (stub)"); // Replace with backend call
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar />
        <div className="admin-content">
          <h2>Announcements</h2>
          <div className="card-box">
            <textarea
              style={{ width: "100%", minHeight: 120 }}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <div style={{ marginTop: 12 }}>
              <button className="action-btn" onClick={handlePost}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
