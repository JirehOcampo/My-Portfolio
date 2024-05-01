import React from "react";
import "./ContactMe.css";
import { Col, Container, InputGroup, Row, Form, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const [contactData, setContactData] = React.useState({
    contactName: "",
    email: "",
    mobile: "",
    message: "",
  });

  console.log(contactData);

  function handleChange(event) {
    setContactData((prevContactData) => {
      return {
        ...prevContactData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_80b5ieu";
    const templateId = "template_0bam719";
    const publicKey = "lx444ir9-NRlatlz1";

    const templateParams = {
      from_name: contactData.contactName,
      to_name: "Jireh",
      message: contactData.message,
      mobile: contactData.mobile,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setContactData((prevData) => {
          return {
            contactName: "",
            email: "",
            mobile: "",
            message: "",
          };
        });
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };
  return (
    <section id="contactMe" className="mt-5 contact-section">
      <Container className="contact-container">
        {/* <div>
          <h1>Contact</h1>
        </div> */}
        <Row>
          <Col className="bx">
            <div>
              <div>
                <h3>Let's chat and tell me about your requirements.</h3>
                <p>Let's create something together</p>
              </div>
              <div className="contact-bx">
                <p>
                  <Icon.GeoAlt /> Whangarei, New Zealand
                </p>
                <p>
                  <Icon.Telephone /> +974 7720 5296
                </p>
                <p>
                  <Icon.Envelope /> jirehopmaco@gmail.com
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <p>Swing by for a cup of tea, or leave me a note:</p>
            </div>
            <div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 input-bx" controlId="formName">
                  <Form.Control
                    aria-label="Name"
                    aria-describedby="Name"
                    className="custom-input-design"
                    onChange={handleChange}
                    name="contactName"
                    value={contactData.contactName}
                  />
                  <Form.Label className="label-bx">Name</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3 input-bx" controlId="formEmail">
                  <Form.Control
                    type="email"
                    aria-label="email"
                    aria-describedby="email"
                    className="custom-input-design"
                    onChange={handleChange}
                    name="email"
                    value={contactData.email}
                  />
                  <Form.Label className="label-bx">Email</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3 input-bx" controlId="formMobile">
                  <Form.Control
                    aria-label="mobile"
                    aria-describedby="mobile"
                    className="custom-input-design"
                    onChange={handleChange}
                    name="mobile"
                    value={contactData.mobile}
                  />
                  <Form.Label className="label-bx">Mobile</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3 input-bx" controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    aria-label="message"
                    className="mb-3 custom-input-design"
                    onChange={handleChange}
                    name="message"
                    value={contactData.message}
                  />
                  <Form.Label className="label-bx">Message</Form.Label>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="button-submit"
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactMe;
