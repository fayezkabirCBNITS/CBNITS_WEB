import React, { useState, useEffect } from "react";
import {
  Nav,
  NavItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  NavLink,
  Row,
  Col,
  Container,
  fo,
} from "reactstrap";
import "./about.css";
import Banner from "./../../components/TechBanner/techBanner";
import Axios from "./../../service/axios-config";
import tool7 from "./../../images/tools7.png";
import bannerImg from "./../../images/aboutBnr.jpg";
import ang from "./../../images/angularcreation.png";
import about1 from "./../../images/aboutM1.png";
import about2 from "./../../images/aboutM2.png";

import company1 from "./../../images/al1.png";
import company2 from "./../../images/al2.png";
import company3 from "./../../images/al3.png";
import company4 from "./../../images/al4.png";
import company5 from "./../../images/al5.png";
import company6 from "./../../images/al6.png";
import company7 from "./../../images/al7.png";
import company8 from "./../../images/al8.png";
import company9 from "./../../images/al9.png";

import ar1 from "./../../images/ar1.png";
import ar2 from "./../../images/ar2.png";
import ar3 from "./../../images/ar3.png";
import ar4 from "./../../images/ar4.png";

import ab1 from "./../../images/ab1.png";
import ab2 from "./../../images/ab2.png";
import ab3 from "./../../images/ab3.png";
import ab4 from "./../../images/ab4.png";
import ab5 from "./../../images/ab5.png";

const whiteText = "us";
const blueTxt = "about";
const paraFirst = "Our expertise , know more about what we do";
const paraSecond = "";

const AboutUs = (props) => {
  const [data, setData] = useState({});
  const [xFactor, setXFactot] = useState({});
  const [team, setTeam] = useState({});
  const [response, setResponse] = useState([]);
  useEffect(() => {
    _getData();
    _getXFactor();
    _getTeam();
    _getResponse();
    window.scrollTo({ top: 0 });
  }, []);
  const _getData = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "About Us",
        category: "About CBNITS",
      });
      if (res.status == 200) {
        setData(res.data.data[0]);
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };

  const _getTeam = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "About Us",
        category: "Diversity our Team",
      });
      if (res.status == 200) {
        setTeam(res.data.data[0]);
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };

  const _getXFactor = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "About Us",
        category: "X Factor",
      });
      if (res.status == 200) {
        setXFactot(res.data.data[0]);
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };

  const _getResponse = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Home",
        category: "Why CBNITS",
      });
      if (res.status == 200) {
        setResponse(res.data.data);
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };
  return (
    <div className="about-v2">
      <Banner
        bannerImg={bannerImg}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
        paraSecond={paraSecond}
      />
      <div className="aboutv2-part py-5">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center">
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="v2-cbnits-left"
            >
              <h2>
                about <span className="skycolor">cbnits</span>
              </h2>
              <p>{data && data.description && data.description[0]}</p>
              <p>{data && data.description && data.description[1]}</p>
            </Col>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="v2-cbnits-right"
            >
              <p>
                <span>
                  <img src={ab1} alt="" />
                </span>
                200+ Expert-level software engineers,
              </p>
              <p>
                <span>
                  <img src={ab2} alt="" />
                </span>
                Cloud engineers,
              </p>
              <p>
                <span>
                  <img src={ab3} alt="" />
                </span>
                Cybersecurity experts,
              </p>
              <p>
                <span>
                  <img src={ab4} alt="" />
                </span>
                Data Scientists,
              </p>
              <p>
                <span>
                  <img src={ab5} alt="" />
                </span>
                UX/UI designers,
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="v2-discovery py-5">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center">
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="imgSec">
                <img src={team && team.image} className="" alt="" />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <h2>
                diversity of <span className="skycolor">our team</span>
              </h2>
              <p>
                {team && team.description && team.description[0]}
              </p>
              <p>
                {team && team.description && team.description[1]}
              </p>
              <p>{team && team.description && team.description[2]}</p>
              <div className="">
                <Row className="d-flex text-center">
                  <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                    <div className="p-2">
                      <img src={company1} alt="" className="company-img" />
                    </div>
                    <div className="p-2"> 
                      <img src={company2} alt="" className="company-img"/>
                    </div>
                    <div className="p-2"> 
                      <img src={company3} alt="" className="company-img"/>
                    </div>
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                  <div className="p-2">
                      <img src={company4} alt="" className="company-img"/>
                    </div>
                    <div className="p-2">
                      <img src={company5} alt="" className="company-img"/>
                    </div>
                    <div className="p-2"> 
                      <img src={company6} alt="" className="company-img"/>
                    </div>
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                  <div className="p-2">
                      <img src={company7} alt="" className="company-img"/>
                    </div>
                    <div className="p-2">
                      <img src={company8} alt="" className="company-img"/>
                    </div>
                    <div className="p-2"> 
                      <img src={company9} alt="" className="company-img"/>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="v2-xfactor py-5">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center">
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <h2>
                X-factor of <span className="skycolor">cbnits</span>
              </h2>
              <p>{xFactor && xFactor.description && xFactor.description[0]}</p>
              <p>{xFactor && xFactor.description && xFactor.description[1]}</p>
              <p>{xFactor && xFactor.description && xFactor.description[2]}</p>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="imgSec">
                <img src={xFactor && xFactor.image} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="v2-tree py-5">
        <Container className="themed-container" fluid={false}>
          <h2>reasons to pick cbnits as</h2>
          <h2 className="skycolor mb-5">your it partner</h2>
          <Row className="cusrow">
            <Col xl={5} lg={5} className="mb-5 text-center">
              <img src={ar1} alt="" />
            </Col>
            <Col xl={2} lg={2} className="d-flex justify-content-center rignt">
              <span className="reason-pick">01</span>{" "}
            </Col>
            <Col xl={5} lg={5} className="mb-5 your-it-partner">
              <h6>{response.length && response[3].name}</h6>
              <p>
                {response.length && response[3].description[0]}
              </p>
            </Col>

            <Col xl={5} lg={5} className="mb-5 your-it-partner text-right">
              <h6>{response.length && response[2].name}</h6>
              <p>
                {response.length && response[2].description[0]}
              </p>
            </Col>
            <Col xl={2} lg={2} className="d-flex justify-content-center left">
              <span className="reason-pick">02</span>{" "}
            </Col>
            <Col xl={5} lg={5} className="mb-5 text-center">
              <img src={ar2} alt="" />
            </Col>

            <Col xl={5} lg={5} className="mb-5 text-center">
              <img src={ar3} alt="" />
            </Col>
            <Col xl={2} lg={2} className="d-flex justify-content-center rignt">
              <span className="reason-pick">03</span>{" "}
            </Col>
            <Col xl={5} lg={5} className="mb-5 your-it-partner">
              <h6>{response.length && response[1].name}</h6>
              <p>
                {response.length && response[1].description[0]}
              </p>
            </Col>

            <Col xl={5} lg={5} className="mb-5 your-it-partner text-right">
              <h6>{response.length && response[0].name}</h6>
              <p>
                {response.length && response[0].description[0]}
              </p>
            </Col>
            <Col xl={2} lg={2} className="d-flex justify-content-center left">
              <span className="cusrow reason-pick">04</span>{" "}
            </Col>
            <Col xl={5} lg={5} className="mb-5 text-center">
              <img src={ar4} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mission py5">
        <Container className="themed-container">
          <Row className="d-flex align-items-center">
            <Col md={6} lg={6} xl={6} sm={12} xs={12}>
              <div className="our-vision">
                <div className="vision-img">
                  <img src={about1} alt="" />
                  <h5>
                    Our Vision
                </h5>
                </div>
                  <p>
                    We strive to exceed expectations and be the best that we can be,
                    maintaining the highest level of quality. Our aim is to change
                    the way IT services are delivered, through focusing on our core values.
                    We always try to improve the quality of our services by exploring
                    innovative ideas.
                  </p>
              </div>
            </Col>
            <Col md={6} lg={6} xl={6} sm={12} xs={12}>
              <div className="our-mission">
                <div className="vision-img">
                  <img src={about2} alt="" />
                  <h5>
                    Our Mission
                </h5>
                </div>
                  <p>
                    Our mission is distinctly innovative.
                    We constantly seek new ways to improve our IT
                    offerings to increase our brand value.
                  </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
