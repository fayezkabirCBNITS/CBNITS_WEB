import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, Form, FormGroup, Label, Input, FormText, NavLink, Row, Col, Container, fo } from "reactstrap";
import Banner from "./../../components/TechBanner/techBanner";
import Axios from "./../../service/axios-config";

import bannerImg from "./../../images/hireUsBnr.jpg"
// import icon from "./../../images/list-icon.png"
// import angularcreation from "./../../images/angularcreation.png"
// import angularjs from "./../../images/angularjs.png"

import "./hireus.css";

const whiteText = "us";
const blueTxt = "hire";
const paraFirst =
    "CBNITS aims to provide the best-in-class remote hiring options of";
const paraSecond =
    "skilled resources";

const dummyArr = [
    {
        tech: "ui/ux"
    },
    {
        tech: "DevOps / Cloud DecOps"
    },
    {
        tech: "Hadoop & data science"
    },
    {
        tech: "python and java development"
    },
    {
        tech: "backend development"
    },
    {
        tech: "Cloud development"
    },
    {
        tech: "IOT(Internet of Things)"
    },
    {
        tech: "Microsoft Dynamics 365"
    },
    {
        tech: "dedicated full-stack development"
    },
    {
        tech: "maintance & support"
    },
    {
        tech: "Cyber security"
    },
    {
        tech: "blockchain technology"
    },
    {
        tech: "web development"
    },
    {
        tech: "react & anular development"
    },
    {
        tech: "Quality engineering"
    },
    {
        tech: "machine learning"
    },
    {
        tech: "mobile application development"
    },
    {
        tech: "applicaion development"
    },
]


const HireUs = (props) => {
    return (
        <div>
            <Banner
                bannerImg={bannerImg}
                whiteText={whiteText}
                blueTxt={blueTxt}
                paraFirst={paraFirst}
                paraSecond={paraSecond}
            />
            <div className="hirre py-5">
                <Container className="themed-container hirre-container" fluid={false}>
                    <h2>select as many of <span className="skycolor">these as apply</span></h2>

                    <Row className="mb-5">
                        {
                            dummyArr.map((data, idx) => (
                                <Col xl={3} key={idx}>

                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" />{data.tech}

                                        </Label>
                                    </FormGroup>
                                </Col>
                            ))
                        }
                    </Row>
                    <Row className="d-flex align-items-center justify-content-center user-hire-form pt-5">
                        <Col xl={10} lg={10} md={10}>
                            <Form className="w-100 ">
                                <Row form className="mb-2">
                                    <Col md={6} >
                                        <FormGroup className="px-4">
                                            <Label for="fullname">Full name*</Label>
                                            <Input type="email" invalid={false} valid={false} form name="email" id="full name" placeholder="enter your first name" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup className="px-4">
                                            <Label for="exampleEmail">Where are you from*</Label>
                                            <Input invalid={false} valid={false} type="select" name="select" id="exampleSelect">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup className="px-4">
                                            <Label for="examplePassword">Contact no*</Label>
                                            <Input invalid={false} valid={false} type="number" name="number" id="number" placeholder="enter your contact no" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup className="px-4">
                                            <Label for="email">Email*</Label>
                                            <Input invalid={false} valid={false} type="email" name="email" id="userEmail" placeholder="enter your email" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup row className="px-4">
                                    <Label for="exampleEmail" sm={2}>type of hiring*</Label>
                                    <Col sm={10} className="d-flex align-items-center">
                                        <FormGroup check className="mr-4">
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}
                                                monthly
                                        </Label>
                                        </FormGroup>
                                        <FormGroup check className="mr-4">
                                            <Label check>
                                                <Input type="radio" name="radio2" />{' '}
                                                fixed
                                        </Label>
                                        </FormGroup>
                                        <FormGroup check className="mr-4">
                                            <Label check>
                                                <Input type="radio" name="radio2" />{' '}
                                                decide later
                                        </Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                <Row>
                                    <Col md={12}>
                                        <FormGroup className="px-4">
                                            <Label for="text">yout note*</Label>
                                            <Input invalid={false} valid={false} type="textarea" rows={6} name="txtarea" id="textarea" placeholder="" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="text-center submit-btn">
                                    <Button color="primary">Sign in</Button>
                                </Row>
                            </Form>
                        </Col>
                    </Row>

                </Container>
            </div>

            <div className="hire-process-wrapper">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center">
                        <ul className="w-100 ">
                            {/* <Row className=" re-reverse"> */}
                            {
                                new Array(7).fill({ "hello": 12 }).map((data, index) => (
                                    // <Col xl={3}>
                                    <li >
                                        <div className="hire-process-li">
                                            <div className="hiring-process">{index + 1}</div>
                                            <p>jibon hell</p>
                                        </div>
                                    </li>

                                    // </Col>
                                ))
                            }
                            {/* </Row> */}
                        </ul>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default HireUs;
