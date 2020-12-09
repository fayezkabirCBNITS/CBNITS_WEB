import React, { useState, useEffect } from "react";
import { Row, Col, Container, Collapse } from "reactstrap";
import "./styles.css";
import Axios from "../../service/axios-config";

import accordionImage from "./../../images/accArrow.png";

const Opertunities = (props) => {
  const [data, setData] = useState([]);
  const [currentId, setCurrentId] = useState(0);

  const toggle = (id) => {
    console.log("ids-->", currentId, id);
    if (currentId == id) {
      setCurrentId(0);
    } else {
      setCurrentId(id);
    }
  };

  useEffect(() => {
    _getOpportunities();
  }, []);

  const _getOpportunities = async () => {
    try {
      let res = await Axios.get("/getallCareerPost");
      if (res.status == 200) {
        setData(res.data.data.reverse());
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };

  return (
    <div className="oppurtunity-wrapper">
      <Container className="themed-container py-5" fluid={false}>
        <div className="opportunity text-center">
          <h2>
            Current career <br />
            <span className="skycolor">opportunities at Cbnits</span>
          </h2>
          <p className="my-4">
            You can check the latest job openings here if you are looking to be
            a part of a young, vibrant and growing team. Take your first step to
            an incredible career with us.{" "}
          </p>
        </div>
        <Row className="d-flex justify-content-between">
          <Col md={12}>
            {data && data.length > 0
              ? data.map((accordian, key) => (
                  <div className="accWrap mb-3" key={key}>
                    <div
                      className={
                        currentId == accordian._id
                          ? "collapsTitle d-flex active"
                          : "collapsTitle d-flex"
                      }
                      onClick={() => toggle(accordian._id)}
                    >
                      <p className="mb-0">{accordian.careerTitle}</p>
                      <span>
                        <img
                          src={accordionImage}
                          alt="next"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                    <Collapse isOpen={currentId == accordian._id}>
                      <div className="collapseContent py-4">
                        <div>
                          <p className="pl-xl-5 pl-lg-5 pl-md-4 cllp-p">{accordian.careerExperienceYr}</p>
                          <Row className="d-flex align-items-center">
                            <Col xl={5} lg={5} md={5} sm={12}>
                              <div className="imgSec">
                                <img src={accordian.careerImage} alt="" />
                              </div>
                            </Col>
                            <Col xl={7} lg={7} md={7} sm={12}>
                              <ul class="listStyle">
                                {accordian.careerDescription &&
                                  accordian.careerDescription.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                  ))}
                              </ul>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Collapse>
                  </div>
                ))
              : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Opertunities;
