import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './customerSay.css';
import ai from "./../../images/e1.png"
import blockchain from "./../../images/e2.png"
import v1 from "./../../images/v1.jpg";
import v2 from "./../../images/v2.jpg";
import v3 from "./../../images/v3.jpg";

const techArr = [
    {
        img: ai,
        title: "Al & Machine Learnings"
    },
    {
        img: blockchain,
        title: "blockchain"
    },
]



const Expertise = props => {
    return (
        <div className="customer py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center customer-head">
                    <h2>what our <span>customers say</span></h2>
                </div>
                <Row>
                    <Col xl={4} lg={4}>
                        <div className="each-customer">
                            <div className="customer-img">
                                {/* <img src={v1} alt="" /> */}
                                <video width="100%" height="100%" poster={v1} controls>
                                    <source src="https://api.cbnits.com/uploads/Madhukar-CBNITS-2.mp4" type="video/mp4" />
                                        <source src="movie.ogg" type="video/ogg"  />
                                            Your browser does not support the video tag.
                                </video>
                            </div>
                                    <div className="customer-details">
                                        <h4>James Walsh</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. </p>
                                    </div>
                        </div>
                    </Col>
                    <Col xl={4} lg={4}>
                        <div className="each-customer">
                            <div className="customer-img">
                                {/* <img src={v1} alt="" /> */}
                                <video width="100%" height="240" poster={v2} controls>
                                    <source src="https://api.cbnits.com/uploads/ShuoYang.mp4" type="video/mp4" />
                                        <source src="movie.ogg" type="video/ogg" />
                                            Your browser does not support the video tag.
                                </video>
                            </div>
                                    <div className="customer-details">
                                        <h4>Saraha Johnson</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. </p>
                                    </div>
                        </div>
                    </Col>
                    <Col xl={4} lg={4}>
                        <div className="each-customer">
                            <div className="customer-img">
                                {/* <img src={v1} alt="" /> */}
                                <video width="100%" height="240" poster={v3} controls>
                                    <source src="movie.mp4" type="video/mp4" />
                                        <source src="movie.ogg" type="video/ogg" />
                                            Your browser does not support the video tag.
                                </video>
                            </div>
                                    <div className="customer-details">
                                        <h4>tom Martin</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. </p>
                                    </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Expertise;