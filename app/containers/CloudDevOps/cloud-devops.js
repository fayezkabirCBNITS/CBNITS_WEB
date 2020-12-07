import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from "reactstrap";
import Banner from "../../components/TechBanner/techBanner";
import Axios from "../../service/axios-config";

import cloudDevBnr from "./../../images/cloudDevop/devopBnr.jpg";
import cloudMain from "./../../images/cloudDevop/cloudMain.png";
import devopmain2 from "./../../images/cloudDevop/devopmain2.jpg";
import icon from "./../../images/list-icon.png";
import tickWhite from "./../../images/tickWhite.png";
import expertiseimg from "./../../images/hl10.jpg";
import agile from "./../../images/cloudDevMain.jpg";
import cloudDevMain2 from "./../../images/cloudDevMain2.jpg";

import "./devops.css";
import DevopsOffering from "../../components/DevOps-Offering/devops-offering";
import DevopsBusiness from "../../components/Devops-Business/DevopsBusiness";
import { withRouter } from "react-router-dom";

const blueTxt = "Cloud";
const whiteText = "& Devops";
const paraFirst = "Experience a brand new digital dimension with";
const paraSecond = "Cloud & Devops";


const advantageArr = [
  {
    txt:
      "With automation from code to cloud, our engineers will stay your business ahead at every step.",
    img: tickWhite,
  },
  {
    txt:
      "Through containers and cloud-native dev tools, we accelerate the delivery of your new apps.",
    img: tickWhite,
  },
  {
    txt:
      "We provide high-end automated test techniques with quick set up and efficient operations.",
    img: tickWhite,
  },
  {
    txt:
      "Our DevOps services are tailored to your business requirements and delivered by top engineers from our global talent network.",
    img: tickWhite,
  },
];

const expertise = [
  {
    txt: "Manufacturing",
    img: expertiseimg,
  },
  {
    txt: "Real Estate",
    img: expertiseimg,
  },
  {
    txt: "Healthcare",
    img: expertiseimg,
  },
  {
    txt: "Education/e-Learning",
    img: expertiseimg,
  },
  {
    txt: "Retail",
    img: expertiseimg,
  },
  {
    txt: "Energy",
    img: expertiseimg,
  },

  {
    txt: "Travel & Hospitality",
    img: expertiseimg,
  },
  {
    txt: "Logistics",
    img: expertiseimg,
  },
  {
    txt: "e-Commerce",
    img: expertiseimg,
  },
  {
    txt: "Social Networking",
    img: expertiseimg,
  },
];

const CloudDevOps = (props) => {
  return (
    <div>
      <Banner
        bannerImg={cloudDevBnr}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
        paraSecond={paraSecond}
        bannerIconCategory={"Cloud Devops"}
      />
      <div className="devopsCbnits py-5">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center">
            <Col xl={6} lg={6}>
              <div className="devopsCbnits-img">
                <img src={cloudMain} alt="" />
              </div>
            </Col>
            <Col xl={6} lg={6}>
              <div className="devopsCbnits-Text">
                <h2>
                  At <span className="skycolor">CBNITS</span>,
                </h2>
                <p>
                  our goal is to simplify and transform businessesdigitally
                  through high-performance Cloud technology. As cloud enablement
                  experts we offer top-notch DevOps, Migration and Cloud Native
                  solutions. Our profound industry experience on Cloud platforms
                  like AWS, GCP and Azure enables our clients to adopt Cloud
                  culture in a seamless way. We are also renowned for holding
                  special expertise on Infrastructure as Code tools like
                  Terraform, CloudFormation and Ansible. All our cloud services
                  are instantly scalable for optimum performance.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <DevopsOffering />
      </div>
      {/* <div>
        <DevopsBusiness />
      </div> */}
      <div className="devopsCbnits py-5">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center">
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="devopsCbnits-img">
                <img src={devopmain2} alt="" />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="devopsCbnits-advantages">
                <h6>Why CBNITS as your Devops sevices provider?</h6>
                {advantageArr.map((item, key) => (
                  <Row key={key}>
                    <Col xl={1} lg={1}>
                      <img
                        src={icon}
                        alt={icon}
                        style={{
                          marginRight: "2px",
                          fontSize: "18px",
                          marginTop: "5px",
                          marginLeft: "10px",
                        }}
                      />
                    </Col>
                    <Col xl={11} lg={11}>
                      <p>{item.txt}</p>
                    </Col>
                  </Row>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="text-center devopsCbnits-button">
        <Button color="primary" onClick={() => props.history.push("/hire-us")}>Hire Us</Button>
      </div>
    </div>
  );
};

export default withRouter(CloudDevOps);
