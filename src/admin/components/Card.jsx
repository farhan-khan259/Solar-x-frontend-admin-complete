// src/admin/components/Card.jsx
import React from "react";
import "../styles/cards.css";

const Card = ({ title, value }) => {
  return (
    <div className="card-box">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default Card;
