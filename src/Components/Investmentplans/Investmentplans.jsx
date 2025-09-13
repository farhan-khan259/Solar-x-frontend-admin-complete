import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Investmentplans.css";

import img1 from "../../Assets/Pictures/planpic1.jpeg";
import img10 from "../../Assets/Pictures/planpic10.jpeg";
import img2 from "../../Assets/Pictures/planpic2.jpeg";
import img3 from "../../Assets/Pictures/planpic3.jpeg";
import img4 from "../../Assets/Pictures/planpic4.jpeg";
import img5 from "../../Assets/Pictures/planpic5.jpeg";
import img6 from "../../Assets/Pictures/planpic6.jpeg";
import img7 from "../../Assets/Pictures/planpic7.jpeg";
import img8 from "../../Assets/Pictures/planpic8.jpeg";
import img9 from "../../Assets/Pictures/planpic9.jpeg";

const plans = [
  {
    name: "Starter Boost Plan: 1",
    img: img1,
    members: 100,
    amount: 1500,
    daily: "55 PKR",
    total: 4950,
    validity: "90 Days",
    locked: false,
  },
  {
    name: "Growth Accelerator Plan: 2",
    img: img2,
    members: 50,
    amount: 3000,
    daily: "120 PKR",
    total: 10800,
    validity: "60 Days",
    locked: false,
  },
  {
    name: "SolarSaver Plan: 3",
    img: img3,
    members: 75,
    amount: 5000,
    daily: "210 PKR",
    total: 18900,
    validity: "90 Days",
    locked: true,
  },
  {
    name: "Prosperity Plan: 4",
    img: img4,
    members: 120,
    amount: 10000,
    daily: "430 PKR",
    total: 38700,
    validity: "90 Days",
    locked: true,
  },
  {
    name: "Wealth Builder Plan: 5",
    img: img5,
    members: 80,
    amount: 15000,
    daily: "660 PKR",
    total: 59400,
    validity: "90 Days",
    locked: true,
  },
  {
    name: "EcoEnergy Plan: 6",
    img: img6,
    members: 95,
    amount: 20000,
    daily: "900 PKR",
    total: 81000,
    validity: "90 Days",
    locked: true,
  },
  {
    name: "FutureFortune Plan: 7",
    img: img7,
    members: 60,
    amount: 30000,
    daily: "1400 PKR",
    total: 126000,
    validity: "90 Days",
    locked: true,
  },
  {
    name: "SmartInvest Plan: 8",
    img: img8,
    members: 40,
    amount: 40000,
    daily: "1920 PKR",
    total: 172800,
    validity: "90 Days",
    locked: true,
  },
  {
    name: "Premium Returns Plan: 9",
    img: img9,
    members: 30,
    amount: 50000,
    daily: "2450 PKR",
    total: 220500,
    validity: "90 Days",
    locked: true,
  },
  {
    name: "Premium Builder Plan: 10",
    img: img10,
    members: 20,
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

  const userBalance = 20000; // simulate user balance

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
          <div key={index} className="plan-card5">
            {/* Header */}
            <div className="plan-header5">
              <img src={plan.img} alt="Plan Logo" className="plan-logo5" />
              <div className="active-users5">
                <b>ACTIVE USERS 💪</b>
                <span>{plan.members}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="plan-title5">{plan.name}</h2>

            {/* Plan Details */}
            <div className="plan-details5">
              <p>
                <b className="label-green">Investment:</b>{" "}
                <span className="orange">{plan.amount} PKR</span>
              </p>
              <p>
                <b className="label-red">Daily Earning:</b>{" "}
                <span className="green">{plan.daily}</span>
              </p>
              <p>
                <b className="label-orange">Total Earning:</b>{" "}
                <span className="red">{plan.total} PKR</span>
              </p>
              <p>
                <b className="label-purple">Plan Expired:</b>{" "}
                <span className="blue">{plan.validity}</span>
              </p>
              <p>
                <b className="label-blue">Earning Return Time:</b>{" "}
                <span className="green">24 Hours After</span>
              </p>
            </div>

            {/* Subscribe Button */}
            <div className="subscribe-section5">
              <button
                disabled={plan.locked}
                onClick={() => handleSubscribe(plan)}
                className={`subscribe-btn5 ${plan.locked ? "locked-btn" : ""}`}
              >
                {plan.locked ? "Locked 🔒" : "Subscribe Plan"}
              </button>
              {plan.locked && (
                <p className="coming-soon5">Plans are Locked 🔐 Coming Soon</p>
              )}
            </div>
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
