import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Pictures/Solarxlogo.jpeg";
import "./Forgetpassword.css";

export default function Forgetpassword() {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorTitle("Passwords do not match");
      setErrorMessage("Please make sure both passwords are the same.");
      setShowError(true);
      return;
    }

    if (otp.length !== 5) {
      setErrorTitle("Invalid OTP");
      setErrorMessage("OTP must be 5 digits.");
      setShowError(true);
      return;
    }

    setShowSuccess(true);
  };

  return (
    <div className="login-page4">
      <div className="login-box4">
        <img src={logo} alt="Bot Icon" className="bot-icon4" />
        <h2 className="title4">RESET LOGIN PASSWORD</h2>
        <p className="subtitle4">Recover access to your Solar X</p>

        <form onSubmit={handleSubmit}>
          <label className="label4">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="input4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="label4">OTP (5 Digit)</label>
          <div className="otp-box4-column">
            <input
              type="text"
              maxLength={5}
              placeholder="Enter OTP"
              className="otp-input4"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
              required
            />
            <button type="button" className="get-otp-btn4">
              Get OTP
            </button>
          </div>

          <label className="label4">New Password</label>
          <input
            type="password"
            placeholder="Enter 6 digit password"
            className="input4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="label4">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="input4"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn4">
            Confirm
          </button>
        </form>

        <p className="footer-text4">
          Remembered password? <Link to="/">Sign In</Link>
        </p>
      </div>

      {/* Error Popup */}
      {showError && (
        <div className="deposit-success-overlay">
          <div className="deposit-success-box">
            <h2>❌ {errorTitle}</h2>
            <p>{errorMessage}</p>
            <button onClick={() => setShowError(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccess && (
        <div className="deposit-success-overlay">
          <div className="deposit-success-box">
            <h2>✅ Password Reset Successfully</h2>
            <p>Your password has been updated.</p>
            <button onClick={() => setShowSuccess(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
