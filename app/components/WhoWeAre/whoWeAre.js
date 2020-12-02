import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from 'reactstrap';

import "./whoWeAre.css";
import t4 from "./../../images/t4.jpg";


const WhoWeAre = props => {
    return (
        <div>
            <div className="whoweare py-5">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center">
                        <Col xl={6} lg={6}>
                            <div className="whowe">
                                <h5>who <span className="skycolor">we are</span></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

                            </div>
                        </Col>
                        <Col xl={6} lg={6}>
                            <div className="whowe-img">
                                <img src={t4} alt="" />   
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default WhoWeAre;