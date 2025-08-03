import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Pictures/Solarxlogo.jpeg";
import whatsappIcon from "../../Assets/Pictures/whatsappicon.jpg";
import "./Signin.css";

export default function Signin() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="login-page">
      <div className="login-box">
        <img src={logo} alt="Bot Icon" className="bot-icon" />
        <h2 className="title">JOIN SOLAR X</h2>
        <p className="subtitle">Sign in to your mining empire</p>

        <label>WhatsApp Number</label>
        <div className="input-icon-box">
          <img src={whatsappIcon} alt="WhatsApp" className="icon" />
          <input type="text" placeholder="03XXXXXXXXX" />
        </div>

        <label>Password</label>
        <div className="input-icon-box">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter your password"
          />
          <span
            className="eye-icon"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? "🙈" : "👁️"}
          </span>
        </div>

        <button className="login-btn">
          <Link to="/dashboard">Sign In</Link>
        </button>

        <p className="footer-text">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
