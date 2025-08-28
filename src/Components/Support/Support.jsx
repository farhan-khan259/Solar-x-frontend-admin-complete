import {
  FaArrowLeft,
  FaCopy,
  FaPhone,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Support.css";

export default function Support() {
  const contacts = [
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp Channel",
      link: "https://chat.whatsapp.com/KA1Ckx1OGJXJ6MK9kzLGy",
      copy: true,
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp Number",
      link: "tel:+44xxxxxxxxx",
      text: "+44xxxxxxxxx",
      copy: true,
    },
    {
      icon: <FaPhone />,
      label: "Support Call",
      link: "tel:+44xxxxxxxxx",
      text: "+44xxxxxxxxx",
      copy: true,
    },
    {
      icon: <FaTelegramPlane />,
      label: "Telegram Channel",
      link: "/support", // Internal link now
      internal: true,
    },
    {
      icon: <FaTelegramPlane />,
      label: "Telegram Contact",
      link: "/support", // Internal link now
      internal: true,
    },
  ];

  return (
    <div className="support-container">
      {/* Header row */}
      <div className="support-header-row">
        <Link to="/setting" className="back-linksp">
          <FaArrowLeft />
        </Link>
        <h2 className="support-heading">Support</h2>
      </div>

      <div className="support-list">
        {contacts.map((c, i) => (
          <div key={i} className="support-card">
            <div className="support-icon">{c.icon}</div>
            <div className="support-info">
              {c.internal ? (
                <Link to={c.link} className="support-btn-link">
                  {c.label}
                </Link>
              ) : (
                <a href={c.link} target="_blank" rel="noopener noreferrer">
                  {c.label}
                </a>
              )}
              {c.text && <span>{c.text}</span>}
            </div>

            {/* Show copy button only if copy=true and not internal */}
            {c.copy && !c.internal && (
              <button
                className="copy-btn"
                onClick={() => navigator.clipboard.writeText(c.text || c.link)}
              >
                <FaCopy />
              </button>
            )}
          </div>
        ))}
      </div>

      <button className="join-btn">Customer Services</button>
    </div>
  );
}
