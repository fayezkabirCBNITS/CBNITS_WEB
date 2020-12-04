import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//importing component files
import HeaderComp from "./../components/Header/index";
import FooterComp from "./../components/Footer/index";
import HomePage from "./../containers/Home/index";
import NotFound from "./../containers/NotFoundPage/Loadable";
import AboutUs from "./../containers/AboutUs/about";
import Career from "../containers/career/career";
import mobileAppDevelopment from "../containers/MobileAppDevelopment/mobileAppDevelopment";
// import GlobalStyle from '../global-styles';
import Dynamic from "../containers/dynamic365/dynamic365";
import Website from "./../containers/Website/website";
import SoftwareSupport from "./../containers/SoftwareSupport/software-support";

import TechLanguage from "./../containers/Technology/angular"
import FullStack from "./../containers/Technology/fullStack"
import Reactjs from "./../containers/Technology/react"
import Javajs from "./../containers/Technology/java"
import Nodejs from "./../containers/Technology/node"
import Golang from "./../containers/Technology/golang"
import Python from "./../containers/Technology/python"
import ContactUs from "./../containers/ContactUs/contact"
import Hadoop from "./../containers/Technology/hadoop"
import BlockChain from "./../containers/Technology/blockchain/blockchain"
import UiUx from "./../containers/Technology/ui-ux"
import Hireus from "../containers/HireUs/hireUs";
import AboutUsV2 from "../containers/AboutUsV2/about";
import CloudDevelopment from './../containers/CloudDevelopment/cloud-development'
import CloudDevOps from './../containers/CloudDevOps/cloud-devops';
import QualityEngineer from './../containers/QualityEngineering/quality-engineering';
import SAP from './../containers/SAP/sap';
import Csitwochain from './../containers/CSI2Chain/csitwochain'
import CSHealth from './../containers/CSHealth/cshealth'
import Csecommerce from './../containers/CSEcommerce/csecommerce'


const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  // margin: 0 auto;
  // display: flex;
  // min-height: 100%;
  // padding: 0 16px;
  // flex-direction: column;
`;

const Routing = (_) => {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - CBNITS" defaultTitle="CBNITS">
        <meta name="description" content="CBNITS" />
      </Helmet>
      <HeaderComp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/aboutus--" component={AboutUs} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/website" component={Website} />
        <Route exact path="/software-support" component={SoftwareSupport} />
        <Route exact path="/mobileApp" component={mobileAppDevelopment} />
        <Route exact path="/dynamic-365" component={Dynamic} />
        <Route exact path="/angular" component={TechLanguage} />
        <Route exact path="/full-stack" component={FullStack} />
        <Route exact path="/react" component={Reactjs} />
        <Route exact path="/java" component={Javajs} />
        <Route exact path="/node" component={Nodejs} />
        <Route exact path="/golang" component={Golang} />
        <Route exact path="/python" component={Python} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/hadoop" component={Hadoop} />
        <Route exact path="/hire-us" component={Hireus} />
        <Route exact path="/blockchain" component={BlockChain} />
        <Route exact path="/ui-ux" component={UiUx} />
        <Route exact path="/aboutus" component={AboutUsV2} />
        <Route exact path="/cloud-development" component={CloudDevelopment} />
        <Route exact path="/cloud-devops" component={CloudDevOps} />
        <Route exact path="/quality-engineering" component={QualityEngineer} />
        <Route exact path="/sap" component={SAP} />
        <Route exact path="/cs-i-two-chain" component={Csitwochain} />
        <Route exact path="/cs-Health" component={CSHealth} />
        <Route exact path="/cs-ecommerce" component={Csecommerce} />
        <Route path="" component={NotFound} />
      </Switch>
      <FooterComp />
      {/* <GlobalStyle /> */}
    </AppWrapper>
  );
};
// const Routing = _ => {
//     return (
//         <AppWrapper>
//             <Helmet
//                 titleTemplate="%s - CBNITS"
//                 defaultTitle="CBNITS"
//             >
//                 <meta name="description" content="CBNITS" />
//             </Helmet>
//             <HeaderComp />
//             <Switch>
//                 <Route exact path="/" component={HomePage} />
//                 <Route exact path="/home" component={HomePage} />
//                 <Route exact path="/aboutus" component={AboutUs} />
//                 {/* <Route exact path="/career" component={Career} /> */}
//                 <Route exact path="/website" component={Website} />
//                 <Route exact path="/software-support" component={SoftwareSupport} />
//                 <Route path="" component={NotFound} />
//             </Switch>
//             <FooterComp />
//             {/* <GlobalStyle /> */}
//         </AppWrapper>
//     );
// }

export default Routing;
