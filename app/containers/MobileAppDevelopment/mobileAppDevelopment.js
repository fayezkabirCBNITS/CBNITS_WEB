import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, TabContent, TabPane, NavLink, Row, Col, Container } from 'reactstrap';

//import "./about.css";
import AboutCbnits from "../../components/About-AboutUs"
import WhoWeAre from "../../components/WhoWeAre/whoWeAre";
import ImageGallery from "../../components/Image-Gallery/gallery";
import WorkingWithUs from "../../components/Caroousel/carousel";
import CustomerSay from "../../components/CustomerSay/customarSay";
import Establishment from "../../components/Establistment/establishment";
import Transformation from "../../components/Transformation";
import FourReasons from "../../components/FourReasons";
import Opertunities from "../../components/Opportunities";
import react from "./../../images/react.png"
import angular from "./../../images/angular.png"
import vue from "./../../images/vue.png"
import node from "./../../images/node.png"
import python from "./../../images/python.png"
import java from "./../../images/java.png"
import golang from "./../../images/golang.png"
import msg from "./../../images/msg.png"
import ph from "./../../images/ph.png"
import app from "./../../images/app.png"
import app1 from "./../../images/app1.png"
import app2 from "./../../images/app2.png"
import app3 from "./../../images/app3.png"
import app4 from "./../../images/app4.png"
import app5 from "./../../images/app5.png"
import app6 from "./../../images/app6.png"






const imgArr = [
    { img: react, lang: "react.js" },
    { img: angular, lang: "angular.js" },
    { img: vue, lang: "vue.js" },
    { img: node, lang: "node.js" },
    { img: python, lang: "python" },
    { img: java, lang: "java" },
    { img: golang, lang: "golang" }
];
const techArr = [
    {
        img: app1,
        title: "iOS Application Development"
    },
    {
        img: app2,
        title: "Android Application Development"
    },
    {
        img: app3,
        title: "Cloud - Driven Mobile Apps Development " 
    },
    {
        img: app4,
        title: "Cross - Platform Application Development"
    },
    {
        img: app5,
        title: "Flutter Development"
    },
    {
        img: app6,
        title: "App Maintenance & Support"
    },
    
]

import classnames from 'classnames';
//import Expertise from "../../components/OurExpertise/expertise";

const About = props => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            <div className="header-img">
                <Container className="themed-container" fluid={false}>
                    <p className="title-info">
                        <span><abbr><img src={msg} alt="msg" /> </abbr>info@cbnits.com</span>
                        <span><abbr><img src={ph} alt="phone" /> </abbr>+1699-213-8574</span>
                    </p>
                    <div className="middle-section">
                        <h2 className="skycolor ">Mobile App  <span>Development</span></h2>
                        <p className="mb-xl-1">Bespoke Android & iphone mobile app Development</p>
                        <p>solutions</p>
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
                {/* <Nav tabs>
                    <Container className="themed-container" fluid={false}>
                        <Row className="d-flex justify-content-center">
                            <Col xl={12} lg={12}>
                                <div className="d-flex">
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => { toggle('1'); }}
                                        >
                                            About Us
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                            Career
                                    </NavLink>
                                    </NavItem>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Nav> */}
                <Container className="themed-container" fluid={false}>
                    <div style = {{height : 50}}></div>
                    <Row className="d-flex justify-content-center">
                        <Col xl={6} lg={6}>
                            
                            <div>
                            <img src = {app} />
                         </div>
                         </Col>
                         <Col xl={6} lg={6}>
                       
                            <div>
                                <div style = {{height : 50}}></div>
                            <h1>MOBILE <span className = "skycolor">APPLICATIONS </span> </h1>
                            <p> loreum ipsVelit adipisicing 
                             ullamco qui cupidatat mollit veniam ad ut pariatur reprehenderit. 
                             Sit nostrud ea officia tempor. Magna ut qui sint sunt. 
                             Eu occaecat in culpa amet nisi exercitation ad dolor ut id labore ex occaecat. 
                             Proident fugiat est sit deserunt dolore sint aliqua pariatur pariatur fugiat cillum deserunt reprehenderit. Enim eu et duis qui magna dolor eiusmod. Magna aliqua dolor nulla eiusmod amet in.</p>  
                            <div style =  {{height : 20 }}></div>
                            <p> loreum ipsVelit adipisicing 
                             ullamco qui cupidatat mollit veniam ad ut pariatur reprehenderit. 
                             Sit nostrud ea officia tempor. Magna ut qui sint sunt. 
                             Eu occaecat in culpa amet nisi exercitation ad dolor ut id labore ex occaecat. 
                             Proident fugiat est sit deserunt dolore sint aliqua pariatur pariatur fugiat cillum deserunt reprehenderit. Enim eu et duis qui magna dolor eiusmod. Magna aliqua dolor nulla eiusmod amet in.</p>  
                            </div>
                       </Col> 
                    </Row>
                </Container>
                <div style = {{height : 50}}></div>
                <div className="expertise py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center tech-head">
                    <h2>OUR MOBILE APP  <span>DVELOPMENT SERVICES</span></h2>
                    <div style = {{height : 50}}></div>
                </div>
                <Row className="d-flex align-items-center justify-content-between">
                    {
                        techArr.map((data, index) => (
                            <Col xl={4} lg={4} className=" d-flex align-items-center justify-content-center" key={index}>
                                <div style = {{height : 200 ,width : 400}} className="tect-wrap">
                                <div  className="text-center">

                                    <img  style = {{height : 100 ,width : 80}} src={data.img} />
                                    <div style ={{height : 20}}></div>
                                    <h6 style = {{color : '#fff'}}>{data.title}</h6>
                                </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
            </div>
        </div>
    )
}

export default About;