// import React from 'react';

//  class about extends React.Component {
//   render() {
//     return (
//       <div> textInComponent </div>
//     );
//   }
// }
// export default about

import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from 'reactstrap';

//import "./home.css";
import WhatWeDo from "./../../components/WhatWeDo/index";
import PageBanner from "./../../components/Banner/bannerForAbout";
import Experience from "./../../components/ExperienceYear/experience";
import Expertise from "./../../components/OurExpertise/expertiseAbout";
import Specialised from "./../../components/SpecilalisedDomain/specialsedAbout";
import WhyCbnits from "./../../components/WhyCbnits/whycbnits";
import AboutCbnits from "./../../components/AboutCbnits/aboutCbnitsAbout";
import WorkingWithUs from "./../../components/Caroousel/carouselAbout";
import CustomerSay from "./../../components/CustomerSay/customarSay"




const dynamic365= props => {
    return (
        <div>
            <PageBanner />
           
            <Experience />
            <Expertise />
            <WorkingWithUs />
           
            <AboutCbnits />
         
           


        </div>
    )
}

export default dynamic365;




