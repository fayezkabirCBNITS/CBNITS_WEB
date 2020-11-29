import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './aboutCbnits.css';
import a1 from "./../../images/a1.jpg"
import a2 from "./../../images/a2.jpg"



const Expertise = props => {
    return (
        <div className="aboutCbnits py-5">
            <Container className="themed-container" fluid={false}>
                <Row className="d-flex align-items-center">
                    <Col xl={6} lg={6}>
                        <Row className="d-flex align-items-center justify-content-center">
                            <Col xl={6} lg={6}>
                                <div className="left-party text-center">
                                    <img src={a1} alt="img" />
                                    <p>event & party</p>
                                </div>
                            </Col>
                            <Col xl={6} lg={6}>

                                <div className="right-party right-party-1">
                                    <p>event & party</p>
                                    <img src={a1} alt="img" />
                                </div>
                                <div className="right-party right-party-2">
                                    <img src={a2} alt="img" />
                                    <p>event & party</p>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                    <Col xl={6} lg={6} className="about-desp">
                        <h3>about cbnits</h3>
                        <h4>we are family</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        consectetur adipiscing elit.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        consectetur adipiscing elit.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Expertise;