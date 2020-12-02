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
import exper from "./../../images/365.png";

const a = ["healthcare", "security", "ED tech", "Hr tech", "E-commerce"];

const Specialised = (props) => {
  const [activeTab, setActiveTab] = useState("1");
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
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(activeIndexData?activeIndexData.name : "hii");

  return (
    <div className="domain py-5">
      <Container className="themed-container" fluid={false}>
      
        <Row className="d-flex align-items-center justify-content-between">
          <Col xl={6} lg={6} className="d-flex align-items-center leftTopic">
            <div >
              <img src={exper.png} alt="health" />
            </div>
            <h2>{activeIndexData?activeIndexData.name : ""}</h2>
          </Col>
          <Col xl={6} lg={6} className="desp-topic">
            <p>{activeIndexData?activeIndexData.description : ""}</p>
            <Button color="primary">Read more</Button>
          </Col>
        </Row>

      

       
      </Container>
    </div>
  );
};

export default Specialised;
