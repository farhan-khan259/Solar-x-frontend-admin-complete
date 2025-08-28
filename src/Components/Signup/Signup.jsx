import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Pictures/Solarxlogo.jpeg";
import "./Signup.css";

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [whatsAppNumber, setWhatsAppNumber] = useState("+92");

  const [showPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPopupTitle("Passwords do not match");
      setPopupMessage("Please make sure both passwords are the same.");
      setShowPopup(true);
      return;
    }

    if (!referralCode) {
      setPopupTitle("Referral Code Required");
      setPopupMessage("Please enter a referral code to proceed.");
      setShowPopup(true);
      return;
    }

    try {
      const res = await axios.post("http://localhost:9005/api/v1/Auth/signup", {
        fullName,
        whatsappNumber: whatsAppNumber,
        referalCode: referralCode, // match your backend field
        password,
        confirmpassword: confirmPassword,
        email,
      });

      // If success
      setShowSuccess(true);
      console.log("Signup Success:", res.data);
    } catch (error) {
      console.error(error);
      setPopupTitle("Signup Failed");
      setPopupMessage(
        error.response?.data?.message || "Something went wrong. Try again!"
      );
      setShowPopup(true);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="form-container">
        <div className="form-header">
          <img src={logo} alt="Solar X" className="logo" />
          <h2>Join SOLAR X</h2>
          <p>Create your account to start earning with Solar X</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>WhatsApp Number *</label>
          <input
            type="text"
            placeholder="+92XXXXXXXXXX"
            className="input4"
            value={whatsAppNumber}
            onChange={(e) => {
              let value = e.target.value;
              if (!value.startsWith("+92")) {
                value = "+92" + value.replace(/^(\+92)?/, "");
              }
              const onlyDigits = value
                .replace("+92", "")
                .replace(/[^0-9]/g, "")
                .slice(0, 10);
              setWhatsAppNumber("+92" + onlyDigits);
            }}
            required
          />

          <label>Full Name *</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label>Email *</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <div className="input-icon-box">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? "🙈" : "👁️"}
            </span>
          </div>

          <label>Confirm Password</label>
          <div className="input-icon-box">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? "🙈" : "👁️"}
            </span>
          </div>

          <label>Referral Code *</label>
          <input
            type="text"
            placeholder="Enter referral code"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
            required
          />

          <button type="submit">Create Account & Start Earning</button>

          <p className="signin-link">
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </form>
      </div>

      {/* Error Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>❌ {popupTitle}</h2>
            <p>{popupMessage}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccess && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>✅ Account Created</h2>
            <p>Your account has been created successfully!</p>
            <button onClick={() => setShowSuccess(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
