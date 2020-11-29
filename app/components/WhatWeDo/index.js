import React, { useState, useEffect } from "react";
import "./whatwedo.css";
import { Row, Col, Container ,Form } from 'reactstrap';



const WhatWeDo = props => {

    const txtArr = [
        {
            desp: `From initial idea to execution, continuous support to steering business growth, we help you to move your 
            project forward.`,
            title: `Provide support startups need`
        },
        {
            desp: `As experts in startups, we help you rising to the challenges at every growth milestone.`,
            title: `Provide support startups need`
        },
        {
            desp: `Bootstrapped or ventured back, we’re there to provide talent with skills in demand. `,
            title: `Provide support startups need`
        },
    ]
    return (
        <div className="content-wrapper">

            <Container className="themed-container py-5" fluid={false}>
                <div className="we-subtitle"><h2>what < span>we do</span></h2></div>
                <Form>
                <Row className="d-flex justify-content-between ">
                    {
                        txtArr.map((data, idx) => (
                            <Col xl={4} lg={4} key={idx} >
                                <div className="we-container">
                                    <div className="num-txt">
                                        <span>{idx+1}</span>
                                        <h4>{data.title}</h4>
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

export default WhatWeDo;