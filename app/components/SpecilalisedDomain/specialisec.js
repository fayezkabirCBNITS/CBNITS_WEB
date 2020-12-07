import React, { useState, useEffect } from "react";
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
import "./sepcialised.css";
import health from "./../../images/health.png";
import healthcare from "./../../images/h1.png";
import security from "./../../images/h2.png";
import EdTech from "./../../images/h3.png";
import hrTech from "./../../images/h4.png";
import eCommerce from "./../../images/h5.png";
import classnames from "classnames";
import axios from "axios";
import { withRouter } from "react-router-dom";

const a = ["healthcare", "security", "ED tech", "Hr tech", "E-commerce"];

const Specialised = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [activeColor ,setActiveColor] = useState("");
  const [readMoreLink , setReadmoreLink] = useState("");
  const [specialDomain, setSpecialDomain] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexData, setActiveIndexData] = useState([]);

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    getSpecialDomain();
  }, []);

  useEffect(() => {
    setActiveIndexData(specialDomain[activeIndex]);
  }, [activeIndex]);

  const getSpecialDomain = () => {
    axios({
      method: "POST",
      url: "https://api.cbnits.com/getHomePageImagebyCategory",
      data: {
        category: "Special Domains",
      },
    })
      .then((res) => {
        if (res) {
          setSpecialDomain(res.data.data);
          console.log(res.data.data[0]);
          setActiveIndexData(res.data.data[0]);
          setActiveColor(res.data.data[0].color);
          setReadmoreLink(res.data.data[0].link);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const gotoReadMore = _ => props.history.push(`/${readMoreLink}`);

  console.log(activeColor , readMoreLink , "--------------------------")
  return (
    <div className="domain py-5">
      <Container className="themed-container" fluid={false}>
        <div className="text-center domain-head">
          <h2>
            our specialised<span> domains</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commas accumsan lacus vel
            facilisis.{" "}
          </p>
        </div>
        <Row className="d-flex align-items-center justify-content-between">
          <Col xl={6} lg={6} className="d-flex align-items-center leftTopic">
            <div className="topic">
              <img src={activeIndexData?activeIndexData.thumbnailPic : ""} alt="health" />
            </div>
            <h2>{activeIndexData?activeIndexData.name : ""}</h2>
          </Col>
          <Col xl={6} lg={6} className="desp-topic">
            <p>{activeIndexData?activeIndexData.description : ""}</p>
            <Button color="primary" onClick={gotoReadMore}>Read more</Button>
          </Col>
        </Row>

        {/* <div className="category-container">
          <Nav tabs>
            {a.map((data, index) => (
              <NavItem key={index}>
                <NavLink
                  className={classnames({
                    "green-back": activeTab === `${index + 1}`,
                  })}
                  onClick={() => {
                    toggle(`${index + 1}`);
                  }}
                >
                  <div className="text-center position-relative">
                    <img src={healthcare} alt="" />
                    <p>{data}</p>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </div> */}

        <div className="category-container">
          {specialDomain.map((data, index) =>  (
            <div
              className={`text-center position-relative health-tab  ${activeColor === data.color ? `${activeColor}-active` : ""}`
              // ${activeIndex === index && activeIndex == 0 ? "green-active" : ""}
              // ${activeIndex === index && activeIndex == 1 ? "purple-active" : ""}
              // ${activeIndex === index && activeIndex == 2 ? "orange-active" : ""}
              // ${activeIndex === index && activeIndex == 3 ? "sky-active" : ""}
              // ${activeIndex === index && activeIndex == 4 ? "blue-active" : ""}

                      
            }
              key={index}
              onClick={() => {setActiveIndex(index) , setActiveColor(data.color) , setReadmoreLink(data.link)}}
            >
              <img src={data.logoPic} alt="" />
              <p>{data.name}</p>
            </div>
          )
          )}
          {/* <div className="text-center position-relative green green-back">
            <img src={specialDomain[0]} alt="" />
            <p>healthcare</p>
          </div>
          <div className="text-center position-relative purple">
            <img src={security} alt="" />
            <p>security</p>
          </div>
          <div className="text-center position-relative orange">
            <img src={EdTech} alt="" />
            <p>ED tech</p>
          </div>
          <div className="text-center position-relative sky">
            <img src={hrTech} alt="" />
            <p>Hr tech</p>
          </div>
          <div className="text-center position-relative blue">
            <img src={eCommerce} alt="" />
            <p>E-commerce</p>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default withRouter(Specialised);
