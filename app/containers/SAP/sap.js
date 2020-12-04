import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from "reactstrap";
import Banner from "../../components/TechBanner/techBanner";
import Axios from "../../service/axios-config";

import cloudDevBnr from "./../../images/cloudDevop/devopBnr.jpg";
import cloudMain from "./../../images/cloudDevop/cloudMain.png";
import devopmain2 from "./../../images/cloudDevop/devopmain2.jpg";
import icon from "./../../images/list-icon.png";
import tickWhite from "./../../images/tickWhite.png";
import expertiseimg from "./../../images/hl10.jpg";
import agile from "./../../images/cloudDevMain.jpg"
import cloudDevMain2 from "./../../images/cloudDevMain2.jpg"

import "./sap.css";
import DevopsOffering from '../../components/DevOps-Offering/devops-offering'
import DevopsBusiness from '../../components/Devops-Business/DevopsBusiness'


const blueTxt = "Our Expertise";
const whiteText = "On SAP";
const paraFirst = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

import tickWhite1 from "./../../images/cloudDevop/cd1.png";
import tickWhite2 from "./../../images/cloudDevop/cd2.png";
import tickWhite3 from "./../../images/cloudDevop/cd3.png";
import tickWhite4 from "./../../images/cloudDevop/cd4.png";
import tickWhite5 from "./../../images/cloudDevop/cd5.png";
import tickWhite6 from "./../../images/cloudDevop/cd6.png";
import tickWhite7 from "./../../images/cloudDevop/cd7.png";
import tickWhite8 from "./../../images/cloudDevop/cd8.png";
import tickWhite9 from "./../../images/cloudDevop/cd9.png";

const expertise = [
    {
        txt: "Manufacturing",
        img: tickWhite1,
    },
    {
        txt: "Real Estate",
        img: tickWhite2,
    },
    {
        txt: "Healthcare",
        img: tickWhite3,
    },
    {
        txt: "Education/e-Learning",
        img: tickWhite4,
    },
    {
        txt: "Retail",
        img: tickWhite5,
    },
    {
        txt: "Energy",
        img: tickWhite6,
    }
];
const advantageArr = [
    {
        txt: "Big Data Development Maintenance & Support",
        img: tickWhite,
    },
    {
        txt: "Data Integration and Management",
        img: tickWhite,
    },
    {
        txt: "Cloudera Services",
        img: tickWhite,
    },
    {
        txt: "Data Integration and Management",
        img: tickWhite,
    },
    {
        txt: "Cloudera Services",
        img: tickWhite,
    },
    {
        txt: "Big Data Analytics & Insights Services",
        img: tickWhite,
    },
    {
        txt: "Hadoop configuration management,",
        img: tickWhite,
    },
    {
        txt: "Hadoop monitoring, Hadoop Metrics,",
        img: tickWhite,
    },
];


const SAP = (props) => {

    return (
        <div>
            <Banner
                bannerImg={cloudDevBnr}
                whiteText={whiteText}
                blueTxt={blueTxt}
                paraFirst={paraFirst}
            />
            <div className="sapCbnits py-5">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center">
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="sapCbnits-Text">
                                <p>CBNITS makes use of SAP's intelligent Technology Packages(IT's) which is a buldle of intelligent Robotics
                                    Process Automation (RPA). SAP
                                    Conversation AI and Machine Learning foundation services
                                </p>
                                <p className="skycolor">
                                    We have proven skills in designing and building bots across various platforms
                                </p>
                            </div>
                            <Row className="d-flex align-items-center">
                                {
                                    expertise.map((data,idx)=>(
                                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <div className="sap-deliverOptn mt-3">
                                            <div className="sap-deliverOptnNo">
                                                <div className="sap-dashBorder">
                                                    <span><img src={data.img} alt=""/></span>
                                                </div>
                                            </div>
                                            <div className="sap-deliverDetails">
                                                <span>{data.txt}</span>
                                            </div>
                                        </div>
                                    </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12} >
                            <div className="sapCbnits-img">
                                <img src={cloudMain} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <DevopsOffering />
            </div>
            <div>
                <DevopsBusiness />
            </div>
            <div className="devopsCbnits py-5">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center">
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="devopsCbnits-img">
                                <img src={devopmain2} alt="" />
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="devopsCbnits-advantages">
                                <h6>
                                    Why CBNITS as your Devops sevices provider?
                                </h6>
                                {advantageArr.map((item, key) => (
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
                                            <p>
                                                {item.txt}
                                            </p>
                                        </Col>
                                    </Row>
                                ))
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="text-center devopsCbnits-button">
                <Button color="primary">Hire Us</Button>
            </div>
        </div>
    );
};

export default SAP;
