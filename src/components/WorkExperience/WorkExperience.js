import React, { useState } from "react";
import "./WorkExperience.css";
import { Row, Col, Container } from "react-bootstrap";
import { EXPERIENCE } from "../../ExperienceData";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import ExperienceInfoCard from "./ExperienceInfoCard/ExperienceInfoCard";

function WorkExperience() {
  const [data, setData] = useState(EXPERIENCE[0]);

  function handleSelectExperience(item) {
    setData(item);
  }

  const experiences = EXPERIENCE.map((experience) => {
    return (
      <ExperienceCard
        key={experience.id}
        category={experience.category}
        icon={experience.icon}
        isActive={experience.category === data.category}
        handleClick={() => {
          handleSelectExperience(experience);
        }}
      />
    );
  });

  return (
    <section id="experience">
      <Container className="experience-container">
        <div>
          <h5>Work Experience</h5>
        </div>
        <Row>
          <Col lg={4}>
            <div className="experience-content">
              <div className="experience-bx">{experiences}</div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="experience-info">
              <ExperienceInfoCard experience={data.experience} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WorkExperience;
