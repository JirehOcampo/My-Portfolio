import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function SkillCarousel(props) {
  return (
    <section>
      <div className="item">
        <div className="sample">
          <CircularProgressbar
            value={props.rating}
            text={`${props.rating}%`}
            styles={buildStyles({
              strokeLinecap: "round",
              textSize: "12px",
              pathColor: `#7e61e7`,
              trailColor: "black",
              textColor: "white",
            })}
          />
        </div>
        <h5 className="progress-desc">{props.skill}</h5>
      </div>
    </section>
  );
}

export default SkillCarousel;
