import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import Banner from "./../../components/TechBanner/techBanner"

import bannerImg from "./../../images/fullStackBnr.png"
import icon from "./../../images/tick-white.png"
import fullstackcreation from "./../../images/fullStack.png"
import fulljs from "./../../images/fullStackjs.png";
import classnames from 'classnames';
import python from "./../../images/website/tech1.png"
import javascript from "./../../images/website/tech2.png"
import ruby from "./../../images/website/tech3.png"
import php from "./../../images/website/tech4.png"
import ccc from "./../../images/website/tech5.png"
import typescript from "./../../images/website/tech6.png"
import go from "./../../images/website/tech7.png"
import swift from "./../../images/tools7.png"
import java from "./../../images/tools9.png"

const techArr = [
    {
        techname: "python",
        img: python,
    },
    {
        techname: "javascript",
        img: javascript,
    },
    {
        techname: "ruby",
        img: ruby,
    },
    {
        techname: "php",
        img: php,
    },
    {
        techname: "c++",
        img: ccc,
    },
    {
        techname: "typescript",
        img: typescript,
    },
    {
        techname: "go",
        img: go,
    },
    {
        techname: "swift",
        img: swift,
    },
    {
        techname: "Java",
        img: java,
    }
]



import "./fullstack.css"

const whiteText = "full-stack"
const blueTxt = "hire dedicated"
const paraFirst = "scalable & cost effective full-stack development"
const paraSecond = "solutions"

const advantageArr = [
    {
        txt: "directly access resource",
        img: icon
    },
    {
        txt: "flexible hiring models on hourly/weekly/monthly/yearly",
        img: icon
    },
    {
        txt: "source code authentication",
        img: icon
    },
    {
        txt: "agile development process",
        img: icon
    },
    {
        txt: "NDA signed with 100% Confidentiality",
        img: icon
    },
]

const FullStack = props => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const language = [

    ]

    return (
        <div className="full-stack">
            <Banner bannerImg={bannerImg} whiteText={whiteText} blueTxt={blueTxt} paraFirst={paraFirst} paraSecond={paraSecond} />
            <div className="full-dedicated py-5">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center">
                        <Col xl={6} lg={6} md={6} xs={12} sm={12}>
                            <div className="full-stack-dedicated">
                                <h2>Dedicated <span className="skycolor">Full-stack developer</span></h2>
                                <h6>hiring model geared to deliver result that you expect from a top IT company</h6>
                                <p>high qualified full-stack programmer skilled with java,python,React Js , Angular Js , node Js, MEAN Js to echance the development process.Full-stack development of CBNITS holds skills across every state of quality software development.</p>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} xs={12} sm={12}>
                            <div className="full-stack-img">
                                <img src={fullstackcreation} alt="" />
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
                                <img src={fulljs} alt="" />
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} xs={12} sm={12}>
                            <div className="developer-from-cbnits">
                                <h6>why hire Full-stack <span className="organgecolor">developers from CBNITS ?</span></h6>
                                {
                                    advantageArr.map((data, ibx) => (
                                        <p key={ibx}>
                                            <span><img src={data.img} alt={data.img} /></span>
                                            {data.txt}
                                        </p>
                                    ))
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="fullstack-tab py-5">
                <Container className="themed-container text-center tab-container" fluid={false}>
                    <h2>Technical skill of our</h2>
                    <h2 className="skycolor mb-5">full-stack developres</h2>

                    <Row className="d-flex align-items-center">
                        <div style={{ width: "100%" }}>
                            <Nav tabs >
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        back-end
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        back end
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggle('3'); }}
                                    >
                                        mobile app development
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '4' })}
                                        onClick={() => { toggle('4'); }}
                                    >
                                        database
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '5' })}
                                        onClick={() => { toggle('5'); }}
                                    >
                                        project management tools
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        technical skill
                                </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <Row className="mt-5 ">
                                        {techArr.map((data, idx) => (
                                            <Col xl={3} lg={4} md={6} xs={12} sm={12} >
                                                <div className="tech-logo">
                                                    <div className="tech-logo-img">{<img src={data.img} alt="" />}</div>
                                                    <div className="tech-logo-name">{data.techname}</div>

                                                </div>
                                            </Col>

                                        ))
                                        }
                                    </Row>
                                </TabPane>

                            </TabContent>
                        </div>
                    </Row>
                    <div className="text-center">
                        <Button color="primary">Hire Us</Button>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default FullStack;