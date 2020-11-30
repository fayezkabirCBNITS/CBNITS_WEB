import React, { useState, useEffect } from "react";
import "./styles.css";
import { Row, Col, Container ,Form } from 'reactstrap';



const FourReasons = props => {

    const txtArr = [
        {
            desp: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...`,
            title: `We know your business already`
        },
        {
            desp: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...`,
            title: `Building context – not just code`
        },
        {
            desp: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.... `,
            title: `We are responsive and flexible`
        },
        {
            desp: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.... `,
            title: `7 years experience and counting`
        },
    ]
    return (
        <div className="content-wrapper">

            <Container className="themed-container py-5" fluid={false}>
                <div className="whyTitle text-center">
                    <h2>Four reasons why you should <br/>< span>choose our service</span></h2>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                </div>
                <Form>
                <Row className="d-flex justify-content-between">
                    {
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
                    }
                </Row>
                </Form>
            </Container>
        </div>
    )
}

export default FourReasons;