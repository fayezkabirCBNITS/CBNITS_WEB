import React, { useState, useEffect } from "react";
import {  Button, Row, Col, Container } from "reactstrap";
import Banner from "./../../components/TechBanner/techBanner";
import Axios from "../../service/axios-config";

import bannerImg from "./../../images/banner2.jpg";
import icon from "./../../images/list-icon.png";
import { withRouter } from "react-router-dom";

const whiteText = "service";
const blueTxt = "Java development";
const paraFirst = "Pick the right developers from our talented pool of";
const paraSecond = "java programmers and kick-start your java projects no ";

import "./techLanguage.css";



const Javajs = (props) => {
  const [data, setData] = useState({});
  const [response, setResponse] = useState({});
  useEffect(() => {
    _getData();
    _getResponse();
  }, []);
  const _getData = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Java",
        category: "Java Development",
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

  const _getResponse = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Java",
        category: "Advantages of Java Developer",
      });
      if (res.status == 200) {
        setResponse(res.data.data[0]);
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };
  return (
    <div>
      <Banner
        bannerImg={bannerImg}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
        paraSecond={paraSecond}
      />
      <div className="Alanguage py-5">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center">
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="Adevelpment">
                <h2>
                  Java <span className="skycolor mb-5">development</span>
                </h2>
                {/* <h2 className="skycolor mb-5">development</h2> */}
                {data && data.description
                  ? data.description.map((item, key) => (
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
                          <p>{item}</p>
                        </Col>
                      </Row>
                    ))
                  : null}
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div>
                <img src={data && data.image} alt="" />
              </div>
            </Col>
          </Row>
          <div className="text-center Ahire-req">
            <p>
              Hire the best in the industry Java developer from CBNITS to
              secure outstanding software development services according to your
              buisness requirements.
            </p>
          </div>
        </Container>
        <div className="Adarkbg">
          <Container className="themed-container" fluid={false}>
            <Row className="d-flex align-items-center ">
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <div>
                  <img src={response && response.image} alt="" />
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="Aadvantages">
                  <h6>
                    What Makes <span className="skycolor">CBNITS</span> Java
                    Developer Stand Out?
                  </h6>
                  { response && response.description?
                  response.description.map((item, key) => (
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
                        <p>{item}</p>
                      </Col>
                    </Row>
                  )):null}
                </div>
              </Col>
            </Row>
                        <div className="text-center">
                            <Button color="primary" onClick={()=> props.history.push("/hire-us")}>Hire Us</Button>
                        </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Javajs);
