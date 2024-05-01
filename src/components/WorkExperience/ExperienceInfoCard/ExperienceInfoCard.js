import React from "react";
import "./ExperienceInfoCard.css";

function ExperienceInfoCard(props) {
  const experiencesInfo = props.experience.map((experienceInfo) => {
    return (
      <div className="experienceInfo-data">
        <h5>{experienceInfo.title}</h5>
        <h6 className="experience-location">{experienceInfo.location}</h6>
        <h6 className="experience-date">{experienceInfo.date}</h6>
        <p>{experienceInfo.descriptions}</p>
      </div>
    );
  });

  return <div className="experienceInfo-bx">{experiencesInfo}</div>;
}

export default ExperienceInfoCard;
