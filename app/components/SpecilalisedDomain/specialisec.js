import React, { useState } from 'react';
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from 'reactstrap';
import './sepcialised.css';
import health from "./../../images/health.png"
import healthcare from "./../../images/h1.png"
import security from "./../../images/h2.png"
import EdTech from "./../../images/h3.png"
import hrTech from "./../../images/h4.png"
import eCommerce from "./../../images/h5.png"


const Specialised = props => {
    return (
        <div className="domain py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center domain-head">
                    <h2>our specialised<span> domain</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commas accumsan lacus vel facilisis. </p>
                </div>
                
                <Row className="d-flex align-items-center justify-content-between">
                    <Col xl={6} lg={6} className="d-flex align-items-center leftTopic">
                        <div className="topic">
                            <img src={health} alt="health" />
                        </div>
                        <h2>Healthcare</h2>
                    </Col>
                    <Col xl={6} lg={6} className="desp-topic">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commas accumsan lacus vel facilisis.</p>
                        <Button color="primary">Read more</Button>
                    </Col>
                </Row>
                <div className="category-container">
                    <div className="text-center position-relative green green-back">
                        <img src={healthcare} alt="" />
                        <p>healthcare</p>
                    </div>
                    <div className="text-center position-relative purple">
                        <img src={security} alt="" />
                        <p>security</p>
                    </div>
                    <div className="text-center position-relative orange">
                        <img src={EdTech} alt="" />
                        <p>ED tech</p>
                    </div>
                    <div className="text-center position-relative sky">
                        <img src={hrTech} alt="" />
                        <p>Hr tech</p>
                    </div>
                    <div className="text-center position-relative blue">
                        <img src={eCommerce} alt="" />
                        <p>E-commerce</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Specialised;