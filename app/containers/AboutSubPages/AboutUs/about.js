import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from 'reactstrap';

import "./about.css";
import AboutCbnits from "./../../../components/About-AboutUs"
import WhoWeAre from "./../../../components/WhoWeAre/whoWeAre";
import ImageGallery from "./../../../components/Image-Gallery/gallery";
import WorkingWithUs from "./../../../components/Caroousel/carousel";
import CustomerSay from "./../../../components/CustomerSay/customarSay";
import Establishment from "./../../../components/Establistment/establishment"
import react from "./../../../images/react.png"
import angular from "./../../../images/angular.png"
import vue from "./../../../images/vue.png"
import node from "./../../../images/node.png"
import python from "./../../../images/python.png"
import java from "./../../../images/java.png"
import golang from "./../../../images/golang.png"
import msg from "./../../../images/msg.png"
import ph from "./../../../images/ph.png"
const imgArr = [
    { img: react, lang: "react.js" },
    { img: angular, lang: "angular.js" },
    { img: vue, lang: "vue.js" },
    { img: node, lang: "node.js" },
    { img: python, lang: "python" },
    { img: java, lang: "java" },
    { img: golang, lang: "golang" }
];


const AboutUs = props => {
    return (
        <div>                        
            <AboutCbnits />
            <WhoWeAre />
            <Establishment />
            <ImageGallery />
            <WorkingWithUs />
            <CustomerSay />
        </div>
    )
}

export default AboutUs;