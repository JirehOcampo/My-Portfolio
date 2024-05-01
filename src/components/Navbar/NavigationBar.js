import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

function NavigationBar() {
  const [changeBg, setChangeBg] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <section>
      <Navbar
        data-bs-theme="dark"
        collapseOnSelect
        expand="md"
        fixed="top"
        className={changeBg ? "navbar active" : "navbar"}
      >
        <Container>
          <Navbar.Brand>
            <p>
              <span className="brand-name">J</span>ireh.
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home" className="sample">
                Home
              </Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Work Experience</Nav.Link>
              <Nav.Link href="#contactMe">Contact Me</Nav.Link>
              <Button className="hireme">Hire Me</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default NavigationBar;
