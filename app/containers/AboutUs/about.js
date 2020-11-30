import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from 'reactstrap';

import "./about.css";
import AboutCbnits from "./../../components/About-AboutUs"
import WhoWeAre from "./../../components/WhoWeAre/whoWeAre";
import ImageGallery from "./../../components/Image-Gallery/gallery";
import WorkingWithUs from "./../../components/Caroousel/carousel";
import CustomerSay from "./../../components/CustomerSay/customarSay";
import Establishment from "./../../components/Establistment/establishment"
import react from "./../../images/react.png"
import angular from "./../../images/angular.png"
import vue from "./../../images/vue.png"
import node from "./../../images/node.png"
import python from "./../../images/python.png"
import java from "./../../images/java.png"
import golang from "./../../images/golang.png"
import msg from "./../../images/msg.png"
import ph from "./../../images/ph.png"
const imgArr = [
    { img: react, lang: "react.js" },
    { img: angular, lang: "angular.js" },
    { img: vue, lang: "vue.js" },
    { img: node, lang: "node.js" },
    { img: python, lang: "python" },
    { img: java, lang: "java" },
    { img: golang, lang: "golang" }
];



const AboutUs = props => {
    return (
        <div>
            <div className="header-img">
                <Container className="themed-container" fluid={false}>
                    <p className="title-info">
                        <span><abbr><img src={msg} alt="msg" /> </abbr>info@cbnits.com</span>
                        <span><abbr><img src={ph} alt="phone" /> </abbr>+1699-213-8574</span>
                    </p>
                    <div className="middle-section">
                        <h2 className="skycolor ">about <span>us</span></h2>
                        <p className="mb-xl-1">Our Expertise. Know more about what we do</p>
                    </div>
                    <div className="lang-container">
                        {
                            imgArr.map((language, idx) => (
                                <div key={idx} className="lang-wrapper">
                                    <abbr><img src={language.img} alt={language.lang} /></abbr>
                                    <span>{language.lang}</span>
                                </div>
                            )
                            )
                        }
                    </div>
                </Container>
            </div>
            <div className="sub-header">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex justify-content-center">
                        <Col xl={10} lg={10}>
                            <Nav tabs className="d-flex justify-content-center" >
                                <NavItem>
                                    <NavLink className="active-nav-link" href="#">ABOUT US</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">CAREERS</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">HOW WE WORK</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">OUR TEAM</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">MISSION AND VISSION</NavLink>
                                </NavItem>
                            </Nav>

                        </Col>
                    </Row>
                </Container>
            </div>
            <AboutCbnits />

            <WhoWeAre />
            <Establishment />
            <ImageGallery />
            <WorkingWithUs />
            <CustomerSay />

        </div>
    )
}

export default AboutUs;