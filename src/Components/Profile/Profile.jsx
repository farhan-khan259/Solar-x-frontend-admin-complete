import { useState } from "react";
import { FaArrowLeft, FaEdit, FaKey, FaSave, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import profileimg from "../../Assets/Pictures/profileelonmusk.jpeg";
import "./Profile.css";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("account");
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => {
    if (isEditing) {
      console.log("Saved data:", formData);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-container7p">
      {/* Center Heading + Back Arrow */}
      <div className="profile-header-wrapper7p">
        <Link to="/setting" className="back-linkpro7p">
          <FaArrowLeft />
        </Link>
        <h2 className="profile-page-heading7p">Profile Settings</h2>
      </div>

      {/* User Info */}
      <div className="profile-header7p">
        <img src={profileimg} alt="Profile" className="profile-avatar7p" />
        <div className="profile-info7p">
          <h3>SAJID KHAN</h3>
          <p>sajimayo786@gmail.com</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs7p">
        <button
          className={`tab7p ${activeTab === "account" ? "active7p" : ""}`}
          onClick={() => setActiveTab("account")}
        >
          <FaUser /> Account
        </button>
        <button
          className={`tab7p ${activeTab === "password" ? "active7p" : ""}`}
          onClick={() => setActiveTab("password")}
        >
          <FaKey /> Change Password
        </button>
      </div>

      {/* Account Section */}
      {activeTab === "account" && (
        <div className="account-section7p">
          <div className="account-header7p">
            <h4>Account</h4>
            <button className="edit-btn7p" onClick={toggleEdit}>
              {isEditing ? <FaSave /> : <FaEdit />}
              {isEditing ? " Save" : " Edit"}
            </button>
          </div>
          <div className="account-grid7p">
            <div className="input-group7p">
              <label> Name</label>
              <input
                type="text"
                name="Name"
                placeholder="Enter your  Name"
                value={formData.Name}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>

            <div className="input-group7p">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="input-group7p">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>
      )}

      {/* Change Password Section */}
      {activeTab === "password" && (
        <div className="account-section7p">
          <div className="account-header7p">
            <h4>Change Password</h4>
            <button
              className="edit-btn7p"
              onClick={() => setIsEditingPassword(!isEditingPassword)}
            >
              {isEditingPassword ? <FaSave /> : <FaEdit />}
              {isEditingPassword ? " Save" : " Edit"}
            </button>
          </div>

          <div className="account-grid7p">
            <div className="input-group7p">
              <label>Old Password</label>
              <input
                type="password"
                placeholder="Enter old password"
                disabled={!isEditingPassword}
              />
            </div>
            <div className="input-group7p">
              <label>New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                disabled={!isEditingPassword}
              />
            </div>
            <div className="input-group7p">
              <label>Confirm New Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                disabled={!isEditingPassword}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
