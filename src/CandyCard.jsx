import React from "react";
import "./CandyCard.css";

const CandyCard = ({ candy }) => {
  return (
    <div className="card">
      <img src={candy.canImage} alt="Delicious Tasty Candy" />

      <h3>{candy.brand}</h3>
      <p>{candy.desc.slice(0, 130) + "..."}</p>
    </div>
  );
};

export default CandyCard;
