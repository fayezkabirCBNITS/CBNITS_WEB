import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import "./style.css";
import ToolTechnology from "./../../components/ToolTechnology/ToolTechnology";
import Banner from "./../../components/TechBanner/techBanner"
import appBnr from "./../../images/appBnr.jpg";
import Axios from "../../service/axios-config";

import react from "./../../images/react.png";
import angular from "./../../images/angular.png";
import vue from "./../../images/vue.png";
import node from "./../../images/node.png";
import python from "./../../images/python.png";
import java from "./../../images/java.png";
import golang from "./../../images/golang.png";
import msg from "./../../images/msg.png";
import ph from "./../../images/ph.png";
import app from "./../../images/app.png";
import app1 from "./../../images/app1.png";
import app2 from "./../../images/app2.png";
import app3 from "./../../images/app3.png";
import app4 from "./../../images/app4.png";
import app5 from "./../../images/app5.png";
import app6 from "./../../images/app6.png";

const imgArr = [
  { img: react, lang: "react.js" },
  { img: angular, lang: "angular.js" },
  { img: vue, lang: "vue.js" },
  { img: node, lang: "node.js" },
  { img: python, lang: "python" },
  { img: java, lang: "java" },
  { img: golang, lang: "golang" },
];
const whiteText = "development";
const blueTxt = "mobile app";
const paraFirst = "Bespoke Android & iPhone mobile app development";
const paraSecond = "solutions";
const techArr = [
  {
    img: app1,
    title: "iOS Application Development",
  },
  {
    img: app2,
    title: "Android Application Development",
  },
  {
    img: app3,
    title: "Cloud - Driven Mobile Apps Development ",
  },
  {
    img: app4,
    title: "Cross - Platform Application Development",
  },
  {
    img: app5,
    title: "Flutter Development",
  },
  {
    img: app6,
    title: "App Maintenance & Support",
  },
];

const MobileAppDevelopment = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [data, setData] = useState({});
  const [services, setServices] = useState([]);
  useEffect(() => {
    _getMobileApplication();
    _getServices();
  }, []);
  const _getMobileApplication = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        category: "Mobile Application Post",
        page: "Mobile App Development",
      });
      console.log("res-- Mobile App Devolopment --->", res);
      if (res.status == 200) {
        setData(res.data.data[0]);
      }
      else{
          console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };

  const _getServices = async() => {
    try {
        let res = await Axios.post("/getPageWiseDatabyCategory", {
          category: "App Development Services",
          page: "Mobile App Development",
        });
        console.log("res-- App Development Services --->", res);
        if (res.status == 200) {
          setServices(res.data.data.reverse());
        }
        else{
            console.log("Something went wrong!");
        }
      } catch (error) {
        console.log("error---->", error);
      }
  }

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
       <Banner
        bannerImg={appBnr}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
        paraSecond={paraSecond}
      />
      <div className="sub-header">
        <Container className="themed-container" fluid={false}>
          <Row
            className="d-flex justify-content-center"
            style={{ margin: "50px 0" }}
          >
            <Col xl={5} lg={5}>
              <div className="imgSec">
                <img src={data.image} />
              </div>
            </Col>
            <Col xl={7} lg={7}>
              <div className="centerDiv">
                <h2>
                  MOBILE <span className="skycolor">APPLICATIONS </span>{" "}
                </h2>
                <p>
                  {data && data.description && data.description[0]}
                </p>
                <div style={{ height: 20 }} />
                <p>
                  {data && data.description && data.description[1]}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="mobile py-5">
          <Container className="themed-container" fluid={false}>
            <div className="text-center mobile-heads">
              <h2>
                OUR MOBILE APP <span>DEVELOPMENT SERVICES</span>
              </h2>
            </div>

            <Row className="d-flex align-items-center  justify-content-center">
              {services && services.length
                ? services.map((data, index) => (
                    <Col
                      xl={4}
                      lg={4}
                      className=" d-flex align-items-center"
                      key={index}
                    >
                      <div className="mobile-wrap">
                        <div className="text-center">
                          <img src={data.image} />
                          <h6>{data.name}</h6>
                        </div>
                      </div>
                    </Col>
                  ))
                : ""}
            </Row>
          </Container>
        </div>
        <div className="themed-container">
          <ToolTechnology />
        </div>
        <div className="themed-container">
          <Container fluid={false}>
            <div className="text-center tool-bottamBanner">
              <p>
              Mobile apps have turned out to be the go-to solutions for businesses cutting across multiple domains. From design to strategy to development to maintenance, CBNITS provides you the finest app development budget.
              </p>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;
