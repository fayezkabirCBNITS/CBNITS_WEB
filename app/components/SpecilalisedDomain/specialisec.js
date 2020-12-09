import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "reactstrap";
import "./sepcialised.css";
import { withRouter } from "react-router-dom";

const a = ["healthcare", "security", "ED tech", "Hr tech", "E-commerce"];

const Specialised = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [activeColor, setActiveColor] = useState("");
  const [readMoreLink, setReadmoreLink] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexData, setActiveIndexData] = useState([]);

  const specialDomain = props.specialDomain;

  useEffect(() => {
    if (props.specialDomain && props.specialDomain.length) {
      setActiveIndexData(props.specialDomain[0]);
      setActiveColor(props.specialDomain[0].color);
      setReadmoreLink(props.specialDomain[0].link);
    }
  }, [specialDomain]);

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    setActiveIndexData(specialDomain[activeIndex]);
  }, [activeIndex]);

  const gotoReadMore = (_) => props.history.push(`/${readMoreLink}`);

  return (
    <div className="domain py-5">
      <Container className="themed-container" fluid={false}>
        <div className="text-center domain-head">
          <h2>
            our specialised<span> domains</span>
          </h2>
        </div>
        <Row className="d-flex align-items-center justify-content-between">
          <Col xl={6} lg={6} className="d-flex align-items-center leftTopic">
            <div className="topic">
              <img
                src={activeIndexData ? activeIndexData.thumbnailPic : ""}
                alt="health"
              />
            </div>
            <h2>{activeIndexData ? activeIndexData.name : ""}</h2>
          </Col>
          <Col xl={6} lg={6} className="desp-topic">
            <p>{activeIndexData ? activeIndexData.description : ""}</p>
            <Button color="primary" onClick={gotoReadMore}>
              Read more
            </Button>
          </Col>
        </Row>

        <div className="category-container">
          {specialDomain.map((data, index) => (
            <div
              className={`text-center position-relative health-tab  ${
                activeColor === data.color ? `${activeColor}-active` : ""
              }`}
              key={index}
              onClick={() => {
                setActiveIndex(index),
                  setActiveColor(data.color),
                  setReadmoreLink(data.link);
              }}
            >
              <img src={data.logoPic} alt="" />
              <p>{data.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default withRouter(Specialised);
