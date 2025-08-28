import { FaArrowLeft, FaLock, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Withdraw.css";

const Withdraw = () => {
  return (
    <div className="withdraw-container">
      <div className="headerwd">
        <Link className="back-linkwd" to="/dashboard">
          <FaArrowLeft />
        </Link>
        <span>Withdraw Funds</span>
      </div>

      <div className="balance-card">
        <div>
          <span className="balance-label">Available Balance</span>
          <div className="balance-amount">0 PKR</div>
        </div>
      </div>

      <div className="step-card">
        <div className="step-title">Step 1: Withdrawal Account Status</div>
        <div className="status">
          <FaLock className="status-icon" />
          <div className="status-text">Account Not Bound</div>
          <div className="status-subtext">
            You must bind your withdrawal account before applying for a
            withdrawal.
          </div>
          <button className="bind-btn">
            <Link to="/withdrawform">
              <FaWallet className="btn-icon" /> Bind Account Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
