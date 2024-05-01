import React from "react";
import "./Skills.css";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

function Skills() {
  return (
    <section className="mt-5 ">
      <Container>
        <Row>
          <Col>
            <div>
              <h2>Skills</h2>
              <p className="skill-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
