import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./pressRelease.module.css";
import bannerImg from "./../../images/uiuxBnr.jpg";
import Banner from "./../../components/TechBanner/techBanner";
import PressComp from "../../components/PressRelease/pressCopm";
import { withRouter } from "react-router-dom";
import axios from "axios";

// const whiteText = "";
const blueTxt = "Press Releases";
const paraFirst = "";
const paraSecond = "Leading the path of innovation!";

const PressRelease = (props) => {
  const [pressReleaseList, setPressReleaseList] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    getpressReleaseList();
  }, []);

  const getpressReleaseList = () => {
    axios({
      method: "GET",
      url: "https://api.cbnits.com/getallPressRelease",
    }).then((res) => {
      setPressReleaseList(res.data.data);
    });
  };

  return (
    <div>
      <Banner
        bannerImg={bannerImg}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
        paraSecond={paraSecond}
      />
      <Container className="themed-container" fluid={false}>
        <Row className="mt-5 d-flex justify-content-center">
          {pressReleaseList && pressReleaseList.length >= 1
            ? pressReleaseList.map((data, index) => {
                return (
                  <Col md={6} sm={12} xs={12} key={index}>
                    <PressComp pressRelease={data} />
                  </Col>
                );
              })
            : ""}
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(PressRelease);
