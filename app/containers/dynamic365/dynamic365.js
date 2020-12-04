import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import "./dynamic.css";
import Axios from "../../service/axios-config";

import react from "./../../images/react.png";
import angular from "./../../images/angular.png";
import vue from "./../../images/vue.png";
import node from "./../../images/node.png";
import python from "./../../images/python.png";
import java from "./../../images/java.png";
import golang from "./../../images/golang.png";
import msg from "./../../images/msg.png";
import ph from "./../../images/ph.png";

import exper from "./../../images/365.png";
import MicroDynamic from "./../../components/MicroDynamic/microDyamic";
import SeamLessMigration from "./../../components/SeamlessMigration/SeamlessMigration";

const imgArr = [
  { img: react, lang: "react.js" },
  { img: angular, lang: "angular.js" },
  { img: vue, lang: "vue.js" },
  { img: node, lang: "node.js" },
  { img: python, lang: "python" },
  { img: java, lang: "java" },
  { img: golang, lang: "golang" },
];

const Dynamic365 = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    _getFirstPost();
  }, []);
  const _getFirstPost = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Dynamic 365",
        category: "Dynamic 365 First Post",
      });
      if (res.status == 200) {
        setData(res.data.data[0]);
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };


  return (
    <div>
      <div className="dynamic-header-img">
        <Container className="themed-container" fluid={false}>
          <p className="title-info">
            <span>
              <abbr>
                <img src={msg} alt="msg" />{" "}
              </abbr>
              info@cbnits.com
            </span>
            <span>
              <abbr>
                <img src={ph} alt="phone" />{" "}
              </abbr>
              +1699-213-8574
            </span>
          </p>
          <div className="dynamic-middle-section">
            <h2 className="skycolor ">
              Microsoft <span>Dynamic 365</span>
            </h2>
            <p className="mb-xl-1">
              Map your needs with the certified Microsoft Dynamic 365 partner
            </p>
          </div>
          <div className="dyanmic-lang-container">
            {imgArr.map((language, idx) => (
              <div key={idx} className="dyanmic-lang-wrapper">
                <abbr>
                  <img src={language.img} alt={language.lang} />
                </abbr>
                <span>{language.lang}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className="sub-header">
        <div className="dyanamicCbnits py-5">
          <Container className="themed-container" fluid={false}>
            <Row className="d-flex align-items-center">
              <Col xl={6} lg={6}>
                <div className="dyanamicCbnits-img">
                  <img src={data.image} alt="image" />
                </div>
              </Col>
              <Col xl={6} lg={6}>
                <div className="dyanamicCbnits-Text">
                  <p>
                    <span>Dynamic </span> <span className="skycolor"> 365</span>{" "}
                   {data && data.description && data.description[0]}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="themed-container">
          <MicroDynamic />
        </div>
        <div className="themed-container">
          <SeamLessMigration />
        </div>
        <div className="themed-container">
          <Container fluid={false}>
            <div className="text-center dynamic-bottamBanner">
              <p>
              With CBNITS, take the leap from on-premise to the cloud and make sure you’re supported every step of the way. Our process is flexible and customer-driven, so you get a Dynamics 365 solution that could prove a game-changer for your business.
              </p>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dynamic365;
