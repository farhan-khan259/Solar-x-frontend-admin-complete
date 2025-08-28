import { useLocation, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Activeplans.css";

export default function Activeplans() {
  const { state } = useLocation();
  const plan = state?.plan;

  if (!plan) {
    return (
      <div className="container">
        <div className="card">
          <p className="notactive">No Active Plan</p>
          <Link to="/plans">Go back to plans</Link>
        </div>
      </div>
    );
  }

  // Demo dates
  const startDate = "8/1/2025";
  const endDate = "8/4/2025";

  return (
    <div className="container">
      <div className="card">
        <div className="top-bar">
          <Link to="/plans" className="back-link">
            <FaArrowLeft className="back-icon" />
          </Link>
          <h1 className="main-heading">Active Plans</h1>
        </div>

        <div className="plan">
          <div className="plan-header">
            <span className="plan-title">Starter Boost Plan</span>
            <span className="status active">Active</span>
          </div>

          <div className="plan-details">
            <div className="detail">
              <span>Invested:</span>
              <span className="value">{plan.amount} PKR</span>
            </div>
            <div className="detail">
              <span>Daily Return:</span>
              <span className="value green">{plan.daily}</span>
            </div>
            <div className="detail">
              <span>Total Profit:</span>
              <span className="value purple">{plan.total} PKR</span>
            </div>
            <div className="detail">
              <span>Start Date:</span>
              <span className="value">{startDate}</span>
            </div>
            <div className="detail">
              <span>End Date:</span>
              <span className="value">{endDate}</span>
            </div>
          </div>

          <div className="progress-bar">
            <div className="progress" style={{ width: "25%" }}></div>
          </div>

          <div className="timer">⏳ 2d 1h 4m 15s Left</div>
        </div>
      </div>
    </div>
  );
}
