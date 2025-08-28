import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/Pictures/Solarxlogo.jpeg";
import "./Signin.css";

export default function Signin() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || password.trim() === "") {
      setPopupTitle("Invalid Credentials");
      setPopupMessage("Email or password does not match.");
      setShowPopup(true);
      return;
    }

    // Check admin credentials
    if (email === "adminsolarx001@gmail.com" && password === "admin@001") {
      navigate("/admin");
    } else {
      // Redirect regular users
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <img src={logo} alt="Bot Icon" className="bot-icon" />
        <h2 className="title">WELCOME BACK!</h2>
        <p className="subtitle">Sign in to Solar X</p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <div className="input-icon-box">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

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

          <p className="forget">
            <Link to="/forgetpassword"> forget password?</Link>
          </p>

          {/* Submit button now calls handleSubmit, no Link inside */}
          <button type="submit" className="login-btn">
            Sign In
          </button>

          <p className="footer-text">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>❌ {popupTitle}</h2>
            <p>{popupMessage}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
