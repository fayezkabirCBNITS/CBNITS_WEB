import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import "./style.css";
import ToolTechnology from "./../../components/ToolTechnology/ToolTechnology";
import Banner from "./../../components/TechBanner/techBanner"
import appBnr from "./../../images/appBnr.jpg";
import Axios from "../../service/axios-config";


const whiteText = "development";
const blueTxt = "mobile app";
const paraFirst = "Bespoke Android & iPhone mobile app development";
const paraSecond = "solutions";


const MobileAppDevelopment = (props) => {
  const [data, setData] = useState({});
  const [services, setServices] = useState([]);
  useEffect(() => {
    _getMobileApplication();
    _getServices();
  }, []);
  const _getMobileApplication = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        category: "Mobile Application Post",
        page: "Mobile App Development",
      });
      if (res.status == 200) {
        setData(res.data.data[0]);
      }
      else{
          console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };

  const _getServices = async() => {
    try {
        let res = await Axios.post("/getPageWiseDatabyCategory", {
          category: "App Development Services",
          page: "Mobile App Development",
        });
        if (res.status == 200) {
          setServices(res.data.data.reverse());
        }
        else{
            console.log("Something went wrong!");
        }
      } catch (error) {
        console.log("error---->", error);
      }
  }

  return (
    <div>
       <Banner
        bannerImg={appBnr}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
        paraSecond={paraSecond}
      />
      <div className="sub-header">
        <Container className="themed-container" fluid={false}>
          <Row
            className="d-flex justify-content-center"
            style={{ margin: "50px 0" }}
          >
            <Col xl={5} lg={5}>
              <div className="imgSec">
                <img src={data.image} />
              </div>
            </Col>
            <Col xl={7} lg={7}>
              <div className="centerDiv">
                <h2>
                  MOBILE <span className="skycolor">APPLICATIONS </span>{" "}
                </h2>
                <p>
                  {data && data.description && data.description[0]}
                </p>
                <div style={{ height: 20 }} />
                <p>
                  {data && data.description && data.description[1]}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="mobile py-5">
          <Container className="themed-container" fluid={false}>
            <div className="text-center mobile-heads">
              <h2>
                OUR MOBILE APP <span>DEVELOPMENT SERVICES</span>
              </h2>
            </div>

            <Row className="d-flex align-items-center  justify-content-center">
              {services && services.length
                ? services.map((item, index) => (
                    <Col
                      xl={4}
                      lg={4}
                      className=" d-flex align-items-center"
                      key={index}
                    >
                      <div className="mobile-wrap">
                        <div className="text-center">
                          <img src={item.image} />
                          <h6>{item.name}</h6>
                        </div>
                      </div>
                    </Col>
                  ))
                : ""}
            </Row>
          </Container>
        </div>
        <div className="themed-container">
          <ToolTechnology />
        </div>
        <div className="themed-container">
          <Container fluid={false}>
            <div className="text-center tool-bottamBanner">
              <p>
              Mobile apps have turned out to be the go-to solutions for businesses cutting across multiple domains. From design to strategy to development to maintenance, CBNITS provides you the finest app development budget.
              </p>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;
