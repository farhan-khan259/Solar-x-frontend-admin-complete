import { useLocation, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./Activeplans.css";

export default function Activeplans() {
  const { state } = useLocation();
  const plan = state?.plan;

  // Fake dates (90 days plan)
  const startDate = new Date("2025-09-11T22:49:00");
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 90);

  // Countdown Timer (24h)
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}h ${m}m ${s}s Left`;
  };

  if (!plan) {
    return (
      <div className="active-container">
        <div className="active-card">
          <p className="notactive">No Active Plan</p>
          <Link to="/plans">Go back to plans</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="active-container">
      <div className="active-card">
        {/* Top bar */}
        <div className="active-top">
          <Link to="/plans" className="back-link">
            <FaArrowLeft className="back-icon" />
          </Link>
          <h1 className="active-heading">Active Plan Detail’s</h1>
        </div>

        {/* Earning Stats */}
        <div className="stats-row">
          <div className="stat-box blue-green">
            <p>Daily Earning</p>
            <h3>{plan.daily}</h3>
          </div>
          <div className="stat-box blue-green">
            <p>Total Earning</p>
            <h3>{plan.total} PKR</h3>
          </div>
        </div>

        {/* Buttons */}
        <div className="btn-row">
          <button className="btn orange">Active Plan</button>
          <button className="btn red">Cancel Plan</button>
          <button className="btn yellow">Complete Plan</button>
        </div>

        {/* Plan Title */}
        <div className="plan-title-box">
          <h2>{plan.name}</h2>
        </div>

        {/* Circular Timer */}
        <div className="circle-timer">
          <p className="circle-title">Plan Active Timer ⏳</p>
          <p className="circle-time">{formatTime(timeLeft)}</p>
        </div>

        {/* More Information */}
        <div className="more-info">
          <h3>More Information ℹ️</h3>
          <div className="info-item">
            <b>Investment:</b> <span className="red">{plan.amount} PKR</span>
          </div>
          <div className="info-item">
            <b>Daily Earning:</b> <span className="blue">{plan.daily}</span>
          </div>
          <div className="info-item">
            <b>Total Earning:</b> <span className="red">{plan.total} PKR</span>
          </div>
          <div className="info-item">
            <b>Expiring Day’s:</b> <span className="pink">90 Day’s</span>
          </div>
          <div className="info-item">
            <b>Start Date:</b>{" "}
            <span className="blue">{startDate.toLocaleString()}</span>
          </div>
          <div className="info-item">
            <b>Last Date:</b>{" "}
            <span className="blue">{endDate.toLocaleString()}</span>
          </div>
        </div>

        {/* Capital Back */}
        <div className="capital-box">Capital Back Yes 💯</div>
      </div>
    </div>
  );
}
