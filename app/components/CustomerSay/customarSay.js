import React, { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import "./customerSay.css";
import ai from "./../../images/e1.png";
import blockchain from "./../../images/e2.png";
import v1 from "./../../images/video1.jpg";
import v2 from "./../../images/video2.jpg";

const techArr = [
  {
    img: ai,
    title: "Al & Machine Learnings",
  },
  {
    img: blockchain,
    title: "blockchain",
  },
];

const Expertise = (props) => {
  return (
    <div className="customer py-5">
      <Container className="themed-container" fluid={false}>
        <div className="text-center customer-head">
          <h2>
            what our <span>customers say</span>
          </h2>
        </div>
        <Row className="d-flex justify-content-center">
          <Col xl={4} lg={4}>
            <div className="each-customer">
              <div className="customer-img">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/GJpv8AGse3U"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="customer-details">
                <h4>Madhukar Govindaraju</h4>
                <p>
                  CBNITS help Numly for developing the product and get the
                  product into market.{" "}
                </p>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={4}>
            <div className="each-customer">
              <div className="customer-img">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/xxCXQ2D5cdY"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="customer-details">
                <h4>Shuo Yang</h4>
                <p>
                  CBNITS has huge supporting infrastructure such as sourcing,
                  interview, scheduling,...
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Expertise;
