import React, { useState, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import Banner from "./../../components/TechBanner/techBanner"
import Axios from "../../service/axios-config";

import bannerImg from "./../../images/fullStackBnr.png"
import icon from "./../../images/tick-white.png"
import classnames from 'classnames';
import { withRouter } from "react-router-dom";


import "./fullstack.css"

const whiteText = "full-stack developers"
const blueTxt = "hire dedicated"
const paraFirst = "Scalable & cost-effective full-stack development"
const paraSecond = "solutions"


const FullStack = props => {
    const [activeTab, setActiveTab] = useState('1');
    const [data, setData] = useState({});
    const [response, setResponse] = useState({});
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        _getData();
        _getResponse();
        _getTechnicalSkills();
    }, []);
    const _getData = async () => {
        try {
            let res = await Axios.post("/getPageWiseDatabyCategory", {
                page: "Full Stack Developer",
                category: "Dedicated Full Stack Developer",
            });
            console.log("res--- Full-Stack----->", res);
            if (res.status == 200) {
                setData(res.data.data[0]);
            } else {
                console.log("Something went wrong!");
            }
        } catch (error) {
            console.log("error---->", error);
        }
    };

    const _getResponse = async () => {
        try {
            let res = await Axios.post("/getPageWiseDatabyCategory", {
                page: "Full Stack Developer",
                category: "Advantages of Hiring Full-Stack Developers",
            });
            if (res.status == 200) {
                setResponse(res.data.data[0]);
            } else {
                console.log("Something went wrong!");
            }
        } catch (error) {
            console.log("error---->", error);
        }
    };

    const _getTechnicalSkills = async(skill="Backend") => {
        console.log("skill is --->", skill);
        try {
            let res = await Axios.post("/getPageWiseDatabyCategory", {
                page: "Full Stack Developer",
                category: skill,
            });
            if (res.status == 200) {
                setSkills(res.data.data);
            } else {
                console.log("Something went wrong!");
            }
        } catch (error) {
            console.log("error---->", error);
        }
    }

    const toggle = (tab, skill) => {
        if (activeTab !== tab) setActiveTab(tab);
        _getTechnicalSkills(skill);
    }


    return (
        <div className="full-stack">
            <Banner bannerImg={bannerImg} whiteText={whiteText} blueTxt={blueTxt} paraFirst={paraFirst} paraSecond={paraSecond} />
            <div className="full-dedicated py-5">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center">
                        <Col xl={6} lg={6} md={6} xs={12} sm={12}>
                            <div className="full-stack-dedicated">
                                <h2>Our Dedicated <span className="skycolor">Full-stack developer</span></h2>
                                <h6>{data && data.description && data.description[0]}</h6>
                                <p>{data && data.description && data.description[1]}</p>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} xs={12} sm={12}>
                            <div className="full-stack-img">
                                <img src={data && data.image} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="why-hire-fullstack py-5">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center">
                        <Col xl={6} lg={6} md={6} xs={12} sm={12}>
                            <div className="full-stack-img">
                                <img src={response && response.image} alt="" />
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} xs={12} sm={12}>
                            <div className="developer-from-cbnits">
                                <h6>why hire Full-stack <span className="organgecolor">developers from CBNITS ?</span></h6>
                                { response && response.description?
                                    response.description.map((item, ibx) => (
                                        <p key={ibx}>
                                            <span><img src={icon} alt={icon} /></span>
                                            {item}
                                        </p>
                                    )): null
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="fullstack-tab py-5">
                <Container className="themed-container text-center tab-container" fluid={false}>
                    <h2>Technical skills of our</h2>
                    <h2 className="skycolor mb-5">full-stack developers</h2>

                    <Row className="d-flex align-items-center">
                        <div style={{ width: "100%" }}>
                            <Nav tabs >
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1', 'Backend'); }}
                                    >
                                        Back-End
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2', "Frontend"); }}
                                    >
                                        Front-End
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggle('3', "Mobile App Development"); }}
                                    >
                                        Mobile App Development
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '4' })}
                                        onClick={() => { toggle('4', "Database"); }}
                                    >
                                        Database
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '5' })}
                                        onClick={() => { toggle('5', "Project Management Tools"); }}
                                    >
                                        Project Management Tools
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '6' })}
                                        onClick={() => { toggle('6', "Technical Skill"); }}
                                    >
                                        Technical Skill
                                </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId={activeTab}>
                                    <Row className="mt-5 ">
                                        { skills && skills.length >0?
                                        skills.map((item, idx) => (
                                            <Col xl={3} lg={4} md={6} xs={12} sm={12} key={idx}>
                                                <div className="tech-logo">
                                                    <div className="tech-logo-img">{<img src={item.image} alt="" />}</div>
                                                    <div className="tech-logo-name">{item.name}</div>

                                                </div>
                                            </Col>

                                        )): null
                                        }
                                    </Row>
                                </TabPane>

                            </TabContent>
                        </div>
                    </Row>
                        <div className="text-center">
                            <Button color="primary" onClick={()=> props.history.push("/hire-us")}>Hire Us</Button>
                        </div>
                </Container>
            </div>
        </div>
    )
}

export default withRouter(FullStack);