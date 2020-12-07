import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import Banner from "../../components/TechBanner/techBanner";
import Axios from "../../service/axios-config";
import "./sap.css";

import sapBanner from "./../../images/sap/sapBnr.jpg";
import sapBnr from "./../../images/sap/sapMain.jpg";
import BotSap from './../../components/BotSAP/botsap';
import SapTechnology from './../../components/SAPTechnology/sapTechnology'

const blueTxt = "Our Expertise";
const whiteText = "On SAP";
const paraFirst = "";

import tickWhite1 from "./../../images/sap/sapIcon1.jpg";
import tickWhite2 from "./../../images/sap/sapIcon2.png";
import tickWhite3 from "./../../images/sap/sapIcon3.png";
import tickWhite4 from "./../../images/sap/sapIcon4.png";
import tickWhite5 from "./../../images/sap/sapIcon5.png";
import tickWhite6 from "./../../images/sap/sapIcon6.png";


const expertise = [
    {
        txt: "Web Applications",
        img: tickWhite1,
    },
    {
        txt: "Ms Office Applications",
        img: tickWhite2,
    },
    {
        txt: "Desktop Application",
        img: tickWhite3,
    },
    {
        txt: "SAP UI5",
        img: tickWhite4,
    },
    {
        txt: "PDF",
        img: tickWhite5,
    },
    {
        txt: "SAP GUI",
        img: tickWhite6,
    }
];


const SAP = (props) => {

    return (
        <div>
            <Banner
                bannerImg={sapBanner}
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
                                    Process Automation (RPA) SAP
                                    Conversation AI and Machine Learning foundation services
                                </p>
                                <p className="skycolor">
                                    We have proven skills in designing and building bots across various platforms
                                </p>
                            </div>
                            <Row className="d-flex align-items-center">
                                {
                                    expertise.map((data, idx) => (
                                        <Col xl={6} lg={6} md={6} sm={12} xs={12} key={idx}>
                                            <div className="sap-deliverOptn mt-3">
                                                <div className="sap-deliverOptnNo">
                                                    <div className="sap-dashBorder">
                                                        <span><img src={data.img} alt="" /></span>
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
                                <img src={sapBnr} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <BotSap />
            </div>
            <div>
                <SapTechnology/>
            </div>
        </div>
    );
};

export default SAP;
