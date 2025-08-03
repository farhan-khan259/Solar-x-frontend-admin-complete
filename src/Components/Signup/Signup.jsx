import { Link } from "react-router-dom";
import logo from "../../Assets/Pictures/Solarxlogo.jpeg";
import "./Signup.css";

export default function Signup() {
  return (
    <>
      <div className="signup-wrapper">
        <div className="form-container">
          <div className="form-header">
            <img src={logo} alt="Meta Miner" className="logo" />
            <h2>Join SOLAR X</h2>
            <p>Create your account to start earning with solar mining</p>
          </div>

          <form>
            <label>WhatsApp Number *</label>
            <div className="input-group">
              <span className="icon">📱</span>
              <input type="text" placeholder="03XXXXXXXXX" />
            </div>
            <small>Format: 03XXXXXXXXX</small>

            <label>Full Name *</label>
            <input type="text" placeholder="Enter your full name" />

            <label>Password *</label>
            <input type="password" placeholder="Minimum 6 characters" />

            <label>Confirm Password *</label>
            <input type="password" placeholder="Re-enter your password" />

            <label>Referral Code (Optional)</label>
            <input type="text" placeholder="Enter referral code (optional)" />
            <small>
              If you have a referral code from a friend, enter it here to earn
              bonuses.
            </small>

            <button type="submit">Create Account & Start Mining</button>

            <p className="signin-link">
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>

            <p className="policy-text">
              By creating an account, you agree to our{" "}
              <Link to="/signup">Terms of Service</Link> and{" "}
              <Link to="/signup">Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
