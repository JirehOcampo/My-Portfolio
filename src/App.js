import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import NavigationBar from "./components/Navbar/NavigationBar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import { Container } from "react-bootstrap";
import skillData from "./SkillsData";
import Carousel from "react-multi-carousel";
import SkillCarousel from "./components/Skills/SkillCarousel";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  const skills = skillData.map((skill) => {
    return (
      <SkillCarousel key={skill.id} skill={skill.skill} rating={skill.rating} />
    );
  });
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Container>
        <NavigationBar />
        <Home />
        <section id="skills">
          <div className="skill-bx">
            <Skills />
            <Carousel
              responsive={responsive}
              infinite={true}
              className="skill-slider"
            >
              {skills}
            </Carousel>
          </div>
        </section>
        <WorkExperience />
        <ContactMe />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
