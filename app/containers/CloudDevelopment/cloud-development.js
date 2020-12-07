import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from "reactstrap";
import Banner from "../../components/TechBanner/techBanner";
import Axios from "../../service/axios-config";

import cloudDevBnr from "./../../images/cloudDevBnr.jpg";
import icon from "./../../images/list-icon.png";
import tickWhite from "./../../images/tickWhite.png";
import expertiseimg from "./../../images/hl10.jpg";
import agile from "./../../images/cloudDevMain.jpg";
import cloudDevMain2 from "./../../images/cloudDevMain2.jpg";

import CloudPortfolio from "./../../components/CloudPortfolio/CloudPortfolio";
import "./cloudDev.css";

const blueTxt = "Cloud";
const whiteText = "Development";
const paraFirst = "With Cloud development,move away from traditional";
const paraSecond = "desktop environment";

const CloudDevelopment = (props) => {
  return (
    <div>
      <Banner
        bannerImg={cloudDevBnr}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
        paraSecond={paraSecond}
      />
      <div className="cloud py-5">
        <div className="py-4 head-para">
          <p>
            Are you searching for third party data hosting ? Look no further
            than CBNITS as we help companies leverage the vast potential of
            cloud computing and delight their customers and transform their
            business. CBNITS offers both public and private data center within
            its cloud services including Amazon web services(AWS), Google
            platform, Microsoft Azure, Backspace, Apache, CloudStock, and
            Salesforce.
          </p>
        </div>
        <div>
          <CloudPortfolio />
        </div>
        <div className="cloudCbnits py-5">
          <Container className="themed-container" fluid={false}>
            <Row className="d-flex align-items-center">
              <Col xl={6} lg={6}>
                <div className="cloudCbnits-img">
                  <img src={agile} alt="" />
                </div>
              </Col>
              <Col xl={6} lg={6}>
                <div className="cloudCbnits-Text">
                  <p>
                    <span>Kubernets</span> has the special expertise in
                    developing top of the line webistes. Our talented bunch of
                    developres hold special expertise in reaceting excellent
                    websites. We are focused on delevering real value to our
                    global clients. You can hire our talented team of developers
                    on dedicated basis option. Let us drive your growth with our
                    web development expertise.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="cloudCbnits py-5">
          <Container className="themed-container" fluid={false}>
            <Row className="d-flex align-items-center">
              <Col xl={6} lg={6}>
                <div className="cloudCbnits-Text">
                  <p>
                    <span>The Cost</span>
                    <span className="skycolor"> advantage</span> has the special
                    expertise in developing top of the line webistes. Our
                    talented bunch of developres hold special expertise in
                    reaceting excellent websites. We are focused on delevering
                    real value to our global clients. You can hire our talented
                    team of developers on dedicated basis option. Let us drive
                    your growth with our web development expertise.
                  </p>
                </div>
              </Col>
              <Col xl={6} lg={6}>
                <div className="cloudCbnits-img">
                  <img src={cloudDevMain2} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="text-center cloudCbnits-btn">
          <Button color="primary" onClick={() => props.history.push("hire-us")}>
            Hire Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CloudDevelopment;
