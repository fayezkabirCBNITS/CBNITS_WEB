import React, { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import "./aboutCbnits.css";
import homePlay from "./../../images/homePlay.png";

const Expertise = (props) => {
  return (
    <div className="aboutCbnits py-5">
      <Container className="themed-container" fluid={false}>
        <Row className="d-flex align-items-center">
          <Col xl={6} lg={6}>
            <div className="imgSec">
              <img src={homePlay} alt="" />
            </div>
          </Col>
          <Col xl={6} lg={6} className="about-desp">
            <h3>about cbnits</h3>
            <h4>we are family</h4>
            <p>
              CBNITS is a premier Enterprise Solution & IT service provider.
              With our effective digital solutions and immense expertise in
              cutting-edge technologies, we are helping companies around the
              world to transform their businesses.
            </p>
            <p>
              With our 200+ expert-level software engineers, cloud engineers,
              cybersecurity experts, Data Scientists, and UX/UI designers, we
              have built an impressive portfolio worldwide. We strive for
              excellence at every stage of our clients’ project development.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Expertise;
