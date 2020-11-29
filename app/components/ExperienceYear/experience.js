import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './experience.css';


const Experience = props => {
    return (
        <div className="experience py-5">
            <Container className="themed-container" fluid={false}>
                <Row className="d-flex align-items-center">
                    <Col xl={6} lg={6} className="circle-wrap d-flex align-items-center justify-content-center">
                        <div className="circle-container">
                            <div className="circle text-center">
                                <p className="big-num">07</p>
                                <p>years</p>
                                <p>of experience</p>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} lg={6}>
                        <div>
                            <div className="exp-name">
                                <span>300</span> <abbr>employees</abbr>
                                <p>Leaders and the hard-working personalities</p>
                            </div>
                            <div className="exp-name">
                                <span>20</span> <abbr>countries</abbr>
                                <p>Countries where we have satisfied customers</p>
                            </div>
                            <div className="exp-name">
                                <span>100+</span> <abbr>Projects</abbr>
                                <p>Enterprise-class solutions & projects delivered</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Experience;