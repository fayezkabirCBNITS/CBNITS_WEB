import React, { useState } from 'react';
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from 'reactstrap';
import Banner from "./../../components/TechBanner/techBanner"

import bannerImg from "./../../images/banner2.jpg"
import icon from "./../../images/list-icon.png"
import node from "./../../images/javaa.png"
import angularjs from "./../../images/angularjs.png"

const whiteText = "service"
const blueTxt = "Python development"
const paraFirst = "We leverage the power of Python for creating hogh performing"
const paraSecond = "real-time web applications "


import "./techLanguage.css"

const dummyArr = [
    {
        txt: "Custom node js development",
        img: icon
    },
    {
        txt: "AJAX development",
        img: icon
    },
    {
        txt: "Node js mobile app development",
        img: icon
    },
    {
        txt: "Node js web app development",
        img: icon
    },
    {
        txt: "Node ecommerce application",
        img: icon
    },
    {
        txt: "custom node plugin module",
        img: icon
    },
    {
        txt: "Node CMS/Web protal",
        img: icon
    },
    {
        txt: "Single page application",
        img: icon
    },
    {
        txt: "Node js game development",
        img: icon
    }
]

const advantageArr = [
    {
        txt: "we have talented team of angular js developer who acn offer outstanding solutions for complex angular js projects",
        img: icon
    },
    {
        txt: "our development team implements angular js by using only the latest programming technologies and tools available.",
        img: icon
    },
    {
        txt: "Adherence to budget and deadline guidelines and deep focus on quality and customer satisfaction",
        img: icon
    },
    {
        txt: "We are a leading Angular Js development company  dedicated to offering result-orienred services to our global clients",
        img: icon
    },
]

const Python = props => {
    return (
        <div>
            <Banner bannerImg={bannerImg} whiteText={whiteText} blueTxt={blueTxt} paraFirst={paraFirst} paraSecond={paraSecond} />
            <div className="language py-5">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center">
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="develpment">
                                <h2>Python <span className="skycolor mb-5">development</span></h2>
                                {/* <h2 className="skycolor mb-5">development</h2> */}
                                {dummyArr.map((item, key) => (
                                    <Row key={key}>
                                        <Col xl={1} lg={1}>
                                            <img src={item.img} alt={item.img}
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
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div>
                                <img src={node} alt="" />
                            </div>
                        </Col>
                    </Row>
                    <div className="text-center hire-req">
                        <p>Hire the best in the industry React Js developer from CBNITS to secure outstanding software development services according to your buisness requirements.</p>
                    </div>
                </Container>
                <div className="darkbg">
                    <Container className="themed-container" fluid={false}>
                        <Row className="d-flex align-items-center ">
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div>
                                    <img src={angularjs} alt="" />
                                </div>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="advantages">
                                    <h6>
                                        Advantages of hiring Python dvelopers from{" "}
                                        <span className="skycolor">CBNITS</span>
                                    </h6>
                                    {advantageArr.map((item, key) => (
                                        <Row key={key}>
                                            <Col xl={1} lg={1}>
                                                <img src={item.img} alt={item.img}
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
                        <div className="text-center">
                            <Button color="primary">Hire Us</Button>
                        </div>
                    </Container>

                </div>
            </div>
        </div>
    )
}

export default Python;