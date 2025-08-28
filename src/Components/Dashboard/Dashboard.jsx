import { useEffect, useState } from "react";
import { FaHandHoldingUsd, FaRegMoneyBillAlt } from "react-icons/fa";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBarChart2,
  FiBell,
  FiGrid,
  FiHeadphones,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import profileimg from "../../Assets/Pictures/download.jpg";
import "./Dashboard.css";

import img2 from "../../Assets/Pictures/1a.jpeg";
import img3 from "../../Assets/Pictures/1b.jpeg";
import img4 from "../../Assets/Pictures/1c.jpeg";
import img1 from "../../Assets/Pictures/1d.jpeg";
import Newsboard from "../Newsboard/Newsboard";

const slides = [
  {
    image: img1,
    title: "Mining Server Facility",
    subtitle: "High-Performance Computing Center",
    profit: "$720/day",
    hashpower: "4200+ TH/s",
    description:
      "Professional server room with organized mining hardware and advanced thermal management",
  },
  {
    image: img2,
    title: "Solar X Power Hub",
    subtitle: "Sustainable Mining Through Solar Energy",
    profit: "$650/day",
    hashpower: "3900+ TH/s",
    description:
      "Eco-friendly mining infrastructure using solar power for low-cost, green crypto operations.",
  },
  {
    image: img3,
    title: "HelioMine Complex",
    subtitle: "Sun-Powered Blockchain Infrastructure",
    profit: "$980/day",
    hashpower: "6900+ TH/s",
    description:
      "Advanced ASIC units running on solar arrays for maximum sustainability and ROI.",
  },
  {
    image: img4,
    title: "NextGen Solar Vault",
    subtitle: "Future-Proof, Zero-Emission Mining",
    profit: "$810/day",
    hashpower: "5100+ TH/s",
    description:
      "Solar-powered mining facility with smart energy balancing and uptime optimization.",
  },
];

export default function Dashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const { image, title, subtitle, profit, hashpower, description } =
    slides[currentIndex];

  return (
    <div className="dashboard">
      {/* New Header */}
      <header className="headerd">
        <div className="header-leftd">
          <img
            src={profileimg} // Replace with your image
            alt="profile"
            className="profile-picd"
          />
        </div>

        <div className="header-centerd">
          <h1 className="header-titled">SOLAR X DASHBOARD</h1>
        </div>

        <div className="header-rightd">
          <Link to="/support">
            <FiHeadphones className="header-icond" title="Customer Support" />
          </Link>

          <Link to="/transactionhistory">
            <FiBell className="header-icond" title="Notifications" />
          </Link>
        </div>
      </header>

      {/* Slider */}
      <div className="slider-container">
        <img src={image} alt="slider" className="slider-image" />
        <button className="slider-btn left" onClick={handlePrev}>
          <FiArrowLeft />
        </button>
        <button className="slider-btn right" onClick={handleNext}>
          <FiArrowRight />
        </button>
        <div className="slider-caption">
          <h1 className="bannerh1txt">{title}</h1>
          <p className="desc">{subtitle}</p>
          <div className="badges">
            <span className="badge green">Up to {profit} profit</span>
            <span className="badge blue">{hashpower}</span>
          </div>
          <p className="desc">{description}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="actions">
        <div className="action-card">
          <div className="icon purple">
            <FaRegMoneyBillAlt />
          </div>
          <h2 className="padd">Quick Deposit</h2>
          <p className="grey">Deposit your funds 24/7</p>
          <button className="card-btn orange">
            <Link to="/deposit">Money In</Link>
          </button>
        </div>
        <div className="action-card2">
          <div className="icon green">
            <FaHandHoldingUsd />
          </div>
          <h2 className="padd">Quick Withdraw</h2>
          <p className="grey">Withdraw your funds 24/7</p>
          <button className="card-btn green">
            <Link to="/withdraw">Money Out</Link>
          </button>
        </div>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="info-card">
          <div className="card-top">
            <div>
              <h2 className="resbal">Total Balance</h2>
              <p className="balancepkr">0 PKR</p>
            </div>
          </div>
        </div>

        <div className="info-card2">
          <div className="card-top">
            <div>
              <h2 className="resbal">Total Withdraw</h2>
              <p className="earnpkr">0 PKR</p>
            </div>
          </div>
        </div>
      </div>

      <div className="newsdash">
        <Newsboard />
      </div>

      {/* Bottom Nav */}
      <footer className="bottom-nav">
        <Link to="/dashboard">
          <button>
            <FiGrid />
            <span>Dashboard</span>
          </button>
        </Link>
        <Link to="/team">
          <button>
            <FiUsers />
            <span>About Team</span>
          </button>
        </Link>
        <Link to="/plans">
          <button>
            <FiBarChart2 />
            <span> Plans</span>
          </button>
        </Link>
        <Link to="/setting">
          <button>
            <FiSettings />
            <span>Settings</span>
          </button>
        </Link>
      </footer>
    </div>
  );
}
