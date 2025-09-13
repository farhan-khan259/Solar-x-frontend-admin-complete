import { FaArrowLeft, FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Rankingdashboard.css";

// Tier images
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
      personal: 1000,
      team: 25000,
      reward: 500,
      img: starterImg,
    },
    {
      name: "Bronze",
      level: 1,
      personal: 3000,
      team: 50000,
      reward: 1200,
      img: bronzeImg,
    },
    {
      name: "Silver",
      level: 2,
      personal: 5000,
      team: 100000,
      reward: 2500,
      img: silverImg,
    },
    {
      name: "Gold",
      level: 3,
      personal: 10000,
      team: 150000,
      reward: 4500,
      img: goldImg,
    },
    {
      name: "Platinum",
      level: 4,
      personal: 15000,
      team: 200000,
      reward: 7000,
      img: platinumImg,
    },
    {
      name: "Diamond",
      level: 5,
      personal: 20000,
      team: 300000,
      reward: 10000,
      img: diamondImg,
    },
    {
      name: "Master",
      level: 6,
      personal: 30000,
      team: 500000,
      reward: 15000,
      img: masterImg,
    },
    {
      name: "Grandmaster",
      level: 7,
      personal: 40000,
      team: 700000,
      reward: 20000,
      img: grandmasterImg,
    },
    {
      name: "Elite",
      level: 8,
      personal: 50000,
      team: 1000000,
      reward: 25000,
      img: eliteImg,
    },
    {
      name: "Legend",
      level: 9,
      personal: 70000,
      team: 1500000,
      reward: 35000,
      img: legendImg,
    },
  ];

  return (
    <div className="ranking-wrapper">
      {/* Header */}
      <div className="ranking-header">
        <Link to="/setting" className="back-link">
          <FaArrowLeft />
        </Link>
        <h2>Ranking Dashboard</h2>
      </div>

      {/* Rank Cards */}
      <div className="ranking-grid">
        {ranks.map((rank, index) => {
          const nextRank = ranks[index + 1];
          const teamCurrent = rank.team;
          const personalCurrent = rank.personal;

          let progress = 0;
          if (nextRank) {
            progress =
              ((teamCurrent + personalCurrent) /
                (nextRank.team + nextRank.personal)) *
              100;
            if (progress > 100) progress = 100;
          }

          return (
            <div key={index} className="rank-card">
              {/* Top Section */}
              <div className="rank-top">
                <img src={rank.img} alt={rank.name} />
                <div className="rank-title">
                  <h3>{rank.name}</h3>

                  {/* Show Level only for non-current ranks */}
                  {index !== 0 && rank.level && (
                    <span className="level-pill">Level {rank.level}</span>
                  )}

                  {/* Current rank badge */}
                  {index === 0 && (
                    <span className="current-pill">Current Rank ✅</span>
                  )}
                </div>
              </div>

              {/* Next Rank Goal (only for current rank) */}
              {nextRank && index === 0 && (
                <div className="next-goal">
                  <h4>
                    Next Rank Goal: <span>{nextRank.name}</span>
                  </h4>
                  <div className="goal-boxes">
                    <div className="blue-box">
                      Team Investment: PKR {nextRank.team}
                      <div className="needed">
                        More Needed{" "}
                        {nextRank.team - teamCurrent > 0
                          ? nextRank.team - teamCurrent
                          : 0}{" "}
                        PKR
                      </div>
                    </div>
                    <div className="blue-box">
                      Personal Investment: PKR {nextRank.personal}
                      <div className="needed">
                        More Needed{" "}
                        {nextRank.personal - personalCurrent > 0
                          ? nextRank.personal - personalCurrent
                          : 0}{" "}
                        PKR
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Current Investments */}
              <div className="current-investments">
                <div className="orange-box">
                  Your Team Total Investment
                  <strong> PKR {teamCurrent}</strong>
                </div>
                <div className="orange-box">
                  Your Total Investment
                  <strong> PKR {personalCurrent}</strong>
                </div>
              </div>

              {/* Progress (only for current rank) */}
              {nextRank && index === 0 && (
                <div className="progress-section">
                  <p>
                    Progress to Next Rank{" "}
                    <span className="next-pill">{nextRank.name}</span>
                  </p>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <span className="progress-percent">
                    {progress.toFixed(0)}%
                  </span>
                </div>
              )}

              {/* Reward */}
              <p className="reward">
                <FaGift /> Rank Benefit: PKR {rank.reward} reward
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
