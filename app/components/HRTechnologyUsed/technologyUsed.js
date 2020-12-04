import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from 'reactstrap';
import "./style.css"
import Axios from "../../service/axios-config";

import hrTu1 from "./../../images/csHRTech/hrTu1.png";
import hrTu2 from "./../../images/csHRTech/hrTu2.png";
import hrTu3 from "./../../images/csHRTech/hrTu3.png";
import hrTu4 from "./../../images/csHRTech/hrTu4.png";
import hrTu5 from "./../../images/csHRTech/hrTu5.png";
import hrTu6 from "./../../images/csHRTech/hrTu6.png";
import hrTu7 from "./../../images/csHRTech/hrTu7.png";


const expertise = [
    {
      txt: "HTML",
      img: hrTu2,
    },
    {
      txt: "CSS",
      img: hrTu2,
    },
    {
      txt: "JAVASCRIPT",
      img: hrTu3,
    },
    {
      txt: "REACT NATIVE",
      img: hrTu4,
    },
    {
        txt: "JAVA SPRING",
        img: hrTu5,
    },
    {
        txt: "AWS RDS",
        img: hrTu6,
    },
    {
        txt: "TIGER GRAPH",
        img: hrTu7,
    }
  ];
  

const TechnologyUsed = props => {

    return (
        <div className="TechnolyUesd-bnits py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center TechnolyUesd-head">
                    <h2>Technology<span className="skycolor"> Used</span></h2>
                </div>
                <Row className="d-flex align-items-center mt-4">
                  {expertise.map((data, idx) => (
                    <Col xl={3} lg={3} md={4} sm={12} xs={12} key={idx}>
                      <div className="TechnolyUesd-deliverOptn mt-4">
                        <div className="TechnolyUesd-dashBorder">
                          <span><img src={data.img} alt=""/></span>
                        </div>
                        <div className="TechnolyUesd-deliverDetails">
                          <span>{data.txt}</span>
                        </div>
                      </div>
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>

    )
}

export default TechnologyUsed;