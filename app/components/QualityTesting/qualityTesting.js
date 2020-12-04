import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from 'reactstrap';
import "./test.css"
import Axios from "../../service/axios-config";

import tickWhite1 from "./../../images/qualityEng/qu1.png";
import tickWhite2 from "./../../images/qualityEng/qu2.png";
import tickWhite3 from "./../../images/qualityEng/qu3.png";
import tickWhite4 from "./../../images/qualityEng/qu4.png";
import tickWhite5 from "./../../images/qualityEng/qu5.png";
import tickWhite6 from "./../../images/qualityEng/qu6.png";
import tickWhite7 from "./../../images/qualityEng/qu7.png";
import tickWhite8 from "./../../images/qualityEng/qu8.png";
import tickWhite9 from "./../../images/qualityEng/qu9.png";

const expertise = [
    {
        txt: "Agile Testing",
        img: tickWhite1,
    },
    {
        txt: "DevOps Testing",
        img: tickWhite2,
    },
    {
        txt: "Functional Testing",
        img: tickWhite3,
    },
    {
        txt: "Load & Performance Testing",
        img: tickWhite4,
    },
    {
        txt: "MObile Testing",
        img: tickWhite5,
    },
    {
        txt: "Test Automation",
        img: tickWhite6,
    },

    {
        txt: "Service Virtalization",
        img: tickWhite7,
    },
    {
        txt: "Test Data Management",
        img: tickWhite8,
    },
    {
        txt: "Security Testing",
        img: tickWhite9,
    },
    {
        txt: "Monitoring & Analysis",
        img: tickWhite9,
    }
];

const CloudPortfolio = props => {

    return (
        <div className="quality-bnits py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center quality-head">
                    <h2>Quality Testing</h2>
                    <h2 className="skycolor">Core Services Offerings</h2>
                </div>
                <div className="quality-para text-center">
                    <p>
                        CBNITS is a certified software testing company in San Jose,California
                        From strategy consulting to test automation our highly-skilled resources
                        are really available for dedicated hiring our experienced quali-ty
                        testing engineers can help you test the functional and non functional aspects
                        of a wide variety of software, web and mobile applications
                    </p>
                </div>
                <Row className="d-flex align-items-center">
                    {expertise.map((data, idx) => (
                        <Col xl={3} lg={3} md={4} sm={12} xs={12} key={idx}>
                            <div className="quality-deliverOptn mt-4">
                                <div className="quality-deliverOptnNo">
                                    <div className="quality-dashBorder">
                                        <span><img src={data.img} alt="" /></span>
                                    </div>
                                </div>
                                <div className="quality-deliverDetails">
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

export default CloudPortfolio;