import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from "reactstrap";
import Banner from "../../components/TechBanner/techBanner";

import cloudDevBnr from "./../../images/cloudDevBnr.jpg";
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
                <div className="imgSec">
                  <img src={agile} alt="" />
                </div>
              </Col>
              <Col xl={6} lg={6}>
                <div className="cloudCbnits-Text">
                  <p>
                    <span>Kubernets</span> is a container orchestration system that was initially designed by Google to help scale containerized applications in the cloud. It aims to provide better ways of managing related, distributed components across varied infrastructure. All major cloud vendors are supporting Kubernetes providing out-of-the-box solutions for it. CBNITS provides a turn-key Kubernetes-based application management platform that accelerates the adoption of open-source and cloud-native technologies.
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
                    <span className="skycolor"> advantage</span> of cloud computing Cloud is an evolving and comprehensive platform. By hosting software, platforms, and databases remotely, the cloud servers free up the memory and computing power of individual computers. The costs of cloud computing are much more flexible. Our clients need to pay for server and infrastructure capacity only when they need them.
                  </p>
                </div>
              </Col>
              <Col xl={6} lg={6}>
                <div className="imgSec">
                  <img src={cloudDevMain2} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="text-center cloudCbnits-btn">
          <Button color="primary" onClick={() => props.history.push("/hire-us")}>
            Hire Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CloudDevelopment;
