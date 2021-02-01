import React from "react";
import { Row, Col, Container } from "reactstrap";
import "./customerSay.css";

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
                  src="https://www.youtube.com/embed/znMk8-IBJOk"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
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
                  src="https://www.youtube.com/embed/zcjU7CRfaJM"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
              <div className="customer-details">
                <h4>Joe Banerjee</h4>
                <p>
                  CBNITS is proud to be part of your digital transformation
                  journey.
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
