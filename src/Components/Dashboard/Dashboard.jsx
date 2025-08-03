import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaHome,
  FaRocket,
  FaUser,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import logo from "../../Assets/Pictures/Solarxlogo.jpeg";
import "./Dashboard.css";

import img1 from "../../Assets/Pictures/photo-1544197150-b99a580bb7a8.jpeg";
import img2 from "../../Assets/Pictures/photo-1558494949-ef010cbdcc31.jpeg";
import img3 from "../../Assets/Pictures/photo-1621761191319-c6fb62004040.jpeg";
import img4 from "../../Assets/Pictures/photo-1639762681485-074b7f938ba0.jpeg";

const images = [img1, img2, img3, img4];

export default function Dashboard() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="dashboard">
      <header className="header">
        <div className="meta-miner">
          <img src={logo} alt="avatar" className="avatar" />
          <div>
            <h2>SOLAR X</h2>
            <p className="yellowtxt">Welcome back, Muhammad Farhan</p>
          </div>
        </div>
        <button className="refresh-btn">Refresh Balance</button>
      </header>

      <div className="slider-container">
        <img
          src={images[currentImageIndex]}
          alt="slider"
          className="slider-image"
        />
        <button className="slider-btn left" onClick={handlePrev}>
          <FaArrowLeft />
        </button>
        <button className="slider-btn right" onClick={handleNext}>
          <FaArrowRight />
        </button>
        <div className="slider-caption">
          <h2>Mining Server Facility</h2>
          <p className="desc">High-Performance Computing Center</p>
          <div className="badges">
            <span className="badge green">Up to $720/day profit</span>
            <span className="badge blue">4200+ TH/s</span>
          </div>
          <p className="desc">
            Professional server room with organized mining hardware and advanced
            thermal management
          </p>
        </div>
      </div>

      <div className="info-cards">
        <div className="info-card">
          <h4>Total Balance</h4>
          <p className="balancepkr">0 PKR</p>
        </div>
        <div className="info-card">
          <h4>Total Earnings</h4>
          <p className="earnpkr">0 PKR</p>
        </div>
        <div className="info-card">
          <h4>Referral Bonus</h4>
          <p className="refrpkr">0 PKR</p>
        </div>
      </div>

      <div className="actions">
        <div className="action-card">
          <div className="icon purple">
            <FaWallet />
          </div>
          <h3 className="padd">Quick Deposit</h3>
          <p className="grey">Add funds to your mining wallet</p>
        </div>
        <div className="action-card">
          <div className="icon green">
            <FaRocket />
          </div>
          <h3 className="padd">Start Mining</h3>
          <p className="grey">Choose a mining plan to begin</p>
        </div>
      </div>

      <div className="plans-section">
        <h1 className="popularmine">Popular Mining Plans</h1>
        <div className="plans">
          <div className="plan">
            <h3>Starter Plan</h3>
            <p className="rate">7.50%</p>
            <p className="grey">Days</p>
            <p className="grey">Min: 1,000 PKR</p>
            <p className="grey">Max: 3,000 PKR</p>
          </div>
          <div className="plan">
            <h3>Pro Plan</h3>
            <p className="rate">15.40%</p>
            <p className="grey">Days</p>
            <p className="grey">Min: 5,000 PKR</p>
            <p className="grey">Max: 9,999 PKR</p>
          </div>
          <div className="plan">
            <h3>Elite Plan</h3>
            <p className="rate">37.50%</p>
            <p className="grey">Days</p>
            <p className="grey">Min: 10,000 PKR</p>
            <p className="grey">Max: 50,000 PKR</p>
          </div>
        </div>
        <button className="view-all">View All Plans →</button>
      </div>

      <footer className="bottom-nav">
        <button>
          <FaHome />
          <span>Home</span>
        </button>
        <button>
          <FaUsers />
          <span>Team</span>
        </button>
        <button>
          <img className="imgbtnlogo" src={logo} alt="" />
        </button>
        <button>
          <FaRocket />
          <span>Plans</span>
        </button>
        <button>
          <FaUser />
          <span>Profile</span>
        </button>
      </footer>
    </div>
  );
}
