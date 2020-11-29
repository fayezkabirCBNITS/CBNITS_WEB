import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './whycbnits.css';
import track from "./../../images/w1.png"
import support from "./../../images/w2.png"
import talent from "./../../images/w3.png"
import security from "./../../images/w4.png"

const featureArr = [
    {
        title: "Track Record",
        img: track
    },
    {
        title: "24/7 Hours Fast Support",
        img: support
    },
    {
        title: "Top Talent",
        img: talent
    },
    {
        title: "Start to End Security",
        img: security
    },
]


const WhyCbnits = props => {
    return (
        <div className="whyCbnits py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center whyTitle">
                    <h2>why<span> cbnits ?</span></h2>
                    <p>We don't deliberate. We deliver.</p>
                </div>
                <Row className="d-flex align-items-center justify-content-between">
                    {
                        featureArr.map((data, idx) => (
                            <Col xl={6} lg={6} key={idx}>
                                <div className="features">
                                    <Row className="d-flex align-items-center justify-content-center">
                                        <Col xl={2} lg={2}>
                                            <img src={data.img} alt="map" />
                                        </Col>
                                        <Col xl={10} lg={10} className="feature-text">
                                            <h4>{data.title}</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  dolore magna.
                                            aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                            accumsan lacus vel facilisis.
                                        </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default WhyCbnits;