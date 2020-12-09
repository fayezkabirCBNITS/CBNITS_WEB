import React from "react";
import { Row, Col, Container } from 'reactstrap';

import "./_about.css"

import ac1 from "./../../images/ac1.png";
import ac2 from "./../../images/ac2.png";
import ac3 from "./../../images/ac3.png";
import ac4 from "./../../images/ac4.png";

const dummy = [
    {
        img: ac1,
        count: "2000+",
        txt: "happy clients"
    },
    {
        img: ac2,
        count: "250",
        txt: "skilled experts"
    },
    {
        img: ac3,
        count: "1000+",
        txt: "finished projects"
    },
    {
        img: ac4,
        count: "2500+",
        txt: "media posts"
    },
]


const AboutCbnits = props => {
    return (
        <div className="about-bnits py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center head">
                    <h2>About <span className="skycolor">cbnits</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commas accumsan lacus vel facilisis. </p>
                </div>
                <Row className="d-flex align-items-center">
                    {
                        dummy.map((data, idx) => (
                            <Col xl={3} lg={3}>
                                <div className="tracks">
                                    <Row className="d-flex align-items-center">
                                        <Col lg={4}> <img src={data.img}alt="" /></Col>
                                        <Col lg={8}>
                                            <h5>{data.count}</h5>
                                            <p>{data.txt}</p>
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

export default AboutCbnits;