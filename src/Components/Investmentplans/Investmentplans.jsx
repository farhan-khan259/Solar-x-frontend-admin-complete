import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Investmentplans.css";

import img1 from "../../Assets/Pictures/pic1.jpeg";
import img10 from "../../Assets/Pictures/pic10.jpeg";
import img2 from "../../Assets/Pictures/pic2.jpeg";
import img3 from "../../Assets/Pictures/pic3.jpeg";
import img4 from "../../Assets/Pictures/pic4.jpeg";
import img5 from "../../Assets/Pictures/pic5.jpeg";
import img6 from "../../Assets/Pictures/pic6.jpeg";
import img7 from "../../Assets/Pictures/pic7.jpeg";
import img8 from "../../Assets/Pictures/pic8.jpeg";
import img9 from "../../Assets/Pictures/pic9.jpeg";

const plans = [
  {
    name: "Starter Boost Plan",
    img: img1,
    members: 10,
    amount: 1500,
    daily: "55 PKR",
    total: 4950,
    validity: "90 Days",
    locked: false,
  },
  {
    name: "Growth Accelerator Plan",
    img: img2,
    members: 20,
    amount: 3000,
    daily: "120 PKR",
    total: 10800,
    validity: "60 Days",
    locked: false,
  },
  {
    name: "SolarSaver Plan",
    img: img3,
    members: 30,
    amount: 5000,
    daily: "210 PKR",
    total: 18900,
    validity: "90 Days",
    locked: true,
  },
  {
    name: "Prosperity Plan",
    img: img4,
    members: 40,
    amount: 10000,
    daily: "430 PKR",
    total: 38700,
    validity: "90 Days",
    locked: true,
  },
  {
    name: "Wealth Builder Plan",
    img: img5,
    members: 50,
    amount: 15000,
    daily: "660 PKR",
    total: 59400,
    validity: "90 Days",
    locked: true,
  },
  {
    name: "EcoEnergy Plan",
    img: img6,
    members: 60,
    amount: 20000,
    daily: "900 PKR",
    total: 81000,
    validity: "90 Days",
    locked: true,
  },
  {
    name: "FutureFortune Plan",
    img: img7,
    members: 70,
    amount: 30000,
    daily: "1400 PKR",
    total: 126000,
    validity: "90 Days",
    locked: true,
  },
  {
    name: "SmartInvest Plan",
    img: img8,
    members: 80,
    amount: 40000,
    daily: "1920 PKR",
    total: 172800,
    validity: "90 Days",
    locked: true,
  },
  {
    name: "Premium Returns Plan",
    img: img9,
    members: 90,
    amount: 50000,
    daily: "2450 PKR",
    total: 220500,
    validity: "90 Days",
    locked: true,
  },
  {
    name: "Premium Builder Plan",
    img: img10,
    members: 100,
    amount: 70000,
    daily: "3500 PKR",
    total: 315000,
    validity: "90 Days",
    locked: true,
  },
];

export default function Investmentplans() {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  const userBalance = 20000; // <-- Change to real user balance

  const handleSubscribe = (plan) => {
    if (plan.locked) return;
    if (userBalance < plan.amount) {
      setShowError(true);
    } else {
      navigate("/activeplans", { state: { plan } });
    }
  };

  return (
    <div className="app5">
      <div className="plans-header5">
        <Link to="/dashboard" className="back-btn5">
          <FaArrowLeft />
        </Link>
        <h1 className="main-heading5">SOLAR X INVESTMENT PANEL</h1>
      </div>

      <div className="plans5">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="card5"
            onClick={() => handleSubscribe(plan)}
          >
            <div className="card-header5">
              <img src={plan.img} alt="Plan" className="icon5" />
              <div className="members5">👤 {plan.members}</div>
            </div>

            <h2 className="plan-name">{plan.name}</h2>
            <p className="plan-info">
              <b>Investment:</b>{" "}
              <span className="value">{plan.amount} PKR</span>
            </p>
            <p className="plan-info">
              <b>Daily Return Profit:</b>{" "}
              <span className="value">{plan.daily}</span>
            </p>
            <div className="separator"></div>
            <p className="plan-info total-profit">
              Total Return Profit: {plan.total} PKR
            </p>
            <p className="plan-info">
              <b>Plan Limit Expire:</b>{" "}
              <span className="value">{plan.validity}</span>
            </p>
            <p className="plan-info">
              <b>Profit Return Time:</b>{" "}
              <span className="value">24 Hours Automatic</span>
            </p>

            <button
              disabled={plan.locked}
              className={`subscribe-btn5 ${plan.locked ? "locked-btn" : ""}`}
            >
              {plan.locked ? "Locked 🔒" : "Subscribe Now"}
            </button>
          </div>
        ))}
      </div>

      {showError && (
        <div className="deposit-success-overlay">
          <div className="deposit-success-box">
            <h2>❌ Insufficient Balance</h2>
            <p>Your balance is not enough to subscribe this plan.</p>
            <button onClick={() => setShowError(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
