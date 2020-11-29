import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from 'reactstrap';

import "./home.css";
import WhatWeDo from "./../../components/WhatWeDo/index";
import PageBanner from "./../../components/Banner/banner";
import Experience from "./../../components/ExperienceYear/experience";
import Expertise from "./../../components/OurExpertise/expertise";
import Specialised from "./../../components/SpecilalisedDomain/specialisec";
import WhyCbnits from "./../../components/WhyCbnits/whycbnits";
import AboutCbnits from "./../../components/AboutCbnits/aboutCbnits";
import WorkingWithUs from "./../../components/Caroousel/carousel";
import CustomerSay from "./../../components/CustomerSay/customarSay"




const HomePage = props => {
    return (
        <div>
            <PageBanner />
            <WhatWeDo />
            <Experience />
            <Expertise />
            <Specialised />
            <WhyCbnits />
            <AboutCbnits />
            <WorkingWithUs />
            <CustomerSay />


        </div>
    )
}

export default HomePage;



