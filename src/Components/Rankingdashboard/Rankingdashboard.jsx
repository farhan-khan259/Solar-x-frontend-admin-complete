import {
  FaArrowLeft,
  FaGift,
  FaUser,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "./Rankingdashboard.css";

// Placeholder tier images
import starterImg from "../../Assets/Pictures/plan1.jpg";
import legendImg from "../../Assets/Pictures/plan10.jpg";
import bronzeImg from "../../Assets/Pictures/plan2.jpg";
import silverImg from "../../Assets/Pictures/plan3.jpg";
import goldImg from "../../Assets/Pictures/plan4.jpg";
import platinumImg from "../../Assets/Pictures/plan5.jpg";
import diamondImg from "../../Assets/Pictures/plan6.jpg";
import masterImg from "../../Assets/Pictures/plan7.jpg";
import grandmasterImg from "../../Assets/Pictures/plan8.jpg";
import eliteImg from "../../Assets/Pictures/plan9.jpg";

export default function Rankingdashboard() {
  const ranks = [
    {
      name: "Starter",
      level: 1,
      personal: 1000,
      team: 25000,
      reward: 500,
      img: starterImg,
    },
    {
      name: "Bronze",
      level: 2,
      personal: 3000,
      team: 50000,
      reward: 1200,
      img: bronzeImg,
    },
    {
      name: "Silver",
      level: 3,
      personal: 5000,
      team: 100000,
      reward: 2500,
      img: silverImg,
    },
    {
      name: "Gold",
      level: 4,
      personal: 10000,
      team: 150000,
      reward: 4500,
      img: goldImg,
    },
    {
      name: "Platinum",
      level: 5,
      personal: 15000,
      team: 200000,
      reward: 7000,
      img: platinumImg,
    },
    {
      name: "Diamond",
      level: 6,
      personal: 20000,
      team: 300000,
      reward: 10000,
      img: diamondImg,
    },
    {
      name: "Master",
      level: 7,
      personal: 30000,
      team: 500000,
      reward: 15000,
      img: masterImg,
    },
    {
      name: "Grandmaster",
      level: 8,
      personal: 40000,
      team: 700000,
      reward: 20000,
      img: grandmasterImg,
    },
    {
      name: "Elite",
      level: 9,
      personal: 50000,
      team: 1000000,
      reward: 25000,
      img: eliteImg,
    },
    {
      name: "Legend",
      level: 10,
      personal: 70000,
      team: 1500000,
      reward: 35000,
      img: legendImg,
    },
  ];

  return (
    <div className="ranking-wrapper8">
      {/* Header */}
      <div className="ranking-header8">
        <Link to="/setting" className="back-link8">
          <FaArrowLeft />
        </Link>
        <h2>Ranking Dashboard</h2>
      </div>

      {/* No Rank Card (styled same as rank cards) */}
      <div className="rank-card8 card8">
        <div className="rank-header8">
          <img src={starterImg} alt="No Rank" />
          <div>
            <h4>No Rank</h4>
            <span className="level8">Current Rank</span>
          </div>
        </div>
        <p>
          <FaUsers /> Team Investment: <strong>PKR 0</strong> / PKR 25000
          <span className="need8">PKR 25000 more needed</span>
        </p>
        <p>
          <FaUser /> Personal Investment: <strong>PKR 0</strong> / PKR 1000
          <span className="need8">PKR 1000 more needed</span>
        </p>
        <div>
          <p>
            <FaUsers /> Team Investment: <strong>PKR 0</strong>
          </p>

          <p>
            <FaUserTie /> Your Total Investment: <strong>PKR 0</strong>
          </p>
        </div>
        <p className="reward8">
          <FaGift /> Next Starter Rank Benefit: <strong>PKR 500 reward</strong>
        </p>
        <div className="progress8">
          <div className="progress-bar8" style={{ width: "0%" }}></div>
        </div>
      </div>

      {/* Ranking Levels */}
      <h3 className="section-title8">Ranking Levels</h3>
      <div className="ranking-grid8">
        {ranks.map((rank, index) => (
          <div key={index} className="rank-card8 card8">
            <div className="rank-header8">
              <img src={rank.img} alt={rank.name} />
              <div>
                <h4>{rank.name}</h4>
                <span className="level8">Level {rank.level}</span>
              </div>
            </div>
            <p>
              <FaUser /> Personal Investment:{" "}
              <strong>PKR {rank.personal}</strong>
            </p>
            <p>
              <FaUsers /> Team Investment: <strong>PKR {rank.team}</strong>
            </p>
            <p className="reward8">
              <FaGift /> PKR {rank.reward} reward
            </p>
            <div className="progress8">
              <div className="progress-bar8" style={{ width: "0%" }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
