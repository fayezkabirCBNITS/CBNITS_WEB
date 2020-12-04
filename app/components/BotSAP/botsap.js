import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from 'reactstrap';
import "./bot.css"


const DevopsBusiness = props => {

    return (
        <div className="botSap-bnits py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center botSap-head">
                    <h4>at CBNITS we have expertise in the following</h4>
                    <h6>technologies in respect to BOTs:</h6>
                </div>
                <Row className="d-flex align-items-center">
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                      <div className="d-flex text-center">
                          <div className="stDiv">
                            <h6>SAP RPA</h6>
                            <p>SAP has taken a deeper dive into RPA with its ‘Intelligent RPA’ offering. SAP Robotics Process Automation (RPA) is at the forefront of 
                                human-computer technology. With minimal human intervention, it enables and drives dynamic processes and addresses key functional requirements. In order to automate repetitive manual processes, SAP Intelligent Robotic Process Automation uses
                                intelligent bots.
                            </p>
                          </div>
                      </div>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                      <div className="d-flex text-center">
                          <div className="stDiv">
                            <h6>SAP CAI</h6>
                            <p>
                                SAP uses CAI (Conversational AI) for the development of chatbots. 
                                It enables people to train, build, connect, and monitor intelligent 
                                chatbots fully integrated with SAP products. SAP CAI uses Artificial 
                                Intelligence and Natural Language Processing technology. SAP CAI can 
                                be integrated with web chatbots in Desktop and mobiles with enriched 
                                and customized UI.
                            </p>
                          </div>
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default DevopsBusiness;