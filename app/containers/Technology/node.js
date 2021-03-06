import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "reactstrap";
import "./techLanguage.css";
import Banner from "./../../components/TechBanner/techBanner";
import Axios from "../../service/axios-config";
import bannerImg from "./../../images/nodeBnr.jpg";
import icon from "./../../images/list-icon.png";

const whiteText = "";
const blueTxt = "node js development";
const paraFirst =
  "End-to-end Node.JS development service to build faster and sca-";
const paraSecond = "label real-time application.";
import { withRouter } from "react-router-dom";


const Nodejs = (props) => {
  const [data, setData] = useState({});
  const [response, setResponse] = useState({});
  useEffect(() => {
    _getData();
    _getResponse();
  }, []);
  const _getData = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Node JS",
        category: "Node JS Development",
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
        page: "Node JS",
        category: "Advantages of hiring NodeJS",
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
                  Node js <span className="skycolor mb-5">development offerings</span>
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
              <div className="imgSec">
                <img src={data && data.image} alt="" />
              </div>
            </Col>
          </Row>
          <div className="text-center Ahire-req">
            <p>
              Hire the best in the industry Node developer from CBNITS to
              secure outstanding software development services according to your
              buisness requirements.
            </p>
          </div>
        </Container>
        <div className="Adarkbg">
          <Container className="themed-container" fluid={false}>
            <Row className="d-flex align-items-center ">
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="imgSec">
                  <img src={response && response.image} alt="" />
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="Aadvantages">
                  <h6>
                    Why Hire Node.Js Developers from{" "}
                    <span className="skycolor">CBNITS?</span>
                  </h6>
                  {response && response.description
                    ? response.description.map((item, key) => (
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

export default withRouter(Nodejs);
