import React from 'react';
import { Row, Col, Container } from "reactstrap";
import "./hrtech.css";
import Banner from "../../components/TechBanner/techBanner";
import Axios from "../../service/axios-config";
import cdHRTechBnr from "./../../images/csHRTech/cdHRTechBnr.jpg";
import cloudMain from "./../../images/csHRTech/cdHRTechMain.png";
import cdHRTechMain2 from "./../../images/csHRTech/cdHRTechMain2.jpg";
import tickWhite from "./../../images/tickWhite.png";
import icon from "./../../images/list-icon.png";

import TechnologyUsed from './../../components/HRTechnologyUsed/technologyUsed'
import HRdid from './../../components/HRDid/hrdid'

const blueTxt = "HR-TECH";
const whiteText = "Case study";

const advantageArr = [
    {
        txt: "Highly Private",
        img: tickWhite,
    },
    {
        txt: "Trusted Network of Mentors",
        img: tickWhite,
    },
    {
        txt: "Easy to use - device agnostic (run on web, mobile and tablet)",
        img: tickWhite,
    },
    {
        txt: "Rich database of questions to ask mentors and coaching tips",
        img: tickWhite,
    },
    {
        txt: "Easy sharing of feedback- on users’ choice",
        img: tickWhite,
    },
];

const HRTech = () => {
    return (
        <div>
            <Banner
                bannerImg={cdHRTechBnr}
                whiteText={whiteText}
                blueTxt={blueTxt}
            // paraFirst={paraFirst}
            />
            <div className="hrTech py-5">
                <Container className="themed-container mb-5" fluid={false}>
                    <Row className="d-flex align-items-center">
                        <Col xl={6} lg={6}>
                            <div className="imgSec">
                                <img src={cloudMain} alt="" />
                            </div>
                        </Col>
                        <Col xl={6} lg={6}>
                            <div className="hrTech-Text">
                                <p><span>Overview </span>The world's first high potential leadership development
                                    platform , built on patent pending machine intelligence technology .
                                    The enterprise leverages the power of Artificial Intelligence (AI)
                                    and Machine Learning to help nurture and develop the next generation of leaders.
                                    The solution helps professionals define their mentoring journey maps by
                                    finding their algorithm for career growth and success. The aims to redefine
                                    the future of work by creating a culture of inclusion and care.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="hrTechCbnits py-5">
                    <Container className="themed-container" fluid={false}>
                        <div className="text-center">
                            <h2>Functionality</h2>
                        </div>
                        <Row className="d-flex align-items-center">
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="hrTechCbnits-advantages">
                                    <div>
                                        <p>
                                            Global Talent dashboards offering an overview of platforms usage to HR leaders.
                                        </p>
                                        <p>
                                            Rich ML/AI Analytics offering behavioral skill level, in depth analytical report of all users within the company
                                        </p><p>
                                            Free 16 personality factor(16PF) Assessments to help users identify their potential, suitability and areas that need development.
                                        </p>
                                        <p>
                                            A ready list of very specific attributes, behaviors and functional expertise areas to seek feedback on - including Leadership, Communication,
                                            Collaboration and Influencing
                                        </p>
                                    </div>
                                    {advantageArr.map((item, key) => (
                                        <Row key={key}>
                                            <Col xl={1} lg={1}>
                                                <img
                                                    src={icon}
                                                    alt={icon}
                                                    style={{
                                                        marginRight: "2px",
                                                        fontSize: "18px",
                                                        marginTop: "5px",
                                                        marginLeft: "10px",
                                                    }}
                                                />
                                            </Col>
                                            <Col xl={11} lg={11}>
                                                <p>
                                                    {item.txt}
                                                </p>
                                            </Col>
                                        </Row>
                                    ))
                                    }
                                </div>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="imgSec">
                                    <img src={cdHRTechMain2} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <HRdid />
                </div>
                <div>
                    <TechnologyUsed />
                </div>
            </div>
        </div>
    )
}

export default HRTech
