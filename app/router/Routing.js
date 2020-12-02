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
//import Career from "../containers/dynamic365";
import mobileAppDevelopment from "../containers/MobileAppDevelopment/mobileAppDevelopment";
// import GlobalStyle from '../global-styles';
import Dynamic from "../containers/dynamic365/dynamic365";
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
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/mobileApp" component={mobileAppDevelopment} />
        <Route exact path="/dynamic-365" component={Dynamic} />s
        <Route path="" component={NotFound} />
      </Switch>
      <FooterComp />
      {/* <GlobalStyle /> */}
    </AppWrapper>
  );
};

export default Routing;
