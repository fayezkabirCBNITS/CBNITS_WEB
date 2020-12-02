import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './aboutCbnits.css';
import help1 from "./../../images/help1.jpg"
import help2 from "./../../images/help2.jpg"
import help3 from "./../../images/help3.jpg"



const Expertise = props => {
    return (
        <div className="aboutCbnits-1 py-5">
            <Container className="themed-container" fluid={false}>
                <Row className="d-flex align-items-center">
                    <Col xl={6} lg={6}>
                        <Row className="d-flex align-items-center justify-content-center">
                            <Col xl={6} lg={10}>
                                <div className="left-party-about ">
                                    <img src={help1} alt="img" />
                                  
                                </div>
                            </Col>
                            <Col xl={6} lg={6}>

                                <div className="right-party right-party-1-1">
                                   
                                    <img src={help2} alt="img" />
                                </div>
                                <div className="right-party right-party-1-1">
                                    <img src={help3} alt="img" />
                                   
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