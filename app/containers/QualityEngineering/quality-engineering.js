import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "reactstrap";
import "./quality.css";
import Banner from "../../components/TechBanner/techBanner";
import Axios from "../../service/axios-config";
import QualityDevBnr from "./../../images/qualityEng/qualityEngBnr.jpg";
import qualityEng from "./../../images/qualityEng/qualityEng.png";
import QualityTesting from "./../../components/QualityTesting/qualityTesting";
import QualityStep from "./../../images/quaSec.png";

const blueTxt = "Quality";
const whiteText = "Engineering";
const paraFirst = "Proven Methodology To Improve Software Quality";

const QualtyEngineer = (props) => {
  return (
    <div>
      <Banner
        bannerImg={QualityDevBnr}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
      />
      <div>
        <QualityTesting />
      </div>
      <div className="testing-process py-5">
        <Container className="themed-container" fluid={false}>
          <div className="text-center testing-process-head">
            <h2>
              Quality<span> Testing Process</span>
            </h2>
          </div>
          <Row className="d-flex text-center imgg">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <img src={qualityEng} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="themed-container">
        <Container fluid={false}>
          <div className="imgSec">
            <img src={QualityStep} alt="" />
          </div>
          <div className="text-center testing-bottamBanner">
            <p>
              CBNITS is an internationally quality engineering firm renowned for
              providing top-notch software quality assurance and testing
              expertise.
            </p>
          </div>
        </Container>
      </div>

      <div className="automation text-center py-5 ">
        <Container className="themed-container" fluid={false}>
          <h2 className="mb-5">
            test <span className="skycolor">automation</span>
          </h2>
          <p>
          Continuous testing is the backbone of continuous integration. At CBNITS, we follow a
process-oriented approach for the successful deployment of test automation. By designing
          </p>

          <p>
          an automation strategy aligned with enterprise goals, CBNITS enables faster time-to-
market for your enterprise apps.
          </p>
        </Container>
      </div>
      <div className="text-center testing-button">
        <Button color="primary" onClick={() => props.history.push("/hire-us")}>
          Hire Us
        </Button>
      </div>
    </div>
  );
};

export default QualtyEngineer;
