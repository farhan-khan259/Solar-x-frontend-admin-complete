// src/admin/pages/PromoCodes/AdminPromoCodes.jsx
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import "../../styles/admin.css";
import "../../styles/userlist.css";

export default function AdminPromoCodes() {
  const [codes, setCodes] = useState([
    { id: 1, code: "WELCOME50", uses: 10 },
    { id: 2, code: "NEWUSER10", uses: 20 },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [limitUsers, setLimitUsers] = useState("");
  const [amount, setAmount] = useState("");

  const addPromoCode = () => {
    if (!limitUsers || !amount) return;

    const newEntry = {
      id: codes.length + 1,
      code: Math.random().toString(36).substring(2, 10).toUpperCase(), // random code
      uses: 0,
      limit: limitUsers,
      amount: amount,
    };

    setCodes([...codes, newEntry]);
    setLimitUsers("");
    setAmount("");
    setShowPopup(false);
  };

  const deletePromoCode = (id) => {
    setCodes(codes.filter((c) => c.id !== id));
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar />
        <div className="admin-content">
          <h2>Promo Codes</h2>

          <button
            className="action-btn view"
            style={{ marginBottom: 20 }}
            onClick={() => setShowPopup(true)}
          >
            Create Promo Code
          </button>

          {/* Popup Modal */}
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-content">
                <h3>Create Promo Code</h3>
                <label>
                  Limit of Users:
                  <input
                    type="number"
                    value={limitUsers}
                    onChange={(e) => setLimitUsers(e.target.value)}
                  />
                </label>
                <label>
                  Amount:
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </label>
                <div className="popup-actions">
                  <button className="action-btn view" onClick={addPromoCode}>
                    Create
                  </button>
                  <button
                    className="action-btn delete"
                    onClick={() => setShowPopup(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          <table className="userlist-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Code</th>
                <th>Amount</th>
                <th>Limit</th>
                <th>Claimed by</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {codes.map((code) => (
                <tr key={code.id}>
                  <td data-label="ID">{code.id}</td>
                  <td data-label="Code">{code.code}</td>
                  <td data-label="Amount">{code.amount || "-"}</td>
                  <td data-label="Limit">{code.limit || "-"}</td>
                  <td data-label="Uses">{code.uses}</td>
                  <td data-label="Actions">
                    <button
                      className="action-btn delete"
                      onClick={() => deletePromoCode(code.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CSS for popup */}
      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-content {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          width: 300px;
          text-align: center;
        }
        .popup-content input {
          width: 100%;
          padding: 8px;
          margin: 8px 0;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        .popup-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
