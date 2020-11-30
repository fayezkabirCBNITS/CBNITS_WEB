import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './style.css';

import careerImg from "./../../images/career-left.png";

const Transformation = props => {
    return (
        <div className="whyCbnits py-5">
            <Container className="themed-container" fluid={false}>
                
                <Row className="d-flex align-items-center justify-content-between">
                   <Col sm={6}>
                   <img src={careerImg} alt="next" />
                   </Col>
                   <Col sm={6}>
                    <div className="whyTitle">
                        <h2>transformation at <span> speed and scale.</span></h2>
                        <p className="mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    </div>
                    <ul className="listStyle">
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
                        <li>Quis ipsum suspendisse</li>
                        <li>Viverra maecenas accumsan lacus</li>
                        <li>Suspendisse ultrices gravida.</li>
                    </ul>
                   </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Transformation;