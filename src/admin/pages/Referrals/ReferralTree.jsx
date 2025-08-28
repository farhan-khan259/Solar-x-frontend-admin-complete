import { useMemo, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useMockStore } from "../../store";
import "../../styles/admin.css";

export default function ReferralTree() {
  const { db } = useMockStore();
  const [search, setSearch] = useState("");
  const [expandedUser, setExpandedUser] = useState(null);

  // Memoized dummy referral data (10 users)
  const dummyReferrals = useMemo(
    () => [
      {
        uid: "user101",
        l1: ["user102", "user103"],
        l2: ["user104", "user105"],
        l3: ["user106", "user107"],
      },
      {
        uid: "user108",
        l1: ["user109"],
        l2: ["user110", "user111"],
        l3: ["user112"],
      },
      {
        uid: "user113",
        l1: ["user114", "user115", "user116"],
        l2: ["user117"],
        l3: [],
      },
      { uid: "user118", l1: [], l2: ["user119", "user120"], l3: ["user121"] },
      {
        uid: "user122",
        l1: ["user123"],
        l2: ["user124", "user125"],
        l3: ["user126"],
      },
      { uid: "user127", l1: ["user128", "user129"], l2: [], l3: [] },
      {
        uid: "user130",
        l1: ["user131"],
        l2: ["user132", "user133"],
        l3: ["user134", "user135"],
      },
      { uid: "user136", l1: [], l2: [], l3: [] },
      { uid: "user137", l1: ["user138", "user139"], l2: [], l3: ["user140"] },
      {
        uid: "user141",
        l1: ["user142"],
        l2: ["user143"],
        l3: ["user144", "user145"],
      },
    ],
    []
  );

  // Use db data only if it has 10 or more users, else use dummy
  const referralsData = useMemo(() => {
    if (!db.referrals || db.referrals.length < 10) return dummyReferrals;
    return db.referrals;
  }, [db.referrals, dummyReferrals]);

  // Filter referrals by search input
  const filteredReferrals = useMemo(() => {
    if (!search.trim()) return referralsData;
    return referralsData.filter((r) =>
      r.uid.toLowerCase().includes(search.toLowerCase())
    );
  }, [referralsData, search]);

  const toggleExpand = (uid) => {
    setExpandedUser(expandedUser === uid ? null : uid);
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar />
        <div className="admin-content">
          <h2>Referral Tree</h2>

          <div className="card-box" style={{ padding: 12, marginBottom: 16 }}>
            <strong>Total Users:</strong> {referralsData.length} <br />
            <strong>With Direct Referrals:</strong>{" "}
            {referralsData.filter((r) => r.l1 && r.l1.length > 0).length}
          </div>

          <div style={{ marginBottom: 16 }}>
            <input
              className="userlist-search"
              placeholder="Search by User ID"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "100%", maxWidth: 300 }}
            />
          </div>

          <div className="card-box" style={{ padding: 12 }}>
            {filteredReferrals.length === 0 ? (
              <p>No referral data available.</p>
            ) : (
              filteredReferrals.map((r) => (
                <div
                  key={r.uid}
                  className="referral-card"
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    marginBottom: 12,
                    padding: 12,
                    background: "#fafafa",
                  }}
                >
                  <div
                    onClick={() => toggleExpand(r.uid)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: 15,
                    }}
                  >
                    <span>User ID: {r.uid}</span>
                    <span style={{ fontSize: 18 }}>
                      {expandedUser === r.uid ? "−" : "+"}
                    </span>
                  </div>

                  {expandedUser === r.uid && (
                    <div style={{ marginTop: 8, fontSize: 14 }}>
                      <div style={{ marginBottom: 6 }}>
                        <strong>Level 1:</strong>{" "}
                        {r.l1?.length ? r.l1.join(", ") : "—"}
                      </div>
                      <div style={{ marginBottom: 6 }}>
                        <strong>Level 2:</strong>{" "}
                        {r.l2?.length ? r.l2.join(", ") : "—"}
                      </div>
                      <div>
                        <strong>Level 3:</strong>{" "}
                        {r.l3?.length ? r.l3.join(", ") : "—"}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
