import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import "./Home.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function Home() {
  const [text] = useTypewriter({
    words: ["Web Developer", "Virtual Assistant", "Teacher"],
    loop: {},
    typeSpeed: 120,
  });

  return (
    <section id="home" className="home--container mt-5">
      <Container className="pt-4">
        <Row className="align-items-center">
          <Col lg={7}>
            <h2 className="hero--heading">
              Hello, I'm a <span className="custom-text">{text} &nbsp;</span>
            </h2>
            <p className="hero-description">
              Your <mark>Adaptable Professional</mark> : Excelling Across Roles
              with Versatile Expertise.
            </p>
            <div className="d-flex flex-row gap-4 icons-container">
              <div className="icon-container">
                <a
                  href="https://www.facebook.com/IloveyouJireh"
                  alt="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon.Facebook className="icon--img" />
                </a>
              </div>
              <div className="icon-container">
                <a
                  href="https://www.linkedin.com/in/jireh-ocampo-b79601132/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon.Linkedin className="icon--img" />
                </a>
              </div>
              <div className="icon-container">
                <a href="mailto:jirehopmaco@gmail.com">
                  <Icon.Envelope className="icon--img" />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div>
              <Image
                src="./images/profile_img.png"
                alt="Profile"
                className="profile--picture"
                fluid
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
