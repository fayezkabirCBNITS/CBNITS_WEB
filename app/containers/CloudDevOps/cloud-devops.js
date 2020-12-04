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
import agile from "./../../images/cloudDevMain.jpg"
import cloudDevMain2 from "./../../images/cloudDevMain2.jpg"

import "./devops.css";
import DevopsOffering from '../../components/DevOps-Offering/devops-offering'
import DevopsBusiness from '../../components/Devops-Business/DevopsBusiness'


const blueTxt = "Devops &";
const whiteText = "Cloud Devops";
const paraFirst = "Experience a brand new digital dimension with";
const paraSecond = "Cloud & Devops";

const dummyArr = [
  {
    txt: "custom angular js development",
    img: icon,
  },
  {
    txt: "AJAX development",
    img: icon,
  },
  {
    txt: "Angular js mobile app development",
    img: icon,
  },
  {
    txt: "Angular js web app development",
    img: icon,
  },
  {
    txt: "Angular ecommerce application",
    img: icon,
  },
];

const advantageArr = [
  {
    txt: "Big Data Development Maintenance & Support",
    img: tickWhite,
  },
  {
    txt: "Data Integration and Management",
    img: tickWhite,
  },
  {
    txt: "Cloudera Services",
    img: tickWhite,
  },
  {
    txt: "Data Integration and Management",
    img: tickWhite,
  },
  {
    txt: "Cloudera Services",
    img: tickWhite,
  },
  {
    txt: "Big Data Analytics & Insights Services",
    img: tickWhite,
  },
  {
    txt: "Hadoop configuration management,",
    img: tickWhite,
  },
  {
    txt: "Hadoop monitoring, Hadoop Metrics,",
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
                <p><span>Powering the </span><span className="skycolor">Future </span>  has the special expertise in developing top of the line webistes.
                      Our talented bunch of developres hold special expertise in reaceting excellent websites.
                      We are focused on delevering real value to our global clients.
                      You can hire our talented team of developers on dedicated basis option.
                      Let us drive your growth with our web development expertise.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <DevopsOffering />
      </div>
      <div>
        <DevopsBusiness />
      </div>
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
                <h6>
                  Why CBNITS as your Devops sevices provider?
                </h6>
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
                      <p>
                        {item.txt}
                      </p>
                    </Col>
                  </Row>
                ))
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="text-center devopsCbnits-button">
        <Button color="primary">Hire Us</Button>
      </div>
    </div>
  );
};

export default CloudDevOps;
