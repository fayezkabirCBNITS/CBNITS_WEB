import React, { useState, useEffect } from "react";
import "./styles.css";
import { Row, Col, Container ,Form, Collapse, Button, CardBody, Card } from 'reactstrap';

import accordionImage from "./../../images/accArrow.png";

const Opertunities = props => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // const txtArr = [
    //     {
    //         desp: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...`,
    //         title: `We know your business already`
    //     },
    //     {
    //         desp: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...`,
    //         title: `Building context – not just code`
    //     },
    //     {
    //         desp: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.... `,
    //         title: `We are responsive and flexible`
    //     },
    //     {
    //         desp: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.... `,
    //         title: `7 years experience and counting`
    //     },
    // ]
    return (
        <div className="content-wrapper">

            <Container className="themed-container py-5" fluid={false}>
                <div className="whyTitle text-center">
                    <h2>Current career <br/>< span>opportunities at Cbnits</span></h2>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                </div>
                <Row className="d-flex justify-content-between">
                    <Col md={12}>
                        <div className="accWrap mb-3">
                            <div className="collapsTitle d-flex active" onClick={toggle}>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscintempor incididunt ut</p>
                                <span><img src={accordionImage} alt="next" className="img-fluid" /></span>
                            </div>
                            <Collapse isOpen={isOpen}>
                            <div className="collapseContent py-4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <ul class="listStyle">
                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li>Adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
                                    <li>Quis ipsum suspendisse</li>
                                    <li>Viverra maecenas accumsan lacus</li>
                                    <li>Suspendisse ultrices gravida.</li>
                                </ul>
                            </div>
                            </Collapse>
                        </div>
                        <div className="accWrap mb-3">
                            <div className="collapsTitle d-flex" onClick={toggle}>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscintempor incididunt ut</p>
                                <span><img src={accordionImage} alt="next" /></span>
                            </div>
                            <Collapse isOpen={isOpen}>
                            <div className="collapseContent py-4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <ul class="listStyle">
                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li>Adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
                                    <li>Quis ipsum suspendisse</li>
                                    <li>Viverra maecenas accumsan lacus</li>
                                    <li>Suspendisse ultrices gravida.</li>
                                    </ul>
                            </div>
                            </Collapse>
                        </div>
                    </Col>
                    {/* {
                        txtArr.map((data, idx) => (
                            <Col xl={3} lg={3} key={idx} >
                                <div className="we-container fourResonsBX">
                                    <div className="num-txt border-bottom mb-3 pb-3">
                                        <span>{idx+1}</span>
                                        <h6>{data.title}</h6>
                                    </div>
                                    <p className="desp">{data.desp}</p>
                                </div>
                            </Col>
                        ))
                    } */}
                </Row>
            </Container>
        </div>
    )
}

export default Opertunities;