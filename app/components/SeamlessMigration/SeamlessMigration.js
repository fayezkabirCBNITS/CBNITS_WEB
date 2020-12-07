import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import "./seamless.css";
import Axios from "../../service/axios-config";
import seamImage from "./../../images/career-left.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import icon from "./../../images/list-icon.png"

const SeamLess = (props) => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    _getLastPost();
  }, []);

  const _getLastPost = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Dynamic 365",
        category: "Dynamic 365 Last Post",
      });
      console.log("res-- Dynamic 365 --->", res);
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
    <div className="py-5">
      <Container className="themed-container" fluid={false}>
        <div className="text-center seam-head">
          <h2>We Help Seamless Migration </h2>
          <h2 className="skycolor">To Dynamic 365</h2>
          <p>
            Our Dynamics 365 expert can help you migrate from Dynamic CRM,
            Salesforce, SL, NAV, QuickBooks and other application to Dynamic
            365.
          </p>
        </div>
        <div className="seamCbnits py-5">
          <Container className="themed-container" fluid={false}>
            <Row className="d-flex align-items-center">
              <Col xl={6} lg={6}>
                <div className="seamCbnits-img">
                  <img src={response.image} alt="image" />
                </div>
              </Col>
              <Col xl={6} lg={6}>
                <div className="seamCbnits-Text">
                  <h2>
                    <span className="skycolor"> CBNITS, </span>
                    <span>A Trusted Microsoft Dynamic 365 Consultant </span>
                  </h2>
                </div>
                <div className="seamCbnits-pText">
                  {response && response.description && response.description.length > 0
                    ? response.description.map((item, key) => (
                      <Row key={key}>
                        <Col xl={1} lg={1}>
                        <img src={icon} alt={icon} />
                          {/* <FontAwesomeIcon
                            icon={faCheckCircle}
                            style={{
                              color: " #ff5c33",
                              marginRight: "2px",
                              fontSize: "18px",
                              marginTop: "5px",
                              marginLeft: "10px",
                            }}
                          /> */}
                        </Col>
                        <Col xl={11} lg={11}>
                          <p>
                            {item}
                          </p>
                        </Col>
                      </Row>
                    ))
                    : null}
                  {/* <Row>
                    <Col xl={1} lg={1}>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{
                          color: " #ff5c33",
                          marginRight: "2px",
                          fontSize: "18px",
                          marginTop: "5px",
                          marginLeft: "10px",
                        }}
                      />
                    </Col>
                    <Col xl={11} lg={11}>
                      <p>
                        {" "}
                        Our Dynamics 365 expert can help you migrate from
                        Dynamic CRM,
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={1} lg={1}>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{
                          color: " #ff5c33",
                          marginRight: "2px",
                          fontSize: "18px",
                          marginTop: "5px",
                          marginLeft: "10px",
                        }}
                      />
                    </Col>
                    <Col xl={11} lg={11}>
                      <p>
                        {" "}
                        Our Dynamics 365 expert can help you migrate from
                        Dynamic CRM,
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={1} lg={1}>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{
                          color: " #ff5c33",
                          marginRight: "2px",
                          fontSize: "18px",
                          marginTop: "5px",
                          marginLeft: "10px",
                        }}
                      />
                    </Col>
                    <Col xl={11} lg={11}>
                      <p>
                        {" "}
                        Our Dynamics 365 expert can help you migrate from
                        Dynamic CRM,
                      </p>
                    </Col>
                  </Row> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default SeamLess;
