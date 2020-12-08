import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Button,
  NavLink,
  Row,
  Col,
  Container,
  TabContent,
  TabPane,
} from "reactstrap";
import Banner from "../../components/TechBanner/techBanner";

import csI2chainBnr from "./../../images/csI2chainBnr.jpg";
import expertiseimg from "./../../images/hl10.jpg";
import csI2Main from "./../../images/csI2Main.jpg";
import "./csitwochain.css";

import python from "./../../images/tu1.png";
import javascript from "./../../images/tu2.png";
import ruby from "./../../images/tu3.png";
import php from "./../../images/tu4.png";
import ccc from "./../../images/tu5.png";
import ccc2 from "./../../images/tu6.png";
import csOptn1 from "./../../images/csOptn1.png";
import csOptn2 from "./../../images/csOptn2.png";
import csOptn3 from "./../../images/csOptn3.png";

const whiteText = "case study";
const blueTxt = "I2chain";
const paraFirst = "User-centric UI UX design to simplify";
const paraSecond = "human interactions";

const techArr = [
  {
    techname: "Blockchain",
    img: python,
  },
  {
    techname: "Crytography",
    img: javascript,
  },
  {
    techname: "React",
    img: ruby,
  },
  {
    techname: "Node",
    img: php,
  },
  {
    techname: "AWS Cognito",
    img: ccc,
  },
  {
    techname: "Electron",
    img: ccc2,
  },
];

const morethan = [
  {
    txt: "Desktop app has been developed",
    img: csOptn1,
  },
  {
    txt: "Make this platform 100% secure",
    img: csOptn2,
  },
  {
    txt: "Alpha testing and integration testing",
    img: csOptn3,
  },
];

const Csitwochain = (props) => {
  return (
    <div>
      <Banner
        bannerImg={csI2chainBnr}
        whiteText={whiteText}
        blueTxt={blueTxt}
      />
      <div className="language py-2">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center py-5">
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="imgSec p-5">
                <img src={csI2Main} alt="" />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="webpage">
                <h2>Overview</h2>
                <span className="lightGreyText">
                  application designing have become a very sophisticated
                  technology-based art. At CBNITS, we follow a foundational
                  approach for building UX/UI strategy for our clients. Our
                  UI/UX designing team is globally recognized for designing the
                  most innovative and user-centric experience for any digital
                  product. We follow the best UI/UX practices in the
                  industry.pabilities for your company and get it up and running
                  in quick time.
                </span>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="skybg py-5">
          <Container className="themed-container" fluid={false}>
            <div className="morethan text-center">
              <h2 className="mb-3 mt-2">
                what we did for <span className="red">I2chain</span>
              </h2>
            </div>
            <Row className="d-flex mt-5 align-items-center ">
              {morethan.map((data, ibx) => (
                <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                  <div className="threeOptn text-center">
                    <img src={data.img} alt="" />
                    <h6>{data.txt}</h6>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <div className="py-5">
          <Container className="themed-container" fluid={false}>
            <div className="deliver text-center">
              <h2>
                technology <span className="skycolor">used</span>
              </h2>
            </div>

            <Row className="mt-5 ">
              {techArr.map((data, idx) => (
                <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                  <div className="techstack mb-4">
                    <div className="teckStackImg">
                      <img src={data.img} alt="" />
                    </div>
                    <div className="teckStackName pl-4">
                      <span>{data.techname}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <div className="hireUs text-center">
          <Button>Hire Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Csitwochain;
