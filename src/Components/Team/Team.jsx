import { useState } from "react";
import {
  FaArrowLeft,
  FaCopy,
  FaFire,
  FaGift,
  FaShareAlt,
  FaUsers,
} from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Team.css";

const Team = () => {
  const [activeTab, setActiveTab] = useState("invite");

  return (
    <div className="team-wrapper">
      <div className="team-header">
        <Link to="/dashboard" className="back-home-link">
          <FaArrowLeft />
        </Link>
        <h2 className="team-title">Solar ✘ Loyal Team Data </h2>
      </div>

      <div className="team-buttons">
        <button
          className="team-button"
          style={{
            backgroundColor:
              activeTab === "invite"
                ? "var(--accent-color)"
                : "var(--primary-color)",
          }}
          onClick={() => setActiveTab("invite")}
        >
          Invite Link <IoGameControllerOutline />
        </button>
        <button
          className="team-button"
          style={{
            backgroundColor:
              activeTab === "data"
                ? "var(--accent-color)"
                : "var(--primary-color)",
          }}
          onClick={() => setActiveTab("data")}
        >
          Team Data <FaGift />
        </button>
        <button
          className="team-button"
          style={{
            backgroundColor:
              activeTab === "details"
                ? "var(--accent-color)"
                : "var(--primary-color)",
          }}
          onClick={() => setActiveTab("details")}
        >
          Team Details <FaFire />
        </button>
      </div>

      <div className="team-screen">
        {activeTab === "invite" && <InviteScreen />}
        {activeTab === "data" && <TeamDataScreen />}
        {activeTab === "details" && <TeamDetailsScreen />}
      </div>
    </div>
  );
};

const InviteScreen = () => {
  const referralLink = "https://solarx0.com/signup?ref=REF138351001";
  const referralCode = "REF138351001";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // ❌ Removed alert
  };

  const shareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join SolarX",
          text: "Join SolarX and start earning with me!",
          url: referralLink,
        });
        console.log("Link shared successfully!");
      } catch (err) {
        console.error("Sharing failed:", err.message);
      }
    } else {
      // Fallback: copy silently
      copyToClipboard(referralLink);
    }
  };

  return (
    <div className="invite-card">
      <h3 className="invite-heading">🔗 Referral Program</h3>
      <div className="invite-info-box">
        <strong>Earn with Referrals</strong>
        <ul>
          <li>Level 1: 8% from direct referrals</li>
          <li>Level 2: 3% from their referrals</li>
          <li>Level 3: 2% from third level</li>
        </ul>
      </div>

      <div className="invite-field">
        <label>Your Referral Link</label>
        <div className="invite-input-wrapper">
          <input type="text" value={referralLink} readOnly />
          <button onClick={() => copyToClipboard(referralLink)}>
            <FaCopy />
          </button>
        </div>
      </div>

      <div className="invite-field">
        <label>Your Referral Code</label>
        <div className="invite-input-wrapper purple">
          <input type="text" value={referralCode} readOnly />
          <button onClick={() => copyToClipboard(referralCode)}>
            <FaCopy />
          </button>
        </div>
      </div>

      <div className="invite-actions">
        <button className="btn share" onClick={shareLink}>
          <FaShareAlt /> Share Link
        </button>
        <button
          className="btn copy"
          onClick={() => copyToClipboard(referralLink)}
        >
          <FaCopy /> Copy Link
        </button>
      </div>
    </div>
  );
};

// TeamDataScreen and TeamDetailsScreen remain unchanged...

const TeamDataScreen = () => {
  return (
    <div className="team-data-container">
      <div className="team-summary-cards">
        <div className="summary-card blue">
          <h4>Total Team</h4>
          <p>1</p>
        </div>
        <div className="summary-card green">
          <h4>Total Team Commission</h4>
          <p>PKR 0</p>
        </div>
      </div>

      {/* Level 1 */}
      <div className="team-referral-card">
        <div className="referral-header">
          <h3>Level 1 – Direct Referrals 👥</h3>
          <span className="referral-percent">8%</span>
        </div>

        <p>
          Today New User: <span>1</span>
        </p>
        <p>
          Total Active User: <span>1</span>
        </p>
        <p>
          Total Users: <span>1</span>
        </p>

        <p>
          Today Team Deposit: <span>0 PKR</span>
        </p>
        <p>
          Total Team Deposit: <span>0 PKR</span>
        </p>

        <p>
          Today Team Withdrawal: <span>0 PKR</span>
        </p>
        <p>
          Total Team Withdrawal: <span>0 PKR</span>
        </p>
      </div>

      {/* Level 2 */}
      <div className="team-referral-card">
        <div className="referral-header">
          <h3>Level 2 – Indirect Referrals 👥</h3>
          <span className="referral-percent">3%</span>
        </div>
        <p>
          Today New User: <span>1</span>
        </p>
        <p>
          Total Active User: <span>1</span>
        </p>
        <p>
          Total Users: <span>1</span>
        </p>

        <p>
          Today Team Deposit: <span>0 PKR</span>
        </p>
        <p>
          Total Team Deposit: <span>0 PKR</span>
        </p>

        <p>
          Today Team Withdrawal: <span>0 PKR</span>
        </p>
        <p>
          Total Team Withdrawal: <span>0 PKR</span>
        </p>
      </div>

      {/* Level 3 */}
      <div className="team-referral-card">
        <div className="referral-header">
          <h3>Level 3 – Extended Referrals 👥</h3>
          <span className="referral-percent">2%</span>
        </div>
        <p>
          Today New User: <span>1</span>
        </p>
        <p>
          Total Active User: <span>1</span>
        </p>
        <p>
          Total Users: <span>1</span>
        </p>

        <p>
          Today Team Deposit: <span>0 PKR</span>
        </p>
        <p>
          Total Team Deposit: <span>0 PKR</span>
        </p>

        <p>
          Today Team Withdrawal: <span>0 PKR</span>
        </p>
        <p>
          Total Team Withdrawal: <span>0 PKR</span>
        </p>
      </div>
    </div>
  );
};

const TeamDetailsScreen = () => {
  const [activeLevel, setActiveLevel] = useState("level1");

  const teamData = {
    level1: [
      {
        Upliner: "Farhan",
        name: "Sajid Khan",
        whatsapp: "0300*******",
        investment: 0,
        withdraw: 0,
        joiningDate: "20/07/2024 11:32 AM",
      },
      {
        Upliner: "Farhan",
        name: "Ali Raza",
        whatsapp: "0306*******",
        investment: 1000,
        withdraw: 0,
        joiningDate: "15/07/2024 03:11 PM",
      },
      {
        Upliner: "Farhan",
        name: "Umar Farooq",
        whatsapp: "0332*******",
        investment: 1500,
        withdraw: 0,
        joiningDate: "09/07/2024 09:45 AM",
      },
    ],
    level2: [
      {
        Upliner: "Farhan",
        name: "Ahmed Khan",
        whatsapp: "0304*******",
        investment: 0,
        withdraw: 0,
        joiningDate: "17/07/2024 12:08 PM",
      },
      {
        Upliner: "Farhan",
        name: "Bilal Shah",
        whatsapp: "0312*******",
        investment: 0,
        withdraw: 0,
        joiningDate: "11/07/2024 04:30 PM",
      },
      {
        Upliner: "Farhan",
        name: "Talha Malik",
        whatsapp: "0321*******",
        investment: 0,
        withdraw: 0,
        joiningDate: "07/07/2024 08:21 AM",
      },
    ],
    level3: [
      {
        Upliner: "Farhan",
        name: "Noman Ali",
        whatsapp: "0302*******",
        investment: 0,
        withdraw: 0,
        joiningDate: "05/07/2024 10:14 AM",
      },
      {
        Upliner: "Farhan",
        name: "Salman Musa",
        whatsapp: "0301*******",
        investment: 0,
        withdraw: 0,
        joiningDate: "29/06/2024 05:43 PM",
      },
      {
        Upliner: "Farhan",
        name: "Hamza Rehman",
        whatsapp: "0309*******",
        investment: 0,
        withdraw: 0,
        joiningDate: "23/06/2024 02:05 PM",
      },
    ],
  };

  return (
    <div className="team-details-wrapper">
      <h2 className="team-details-title">
        <FaUsers /> My Invite User Details
      </h2>

      <div className="team-details-tabs">
        <button
          className={`tab-button ${activeLevel === "level1" ? "active" : ""}`}
          onClick={() => setActiveLevel("level1")}
        >
          Level (1)
        </button>
        <button
          className={`tab-button ${activeLevel === "level2" ? "active" : ""}`}
          onClick={() => setActiveLevel("level2")}
        >
          Level (2)
        </button>
        <button
          className={`tab-button ${activeLevel === "level3" ? "active" : ""}`}
          onClick={() => setActiveLevel("level3")}
        >
          Level (3)
        </button>
      </div>

      <div
        className={`team-details-list ${
          activeLevel === "level2"
            ? "level-2"
            : activeLevel === "level3"
            ? "level-3"
            : "level-1"
        }`}
      >
        {teamData[activeLevel].length === 0 ? (
          <p className="no-users">
            {activeLevel === "level1"
              ? "No users in Level 1"
              : activeLevel === "level2"
              ? "No users in Level 2"
              : "No users in Level 3"}
          </p>
        ) : (
          teamData[activeLevel].map((user, index) => (
            <div className="user-cardteam" key={index}>
              <p>
                <strong>Upliner:</strong>{" "}
                {user.Upliner ? (
                  <span className="blue">{user.Upliner}</span>
                ) : (
                  "-"
                )}
              </p>
              <p>
                <strong>User Name:</strong>{" "}
                {user.name ? <span className="blue">{user.name}</span> : "-"}
              </p>
              <p>
                <strong>Whatsapp No:</strong>{" "}
                {user.whatsapp ? (
                  <span className="blue">{user.whatsapp}</span>
                ) : (
                  "-"
                )}
              </p>
              <p>
                <strong>Joining Date:</strong>{" "}
                {user.joiningDate ? (
                  <span className="blue">{user.joiningDate}</span>
                ) : (
                  "-"
                )}
              </p>
              <p>
                <strong>Investment:</strong>{" "}
                {user.investment !== undefined ? `${user.investment} PKR` : "-"}
              </p>
              <p>
                <strong>Withdraw:</strong>{" "}
                {user.withdraw !== undefined ? `${user.withdraw} PKR` : "-"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Team;
