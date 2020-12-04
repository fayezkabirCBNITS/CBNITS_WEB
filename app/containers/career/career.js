import React, { useState } from "react";
import {
    Nav,
    NavItem,
    Button,
    NavLink,
    Row,
    Col,
    Container,
    TabContent,
    TabPane,
} from "reactstrap";
import Banner from "./../../components/TechBanner/techBanner";

import uiuxBnr from "./../../images/uiuxBnr.jpg";
import expertiseimg from "./../../images/hl10.jpg";
import uiuxMain from "./../../images/uiuxMain.jpg";
import "./career.css";
import classnames from "classnames";

import Transformation from "./../../components/Transformation";
import FourReasons from "./../../components/FourReasons";
import Opertunities from "./../../components/Opportunities";

const whiteText = "cbnits team";
const blueTxt = "join the";
const paraFirst =
    "You can check the latest job openings here if you are looking to be a part of a your, vibrant and growing team. Take your first step to an incredible career with us.";

const Career = (props) => {
    return (
        <div>
            <Banner
                bannerImg={uiuxBnr}
                whiteText={whiteText}
                blueTxt={blueTxt}
                paraFirst={paraFirst}
            />
            <div className="language py-2">
                <Transformation />
                <FourReasons />
                <Opertunities />
            </div>
        </div>
    );
};

export default Career;
