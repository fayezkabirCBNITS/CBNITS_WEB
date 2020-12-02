import React, { useState } from 'react';
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from 'reactstrap';
import Banner from "./../../components/TechBanner/techBanner"

import bannerImg from "./../../images/banner2.jpg"
import icon from "./../../images/list-icon.png"
import angularcreation from "./../../images/angularcreation.png"
import angularjs from "./../../images/angularjs.png"

import "./techLanguage.css"

const dummyArr =[
    {
        txt : "custom angular js development",
        img :icon
    },
    {
        txt : "AJAX development",
        img :icon
    },
    {
        txt : "Angular js mobile app development",
        img :icon
    },
    {
        txt : "Angular js web app development",
        img :icon
    },
    {
        txt : "Angular ecommerce application",
        img :icon
    },
    {
        txt : "custom angular plugin module",
        img :icon
    },
    {
        txt : "angular CMS/Web protal",
        img :icon
    },
    {
        txt : "single page application",
        img :icon
    },
    {
        txt : "angular js game development",
        img :icon
    },
    {
        txt : "single page application",
        img :icon
    },
    {
        txt : "angular js consulting",
        img :icon
    },
]

const advantageArr =[
    {
        txt : "we have talented team of angular js developer who acn offer outstanding solutions for complex angular js projects",
        img :icon
    },
    {
        txt : "our development team implements angular js by using only the latest programming technologies and tools available.",
        img :icon
    },
    {
        txt : "Adherence to budget and deadline guidelines and deep focus on quality and customer satisfaction",
        img :icon
    },
    {
        txt : "We are a leading Angular Js development company  dedicated to offering result-orienred services to our global clients",
        img :icon
    },
]

const Angularjs = props => {
    return (
        <div>
            <Banner bannerImg={bannerImg} />
            <div className="language py-5">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center">
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="develpment">
                                <h2>our angularjs</h2>
                                <h2 className="skycolor mb-5">development</h2>
                                {
                                    dummyArr.map((data, index) => (
                                        <p key={index}>
                                            <span><img src={data.img} alt={data.img} /></span>
                                            {data.txt}
                                        </p>

                                    ))
                                }
                            </div>

                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div>
                                <img src={angularcreation} alt="" />
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
                            <h6>Advantages of hiring Angular JS dvelopers from <span className="skycolor">CBNITS</span></h6>
                            {
                                advantageArr.map((data, ibx) => (
                                    <p key={ibx}>
                                        <span><img src={data.img} alt={data.img} /></span>
                                        {data.txt}
                                    </p>

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

export default Angularjs;