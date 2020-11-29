
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


//importing component files
import HeaderComp from './../components/Header/index';
import FooterComp from './../components/Footer/index';
import HomePage from "./../containers/Home/index";
// import GlobalStyle from '../global-styles';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  // margin: 0 auto;
  // display: flex;
  // min-height: 100%;
  // padding: 0 16px;
  // flex-direction: column;
`;

const Routing =  _ =>  {
    return (
        <AppWrapper>
            <Helmet
                titleTemplate="%s - CBNITS"
                defaultTitle="CBNITS"
            >
                <meta name="description" content="CBNITS" />
            </Helmet>
            <HeaderComp />
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
            <FooterComp />
            {/* <GlobalStyle /> */}
        </AppWrapper>
    );
}

export default Routing;

