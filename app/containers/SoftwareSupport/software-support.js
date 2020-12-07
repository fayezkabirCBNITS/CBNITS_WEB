import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "reactstrap";
import "./software-support.css";
import SoftwareMaintenance from "./../../components/SoftwareManitenance/softwareMaintenance";
import Specialized from "./../../components/SpecializedService/Specialized";
import Whychoose from "./../../components/Whychoose/whychoose";
import react from "./../../images/react.png";
import angular from "./../../images/angular.png";
import vue from "./../../images/vue.png";
import node from "./../../images/node.png";
import python from "./../../images/python.png";
import java from "./../../images/java.png";
import golang from "./../../images/golang.png";
import msg from "./../../images/msg.png";
import ph from "./../../images/ph.png";
import Axios from "../../service/axios-config";
import agile from "./../../images/agile.jpg";
import TechBanner from "./../../components/TechBanner/techBanner";
import BannerImg from "./../../images/softwareSupport/softwareBnr.jpg";

const whiteText = "SUPPORT SERVICES";
const blueTxt = "SOFTWARE MAINTENANCE &";
const paraFirst = "Prevent minor issues from becoming major ones";
const paraSecond = "";

const SoftwareSupport = (props) => {
  return (
    <div>
      <TechBanner
        bannerImg={BannerImg}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
      />
      <div className="sub-header">
        <div className="devCbnits py-5">
          <Container className="themed-container" fluid={false}>
            <Row className="d-flex align-items-center">
              <Col xl={5} lg={5}>
                <div className="imgSec">
                  <img src={agile} alt="agile" />
                </div>
              </Col>
              <Col xl={7} lg={7}>
                <div className="software-devCbnits-Text">
                  <p>
                    <span className="blackcolor">
                      At <span className="skycolor">cbnits</span>
                    </span>
                    , we channelize our resources to provide fool-proof,
                    real-time and long-term software maintenance and support
                    services to large global conglomerates as well as local
                    software vendors. With disciplined approach and years of
                    experience, we assure top-notch software application
                    maintenance resulting in tangible savings at high service
                    levels without compromising on software quality.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="themed-container">
          <SoftwareMaintenance />
        </div>
        <div className="themed-container">
          <Specialized />
        </div>
        <div className="themed-container">
          <Whychoose />
        </div>
        <div className="themed-container">
          <Container fluid={false}>
            <div className=" specialBanner">
              <Row>
                <Col xl={10} lg={10}>
                  <p>
                    We pledge to provide the best technical talent to manage
                    your software maintenance & support needs.
                  </p>
                </Col>
                <Col xl={2} lg={2}>
                  <Button color="primary" onClick={()=>props.history.push("/hire-us")}>HIRE US</Button>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSupport;
