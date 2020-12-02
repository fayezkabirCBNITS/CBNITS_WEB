import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './experience.css';
import exper from "./../../images/365.png";


const Experience = props => {
    return (
        <div className="experience py-5">
            <Container className="themed-container" fluid={false}>
                <Row className="d-flex align-items-center">
                    <Col xl={6} lg={6} className="circle-wrap d-flex align-items-center justify-content-center">
                        <div >
                        <img src={exper} 
                        style={{width:'100%', height:'100%'}}
                        />
                        </div>
                    </Col>
                    <Col xl={6} lg={6}>
                        <div>
                            <div className="text-center customer-head">
                            <h2>DYNAMICS <span>365</span></h2><abbr>combines CRM and ERp</abbr>
                                <p>Leaders and the hard-working personalities</p>
                            </div>
                           
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Experience;