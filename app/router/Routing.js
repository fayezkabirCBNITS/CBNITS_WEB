import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Loader from "react-loader-spinner";

//importing component files
import HeaderComp from "./../components/Header/index";
import FooterComp from "./../components/Footer/index";
const HomePage = React.lazy(() => import("./../containers/Home/index"));
import NotFound from "./../containers/NotFoundPage/Loadable";
// const AboutUs = React.lazy(() => import("./../containers/AboutUs/about"));
const Career = React.lazy(() => import("../containers/career/career"));
const mobileAppDevelopment = React.lazy(() =>
  import("../containers/MobileAppDevelopment/mobileAppDevelopment")
);
// import GlobalStyle from '../global-styles';
// import Dynamic from "../containers/dynamic365/dynamic365";
const Dynamic = React.lazy(() => import("../containers/dynamic365/dynamic365"));
const Website = React.lazy(() => import("./../containers/Website/website"));
const SoftwareSupport = React.lazy(() =>
  import("./../containers/SoftwareSupport/software-support")
);
const TechLanguage = React.lazy(() =>
  import("./../containers/Technology/angular")
);
const FullStack = React.lazy(() =>
  import("./../containers/Technology/fullStack")
);
const Reactjs = React.lazy(() => import("./../containers/Technology/react"));
const Javajs = React.lazy(() => import("./../containers/Technology/java"));
const Nodejs = React.lazy(() => import("./../containers/Technology/node"));
const Golang = React.lazy(() => import("./../containers/Technology/golang"));
const Python = React.lazy(() => import("./../containers/Technology/python"));
const ContactUs = React.lazy(() => import("./../containers/ContactUs/contact"));
const Hadoop = React.lazy(() => import("./../containers/Technology/hadoop"));
const BlockChain = React.lazy(() =>
  import("./../containers/Technology/blockchain/blockchain")
);
const UiUx = React.lazy(() => import("./../containers/Technology/ui-ux"));
const Hireus = React.lazy(() => import("../containers/HireUs/hireUs"));
const AboutUsV2 = React.lazy(() => import("../containers/AboutUsV2/about"));
const CloudDevelopment = React.lazy(() =>
  import("./../containers/CloudDevelopment/cloud-development")
);
const CloudDevOps = React.lazy(() =>
  import("./../containers/CloudDevOps/cloud-devops")
);
const QualityEngineer = React.lazy(() =>
  import("./../containers/QualityEngineering/quality-engineering")
);
const SAP = React.lazy(() => import("./../containers/SAP/sap"));
const Hrtech = React.lazy(() => import("./../containers/HR-Tech/hr-tech"));
const Csitwochain = React.lazy(() =>
  import("./../containers/CSI2Chain/csitwochain")
);
const CSHealth = React.lazy(() => import("./../containers/CSHealth/cshealth"));
const Csecommerce = React.lazy(() =>
  import("./../containers/CSEcommerce/csecommerce")
);
const CSEducation = React.lazy(() =>
  import("./../containers/CSEducation/cseducation")
);

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
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="rgba(0, 191, 255, 0.5)"
            height={"100vh"}
            width={100}
            className="d-flex justify-content-center align-items-center"
            visible={true}
          />
        }
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
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
          <Route
            exact
            path="/quality-engineering"
            component={QualityEngineer}
          />
          <Route exact path="/sap" component={SAP} />
          <Route exact path="/cs-hr-tech" component={Hrtech} />
          <Route exact path="/cs-i-two-chain" component={Csitwochain} />
          <Route exact path="/cs-Health" component={CSHealth} />
          <Route exact path="/cs-ecommerce" component={Csecommerce} />
          <Route exact path="/cs-ed-tech" component={CSEducation} />
          <Route path="" component={NotFound} />
        </Switch>
      </Suspense>
      <FooterComp />
    </AppWrapper>
  );
};

export default Routing;
