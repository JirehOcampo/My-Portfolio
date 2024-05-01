import React from "react";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  return (
    <div
      className={`experience-card ${props.isActive ? "active" : ""}`}
      onClick={() => props.handleClick()}
    >
      <div className="experience-icon">
        <img src={props.icon} alt="Category" />
      </div>
      <span>{props.category}</span>
    </div>
  );
}

export default ExperienceCard;
