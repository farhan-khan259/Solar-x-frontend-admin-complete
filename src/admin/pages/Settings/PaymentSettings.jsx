// src/admin/pages/Settings/PaymentSettings.jsx
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useMockStore } from "../../store";
import "../../styles/admin.css";

export default function PaymentSettings() {
  const { db, saveSettings } = useMockStore();

  const [e, setE] = useState("");
  const [j, setJ] = useState("");
  const [bank, setBank] = useState("");

  // Load data once from the store on component mount
  useEffect(() => {
    if (db?.settings?.payments) {
      setE(db.settings.payments.easypaisa.join(", "));
      setJ(db.settings.payments.jazzcash.join(", "));
      setBank(JSON.stringify(db.settings.payments.bank, null, 2));
    }
  }, [db]);

  const onSave = () => {
    try {
      const updatedData = {
        payments: {
          easypaisa: e
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
          jazzcash: j
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
          bank: JSON.parse(bank),
        },
      };

      saveSettings(updatedData);

      alert("Payment settings updated successfully!");
    } catch (err) {
      alert("Invalid Bank JSON. Please fix formatting.");
    }
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar />
        <div className="admin-content">
          <h2>Payment Settings</h2>
          <div className="card-box" style={{ padding: 16 }}>
            {/* Easypaisa Field */}
            <div style={{ marginBottom: 12 }}>
              <label style={{ display: "block", fontWeight: 600 }}>
                Easypaisa Numbers (comma separated)
              </label>
              <input
                className="userlist-search"
                placeholder="03009998888, 03001234567"
                value={e}
                onChange={(ev) => setE(ev.target.value)}
                style={{ width: "100%" }}
              />
            </div>

            {/* JazzCash Field */}
            <div style={{ marginBottom: 12 }}>
              <label style={{ display: "block", fontWeight: 600 }}>
                JazzCash Numbers (comma separated)
              </label>
              <input
                className="userlist-search"
                placeholder="03001112222, 03003334444"
                value={j}
                onChange={(ev) => setJ(ev.target.value)}
                style={{ width: "100%" }}
              />
            </div>

            {/* Bank JSON Field */}
            <div style={{ marginBottom: 12 }}>
              <label style={{ display: "block", fontWeight: 600 }}>
                Bank Details (JSON format)
              </label>
              <textarea
                style={{
                  width: "100%",
                  minHeight: 140,
                  fontFamily: "monospace",
                }}
                placeholder='{"accountName": "John Doe", "accountNumber": "1234567890", "bankName": "UBL"}'
                value={bank}
                onChange={(ev) => setBank(ev.target.value)}
              />
            </div>

            {/* Save Button */}
            <button className="action-btn" onClick={onSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
