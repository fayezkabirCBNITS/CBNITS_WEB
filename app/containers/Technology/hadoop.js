import React, { useState } from "react";
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from "reactstrap";
import Banner from "./../../components/TechBanner/techBanner";

import habootBnr from "./../../images/habootBnr.jpg";
import icon from "./../../images/list-icon.png";
import tickWhite from "./../../images/tickWhite.png";
import expertiseimg from "./../../images/hl10.jpg";
import habootMain from "./../../images/habootMain.png"
import haboot from './../../images/haboot.png'
import haboot2 from './../../images/haboot2.png'

import "./hadoop.css";

const whiteText = "And Cloudera";
const blueTxt = "Hadoop, Big Data";
const paraFirst = "Scalable & cost-effective full-stack development";
const paraSecond = "solutions";

const dummyArr = [
    {
        txt: "custom angular js development",
        img: icon,
    },
    {
        txt: "AJAX development",
        img: icon,
    },
    {
        txt: "Angular js mobile app development",
        img: icon,
    },
    {
        txt: "Angular js web app development",
        img: icon,
    },
    {
        txt: "Angular ecommerce application",
        img: icon,
    },
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

const expertise = [
    {
        txt: "Manufacturing",
        img: expertiseimg,
    },
    {
        txt: "Real Estate",
        img: expertiseimg,
    },
    {
        txt: "Healthcare",
        img: expertiseimg,
    },
    {
        txt: "Education/e-Learning",
        img: expertiseimg,
    },
    {
        txt: "Retail",
        img: expertiseimg,
    },
    {
        txt: "Energy",
        img: expertiseimg,
    },

    {
        txt: "Travel & Hospitality",
        img: expertiseimg,
    },
    {
        txt: "Logistics",
        img: expertiseimg,
    },
    {
        txt: "e-Commerce",
        img: expertiseimg,
    },
    {
        txt: "Social Networking",
        img: expertiseimg,
    },
];

const Hadoop = (props) => {
    return (
        <div>
            <Banner
                bannerImg={habootBnr}
                whiteText={whiteText}
                blueTxt={blueTxt}
                paraFirst={paraFirst}
                paraSecond={paraSecond}
            />
            <div className="language py-5">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center py-5">
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="develpment">
                                <h2>Apache Hadoop is at</h2>
                                <h2>
                                    the heart <span className="skycolor">of the big</span>
                                </h2>
                                <h2 className="skycolor">data revolution</h2>
                                <h2 className="skycolor mb-4">Cloudera</h2>
                                <p className="lightGreyText">
                                    Can help you put data at the center of your business and drive
                                    innovation. CBNITS provides consultancy assistance and
                                    comprehensive services for businesses that require support
                                    with Hadoop, Big Data & Cloudera requirements. We provide the
                                    industry’s largest, most experienced support team dedicated
                                    solely to your success.
                </p>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="imgSec p-5">
                                <img src={habootMain} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="skybg">
                    <Container className="themed-container" fluid={false}>
                        <Row className="d-flex align-items-center ">
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="imgSec p-5">
                                    <img src={haboot} alt="" />
                                </div>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="bigdata">
                                    <h6 className="white mb-4">
                                        BIG DATA <span className="red">CBNITS</span>
                                    </h6>
                                    {advantageArr.map((data, ibx) => (
                                        <p key={ibx}>
                                            <span>
                                                <img src={data.img} alt={data.img} />
                                            </span>
                                            {data.txt}
                                        </p>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center py-5">
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="cloudera">
                                <h6 className="mb-4">
                                    Cloudera <span className="skycolor">Services</span>
                                </h6>
                                {dummyArr.map((data, ibx) => (
                                    <p key={ibx}>
                                        <span>
                                            <img src={data.img} alt={data.img} />
                                        </span>
                                        {data.txt}
                                    </p>
                                ))}
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="imgSec p-5">
                                <img src={haboot2} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="darkbg py-5">
                    <Container className="themed-container" fluid={false}>
                        <div className=" cloudera text-center">
                            <h6 className="mb-3">
                                Domain <span className="skycolor">Expertise</span>
                            </h6>
                        </div>
                        <Row className="d-flex align-items-center ">
                            {expertise.map((data, ibx) => (
                                <Col xl={3} lg={3} md={4} sm={6} xs={6}>
                                    <div className="expertise text-center mt-4">
                                        <div className="expertiseimg">
                                            <img src={expertiseimg} alt="" />
                                        </div>
                                        <span>{data.txt}</span>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <div className="text-center">
                            <Button color="primary">Hire Us</Button>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Hadoop;