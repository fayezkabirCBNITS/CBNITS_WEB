import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, Form, FormGroup, Label, Input, FormText, NavLink, Row, Col, Container, fo } from "reactstrap";
import Banner from "./../../components/TechBanner/techBanner";
import Axios from "./../../service/axios-config";
import tool7 from "./../../images/tools7.png"
import bannerImg from "./../../images/aboutBnr.jpg"
import ang from "./../../images/angularcreation.png"

import aboutC from "./../../images/aboutC.png"
import aboutM from "./../../images/aboutM.png"

import ar1 from "./../../images/ar1.png"
import ar2 from "./../../images/ar2.png"
import ar3 from "./../../images/ar3.png"
import ar4 from "./../../images/ar4.png"

import ab1 from "./../../images/ab1.png"
import ab2 from "./../../images/ab2.png"
import ab3 from "./../../images/ab3.png"
import ab4 from "./../../images/ab4.png"
import ab5 from "./../../images/ab5.png"

const whiteText = "us"
const blueTxt = "about"
const paraFirst = "Our exportise , know more about what we do"
const paraSecond = ""
import "./about.css"
const AboutUs = props => {
    return (
        <div className="about-v2">
            <Banner bannerImg={bannerImg} whiteText={whiteText} blueTxt={blueTxt} paraFirst={paraFirst} paraSecond={paraSecond} />
            <div className="aboutv2-part py-5">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center">
                        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="v2-cbnits-left">

                            <h2>about <span className="skycolor">cbnits</span></h2>
                            <p><span className="skycolor">CBNITS</span> is a premier Enterprise Solution & IT service provider. With our effective digital solutions and immense expertise in cutting-edge technologies, we are helping companies around the world to transform their businesses</p>
                            <p>With our 180+ expert-level software engineers, cloud engineers, cybersecurity experts, Data Scientists, and UX/UI designers, we have built an impressive
                            portfolio worldwide. We strive for excellence at every stage of our clients’
                        project development.</p>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="v2-cbnits-right">
                            <p><span><img src={ab1} alt="" /></span>180+ Expert-level software engineers,</p>
                            <p><span><img src={ab2} alt="" /></span>Cloud engineers,</p>
                            <p><span><img src={ab3} alt="" /></span>Cybersecurity experts,</p>
                            <p><span><img src={ab4} alt="" /></span>Data Scientists,</p>
                            <p><span><img src={ab5} alt="" /></span>UX/UI designers,</p>
                        </Col>
                    </Row>
                </Container>
            </div>



            <div className="v2-discovery py-5">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center">
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="imgSec">
                                <img src={aboutM} className="" alt="" />

                            </div>

                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>

                            <h2>diversity <span className="skycolor">our team</span></h2>
                            <p>From start-ups to the most recognizable multinational corporations, we have worked with almost every type of organization. CBNITS is structured to offer you the best IT Solutions at an affordable price.
                            </p>
                            <p>We want to help you manage, measure, and develop your business with our agile IT services. We have a remarkable track record of working on some of the complex projects that require high-level of expertise on the cutting-edge technologies like Blockchain, IoT, AI, Big Data,</p>
                            <p>Cybersecurity, Cloud, AR, VR and more.</p>

                        </Col>
                    </Row>
                </Container>
            </div>




            <div className="v2-xfactor py-5">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center">
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>

                            <h2>X-factor of <span className="skycolor">cbnits</span></h2>
                            <p>From start-ups to the most recognizable multinational corporations, we have worked with almost every type of organization. CBNITS is structured to offer you the best IT Solutions at an affordable price.
</p>
                            <p>We want to help you manage, measure, and develop your business with our agile IT services. We have a remarkable track record of working on some of the complex projects that require high-level of expertise on the cutting-edge technologies like Blockchain, IoT, AI, Big Data,</p>
                            <p>Cybersecurity, Cloud, AR, VR and more.</p>

                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="imgSec">
                            <img src={aboutC} alt="" />
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>


            <div className="v2-tree py-5">
                <Container className="themed-container" fluid={false}>
                    <h2>reasons to pick cbnits as</h2>
                    <h2 className="skycolor mb-5">your it partner</h2>
                    <Row className="cusrow">
                        <Col xl={5} lg={5} className="mb-5 text-center">
                            <img src={ar1} alt="" />
                        </Col>
                        <Col xl={2} lg={2} className="d-flex justify-content-center rignt"><span className="reason-pick">01</span> </Col>
                        <Col xl={5} lg={5} className="mb-5 your-it-partner">
                            <h6>A Wide Spectrum of Skills & Experience</h6>
                            <p>A balanced team of senior as well as young yet talented professionals with international industry exposure.</p>
                        </Col>



                        <Col xl={5} lg={5} className="mb-5 your-it-partner text-right">
                            <h6>24/7 Support</h6>
                            <p>Lightning-fast technical support as clients can always give us a call and count on us to help them solve their problems.</p>
                        </Col>
                        <Col xl={2} lg={2} className="d-flex justify-content-center left"><span className="reason-pick">02</span> </Col>
                        <Col xl={5} lg={5} className="mb-5 text-center">
                            <img src={ar2} alt="" />
                        </Col>

                        <Col xl={5} lg={5} className="mb-5 text-center">
                            <img src={ar3} alt="" />
                        </Col>
                        <Col xl={2} lg={2} className="d-flex justify-content-center rignt"><span className="reason-pick">03</span> </Col>
                        <Col xl={5} lg={5} className="mb-5 your-it-partner">
                            <h6>Focus on Innovation</h6>
                            <p>Perfectly- priced and value-driven IT services that can bolster a company’s exposure on the digital world and ultimately taking it to the next level.</p>
                            </Col>



                        <Col xl={5} lg={5} className="mb-5 your-it-partner text-right">
                            <h6>Amazing Hiring Option</h6>
                            <p>The most scalable dedicated hiring options of qualified developers.</p></Col>
                        <Col xl={2} lg={2} className="d-flex justify-content-center left"><span className="cusrow reason-pick">04</span> </Col>
                        <Col xl={5} lg={5} className="mb-5 text-center">
                            <img src={ar4} alt="" />
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default AboutUs;