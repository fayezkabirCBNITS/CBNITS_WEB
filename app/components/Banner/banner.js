import React, { useState, useEffect } from "react";
import { Button, Container } from 'reactstrap';

import "./banner.css";
import react from "./../../images/react.png"
import angular from "./../../images/angular.png"
import vue from "./../../images/vue.png"
import node from "./../../images/node.png"
import python from "./../../images/python.png"
import java from "./../../images/java.png"
import golang from "./../../images/golang.png"
import msg from "./../../images/msg.png"
import ph from "./../../images/ph.png"
const imgArr = [
    { img : react , lang : "react.js" }, 
    { img : angular, lang : "angular.js" }, 
    { img : vue , lang : "vue.js" }, 
    { img : node , lang : "node.js"},
    { img : python ,lang : "python"}, 
    { img : java , lang : "java" }, 
    { img : golang , lang : "golang" }
];




const Banner = props => {
    return (
            <div className="header-img">
                <Container className="themed-container" fluid={false}>
                    <p className="title-info">
                        <span><abbr><img src={msg} alt="msg" /> </abbr>info@cbnits.com</span>
                        <span><abbr><img src={ph} alt="phone" /> </abbr>+1699-213-8574</span>
                    </p>
                    <div className="middle-section">
                        <h1>We Build</h1>
                        <h2 className="skycolor mb-xl-4">Startup experts</h2>
                        <p className="mb-xl-1">with our innovation and expertise in cutting-edge technology. we help to achieve</p>
                        <p className="skycolor mb-xl-1">optimal buisness growth</p>
                        <Button type="button" color="primary">Hire us</Button>
                    </div>
                    <div className="lang-container">
                        {
                            imgArr.map((language , idx) =>(
                                <div key={idx} className="lang-wrapper">
                                    <abbr><img src={language.img} alt={language.lang} /></abbr>
                                    <span>{language.lang}</span>
                                </div>
                                )
                            )
                        }
                    </div>
                </Container>
            </div>
    )
}

export default Banner;



