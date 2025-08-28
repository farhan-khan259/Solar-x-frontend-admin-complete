import { useRef, useState } from "react";
import {
  FaArrowLeft,
  FaCamera,
  FaChevronRight,
  FaCoins,
  FaHistory,
  FaLifeRing,
  FaMoneyCheckAlt,
  FaSignOutAlt,
  FaTicketAlt,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { Link } from "react-router-dom";
import profileImg from "../../Assets/Pictures/profileelonmusk.jpeg";
import "./Settings.css";

export default function Settings() {
  const [userImage, setUserImage] = useState(profileImg);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const fileRef = useRef(null);

  const handleImageClick = () => fileRef.current.click();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setUserImage(URL.createObjectURL(file));
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <Link to="/dashboard">
          <FaArrowLeft className="back-icon" />
        </Link>
        <h2>Settings</h2>
        <img
          src={userImage}
          className="header-avatar"
          onClick={() => setShowProfilePopup(!showProfilePopup)}
          alt="Profile"
        />
      </div>

      {showProfilePopup && (
        <div className="profile-popup">
          <p className="email grey">user123@gmail.com</p>
          <Link to="/">
            <button className="logout-btn">Logout</button>
          </Link>
        </div>
      )}

      <div className="profile-card">
        <div className="avatar-container" onClick={handleImageClick}>
          <img src={userImage} className="user-avatar" alt="User" />
          <div className="camera-icon">
            <FaCamera />
          </div>
          <input
            ref={fileRef}
            onChange={handleFileChange}
            accept="image/*"
            type="file"
            hidden
          />
        </div>
        <div className="user-info">
          <p className="uid">UID: REF138351001</p>
          <p className="email">10/August/2025 6:02 AM</p>
        </div>
      </div>

      {/* Balance Cards */}
      <div className="balance-row">
        <div className="balance-card">
          <FaMoneyCheckAlt className="balance-icon" />
          <p className="balance-title">Total Deposit</p>
          <span>PKR 0</span>
        </div>
        <div className="balance-card">
          <FaCoins className="balance-icon" />
          <p className="balance-title">Total Team Commission</p>
          <span>PKR 0</span>
        </div>
      </div>

      <div className="menu-list">
        <Link to="/profile">
          <MenuItem icon={<FaUser />} label="Profile" />
        </Link>
        <Link to="/rankingdashboard">
          <MenuItem icon={<FaUsers />} label="Ranking Levels" />
        </Link>
        <Link to="/promocode">
          <MenuItem icon={<FaTicketAlt />} label="Promo Code" />
        </Link>
        <Link to="/transactionhistory">
          <MenuItem icon={<FaHistory />} label="Transaction History" />
        </Link>
        <Link to="/activeplans">
          <MenuItem icon={<MdAssignmentTurnedIn />} label="Active Plans" />
        </Link>
        <Link to="/support">
          <MenuItem icon={<FaLifeRing />} label="Support" />
        </Link>

        {/* Logout Menu */}
        <Link to="/">
          <div className="menu-item logout-item">
            <div className="menu-icon">
              <FaSignOutAlt />
            </div>
            <span className="menu-label">Logout</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

function MenuItem({ icon, label }) {
  return (
    <div className="menu-item">
      <div className="menu-icon">{icon}</div>
      <span className="menu-label">{label}</span>
      <FaChevronRight className="arrow-icon" />
    </div>
  );
}
