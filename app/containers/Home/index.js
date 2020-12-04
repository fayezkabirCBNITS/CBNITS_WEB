import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "reactstrap";
import Banner from "./../../components/TechBanner/techBanner";
import bannerImg from "../../images/banner.jpg";

import "./home.css";
import WhatWeDo from "./../../components/WhatWeDo/index";
import PageBanner from "./../../components/Banner/banner";
import Experience from "./../../components/ExperienceYear/experience";
import Expertise from "./../../components/OurExpertise/expertise";
import Specialised from "./../../components/SpecilalisedDomain/specialisec";
import WhyCbnits from "./../../components/WhyCbnits/whycbnits";
import AboutCbnits from "./../../components/AboutCbnits/aboutCbnits";
import WorkingWithUs from "./../../components/Caroousel/carousel";
import CustomerSay from "./../../components/CustomerSay/customarSay";
import YearsOfExperience from "./../../components/homeExperienceYear/exp"

const whiteText = "STARTUP EXPERTS";
const blueTxt = "WE BUILD";
const paraFirst =
  "With Our Innovation And Expertise In Cutting-Edge Technology. We Help To Achieve";
const paraSecond = "Optimal Buisness Growth ";

const HomePage = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  },[])
  return (
    <div>
      {/* <PageBanner /> */}
      <Banner
        bannerImg={bannerImg}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
        paraSecond={paraSecond}
        requiredButton={true}
      />
      <WhatWeDo />
      <YearsOfExperience />
      {/* <Experience /> */}
      <Expertise />
      <Specialised />
      <WhyCbnits />
      <AboutCbnits />
      <WorkingWithUs />
      <CustomerSay />
    </div>
  );
};

export default HomePage;
