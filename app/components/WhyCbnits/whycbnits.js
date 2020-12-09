import React from "react";
import { Row, Col, Container } from "reactstrap";
import "./whycbnits.css";


const WhyCbnits = (props) => {
  
  return (
    <div className="whyCbnits py-5">
      <Container className="themed-container" fluid={false}>
        <div className="text-center whyTitle">
          <h2>
            why<span> cbnits ?</span>
          </h2>
          <p>We don't deliberate. We deliver.</p>
        </div>
        <Row className="d-flex align-items-center justify-content-between">
          {props.whyCbnitsData && props.whyCbnitsData.length > 0
            ? props.whyCbnitsData.map((item, idx) => (
                <Col xl={6} lg={6} key={idx}>
                  <div className="features">
                    <Row className="d-flex align-items-center justify-content-center">
                      <Col xl={2} lg={2}>
                        <img src={item.image} alt="map" />
                      </Col>
                      <Col xl={10} lg={10} className="feature-text">
                        <h4>{item.name}</h4>
                        <p>{item && item.description && item.description[0]}</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))
            : null}
        </Row>
      </Container>
    </div>
  );
};

export default WhyCbnits;
