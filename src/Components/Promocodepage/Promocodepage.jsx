import {
  FaArrowLeft,
  FaGift,
  FaInfoCircle,
  FaLink,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Promocodepage.css";

const Promocodepage = () => {
  const leaders = [
    { name: "Rapid Neo Official", users: 722 },
    { name: "NomanShaikh", users: 25 },
    { name: "Sadam Hussain", users: 23 },
    { name: "Usman00", users: 20 },
    { name: "Alikhan", users: 17 },
  ];

  const logs = [
    { user: "Umair khan", leader: "Cheeku143", reward: "Rs9" },
    { user: "Tahira", leader: "Rapid Neo Official", reward: "Rs1" },
    { user: "Sadam", leader: "Zahid Khan", reward: "Rs2" },
    { user: "Biya67", leader: "Rapid Neo Official", reward: "Rs9" },
    { user: "Azhar Abbas", leader: "Umar", reward: "Rs2" },
    { user: "Ahmad Abdullah", leader: "Umar", reward: "Rs2" },
    { user: "Abdullah Irfan", leader: "Rapid Neo Official", reward: "Rs1" },
    { user: "Muhammad kamran", leader: "Rapid Neo Official", reward: "Rs2" },
    { user: "Ahmed", leader: "Rapid Neo Official", reward: "Rs2" },
  ];

  return (
    <div className="promo-container">
      {/* Header */}
      <div className="promo-header-row">
        <Link to="/setting" className="back-link">
          <FaArrowLeft />
        </Link>
        <h1 className="promo-heading">Promo Code System</h1>
      </div>
      <p className="promo-subtitle">Daily reward opportunity for everyone!</p>

      {/* Input */}
      <div className="promo-input-box">
        <input type="text" placeholder="Enter Promo Code" />
        <button className="redeem-btn">Redeem</button>
        <p>You can redeem one code per day</p>
      </div>
      <div className="promo-join">
        <p>
          <b>Want exclusive high-reward promo codes?</b> <br />
          Join our official WhatsApp channel for special Promo code!
        </p>
        <button className="join-btn">
          <FaLink /> Join Channel
        </button>
      </div>

      {/* How It Works */}
      <section className="promo-section">
        <h3>
          <FaInfoCircle /> How It Works
        </h3>
        <ul>
          <li>
            Invite <b>30 direct members</b> to become a Leader.
          </li>
          <li>
            Leaders can generate <b>1 promo code</b> daily.
          </li>
          <li>Members can redeem any promo code once per day.</li>
          <li>Both the member and the leader get the same reward.</li>
          <li>
            Rewards range from <b>Rs1</b> to <b>Rs30</b> based on Luck.
          </li>
        </ul>
      </section>

      {/* Today's Summary */}
      <section className="promo-section">
        <h3>
          <FaUsers /> Today's Promo Summary
        </h3>
        <p>
          Total Users Who Used Promo Code Today: <b>939</b>
        </p>
        <table>
          <thead>
            <tr>
              <th>Leader</th>
              <th>Total Users</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((l, i) => (
              <tr key={i}>
                <td>{l.name}</td>
                <td>{l.users}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Usage Logs */}
      <section className="promo-section">
        <h3>
          <FaGift /> Promo Code Usage Logs
        </h3>
        <div className="logs">
          {logs.map((log, i) => (
            <div key={i} className="log-item">
              {log.user} used promo code of leader <b>{log.leader}</b> and
              received <b>{log.reward}</b> reward.
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Promocodepage;
