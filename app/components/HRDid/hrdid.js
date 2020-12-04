import React from 'react'
import { Row, Col, Container } from "reactstrap";
import "./style.css";

import hrTechTree1 from "./../../images/csHRTech/hrTechTree1.png";
import hrTechTree2 from "./../../images/csHRTech/hrTechTree2.png";
import hrTechTree3 from "./../../images/csHRTech/hrTechTree3.png";
import hrTechTree4 from "./../../images/csHRTech/hrTechTree4.png";

const Hrdid = () => {
    return (
        <div className="v2-tree py-5">
            <Container className="themed-container" fluid={false}>
                <h2>What <span className="skycolor">We Did</span></h2>
                <Row className="hrdid-cusrow  mt-5">
                    <Col xl={5} lg={5} className="mb-5 text-center">
                        <img src={hrTechTree1} alt="" />
                    </Col>
                    <Col xl={2} lg={2} className="d-flex justify-content-center rignt">
                        <span className="hrdid-reason-pick">01</span>{" "}
                    </Col>
                    <Col xl={5} lg={5} className="mb-5 hrdid-your-it-partner">
                        <h6>HTML and CSS</h6>
                        <p>
                            Our Expertise designing team has built the enitire HTML and CSS
                        </p>
                    </Col>

                    <Col xl={5} lg={5} className="mb-5 hrdid-your-it-partner text-right">
                        <h6>Responsive on all platforms</h6>
                        <p>
                            We have made website and application responsive on all platforms
                        </p>
                    </Col>
                    <Col xl={2} lg={2} className="d-flex justify-content-center left">
                        <span className="hrdid-reason-pick">02</span>{" "}
                    </Col>
                    <Col xl={5} lg={5} className="mb-5 text-center">
                        <img src={hrTechTree2} alt="" />
                    </Col>

                    <Col xl={5} lg={5} className="mb-5 text-center">
                        <img src={hrTechTree3} alt="" />
                    </Col>
                    <Col xl={2} lg={2} className="d-flex justify-content-center rignt">
                        <span className="hrdid-reason-pick">03</span>{" "}
                    </Col>
                    <Col xl={5} lg={5} className="mb-5 hrdid-your-it-partner">
                        <h6>Develop the entire design and concept</h6>
                        <p>
                            Our web and app development team comprehensively implemented and developed entire design concept
                        </p>
                    </Col>

                    <Col xl={5} lg={5} className="mb-5 hrdid-your-it-partner text-right">
                        <h6>AI and Machine learning</h6>
                        <p>
                            We implement AI and Machine learning based mentoring platforms
                        </p>
                    </Col>
                    <Col xl={2} lg={2} className="d-flex justify-content-center left">
                        <span className="hrdid-cusrow reason-pick">04</span>{" "}
                    </Col>
                    <Col xl={5} lg={5} className="mb-5 text-center">
                        <img src={hrTechTree4} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hrdid
