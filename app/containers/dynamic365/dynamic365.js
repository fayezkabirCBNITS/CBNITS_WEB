import React, { useState, useEffect } from "react";
import { Row, Col, Container } from 'reactstrap';
import "./dynamic.css";

import react from "./../../images/react.png"
import angular from "./../../images/angular.png"
import vue from "./../../images/vue.png"
import node from "./../../images/node.png"
import python from "./../../images/python.png"
import java from "./../../images/java.png"
import golang from "./../../images/golang.png"
import msg from "./../../images/msg.png"
import ph from "./../../images/ph.png"

import exper from "./../../images/365.png";
import MicroDynamic from './../../components/MicroDynamic/microDyamic'
import SeamLessMigration from './../../components/SeamlessMigration/SeamlessMigration'


const imgArr = [
    { img: react, lang: "react.js" },
    { img: angular, lang: "angular.js" },
    { img: vue, lang: "vue.js" },
    { img: node, lang: "node.js" },
    { img: python, lang: "python" },
    { img: java, lang: "java" },
    { img: golang, lang: "golang" }
];

const Dynamic365 = props => {

    return (
        <div>
            <div className="dynamic-header-img">
                <Container className="themed-container" fluid={false}>
                    <p className="title-info">
                        <span><abbr><img src={msg} alt="msg" /> </abbr>info@cbnits.com</span>
                        <span><abbr><img src={ph} alt="phone" /> </abbr>+1699-213-8574</span>
                    </p>
                    <div className="dynamic-middle-section">
                        <h2 className="skycolor ">Microsoft <span>Dynamic 365</span></h2>
                        <p className="mb-xl-1">Map your needs with the certified Microsoft Dynamic 365 partner</p>
                    </div>
                    <div className="dyanmic-lang-container">
                        {
                            imgArr.map((language, idx) => (
                                <div key={idx} className="dyanmic-lang-wrapper">
                                    <abbr><img src={language.img} alt={language.lang} /></abbr>
                                    <span>{language.lang}</span>
                                </div>
                            )
                            )
                        }
                    </div>
                </Container>
            </div>
            <div className="sub-header">
                <div className="dyanamicCbnits py-5">
                    <Container className="themed-container" fluid={false}>
                        <Row className="d-flex align-items-center">
                            <Col xl={6} lg={6}>
                                <div className="dyanamicCbnits-img">
                                    <img src={exper} alt="image" />
                                </div>
                            </Col>
                            <Col xl={6} lg={6}>
                                <div className="dyanamicCbnits-Text">
                                    <p><span>Dynamic </span> <span className="skycolor"> 365</span> has the special expertise in developing top of the line webistes.
                                        Our talented bunch of developres hold special expertise in reaceting excellent websites.
                                        We are focused on delevering real value to our global clients.
                                        You can hire our talented team of developers on dedicated basis option.
                                        Let us drive your growth with our web development expertise.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="themed-container">
                    <MicroDynamic />
                </div>
                <div className="themed-container">
                    <SeamLessMigration />
                </div>
                <div className="themed-container">
                    <Container fluid={false}>
                        <div className="text-center dynamic-bottamBanner">
                            <p>At CBNITS, We provide the best web development solutions at the best price. Make full use
                            of our expertise to grow your business.
                            At CBNITS, We provide the best web development solutions at the best price. Make full use
                            of our expertise to grow your business.
                        </p>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Dynamic365;





