import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "reactstrap";
import "./hadoop.css";
import Banner from "./../../components/TechBanner/techBanner";
import Axios from "../../service/axios-config";
import habootBnr from "./../../images/habootBnr.jpg";
import icon from "./../../images/list-icon.png";
import { withRouter } from "react-router-dom";

const whiteText = "And Cloudera";
const blueTxt = "Hadoop, Big Data";
const paraFirst = "Achieve more uptime, better performance, faster case resolution";
const paraSecond = "";


const Hadoop = (props) => {
  const [data, setData] = useState({});
  const [bigDataServices, setBigDataServices] = useState({});
  const [response, setResponse] = useState({});
  const [domain, setDomain] = useState([]);
  useEffect(() => {
    _getPostOne();
    _getBigDataServices();
    _getResponse();
    _getDomain();
  }, []);
  const _getPostOne = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Hadoop",
        category: "Hadoop Post 1",
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

  const _getBigDataServices = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Hadoop",
        category: "Big Data Services",
      });
      if (res.status == 200) {
        setBigDataServices(res.data.data[0]);
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };

  const _getDomain = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Hadoop",
        category: "Domain Expertise",
      });
      if (res.status == 200) {
        setDomain(res.data.data);
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };

  const _getResponse = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Hadoop",
        category: "Cloudera Services",
      });
      if (res.status == 200) {
        setResponse(res.data.data[0]);
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };
  return (
    <div>
      <Banner
        bannerImg={habootBnr}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
        paraSecond={paraSecond}
      />
      <div className="language py-5">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center py-5">
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="develpment">
                <h2>Apache Hadoop is at</h2>
                <h2>
                  the heart <span className="skycolor">of the big</span>
                </h2>
                <h2 className="skycolor">data revolution &</h2>
                <h2 className="skycolor mb-4">Cloudera</h2>
                <p className="lightGreyText">
                  {data && data.description && data.description[0]}
                </p>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="imgSec p-5">
                <img src={data && data.image} alt="" />
              </div>
            </Col>
          </Row>
        </Container>

        <div className="skybg">
          <Container className="themed-container" fluid={false}>
            <Row className="d-flex align-items-center ">
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="imgSec p-5">
                  <img src={bigDataServices && bigDataServices.image} alt="" />
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="bigdata">
                  <h6 className="white mb-4">
                    BIG DATA <span className="red">CBNITS</span>
                  </h6>
                  {bigDataServices && bigDataServices.description
                    ? bigDataServices.description.map((item, ibx) => (
                        <p key={ibx}>
                          <span>
                            <img src={icon} alt={icon} />
                          </span>
                          {item}
                        </p>
                      ))
                    : null}
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center py-5">
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="cloudera">
                <h6 className="mb-4">
                  Cloudera <span className="skycolor">Services</span>
                </h6>
                {response && response.description
                  ? response.description.map((item, ibx) => (
                      <p key={ibx}>
                        <span>
                          <img src={icon} alt={icon} />
                        </span>
                        {item}
                      </p>
                    ))
                  : null}
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="imgSec p-5">
                <img src={response && response.image} alt="" />
              </div>
            </Col>
          </Row>
        </Container>

        <div className="darkbg py-5">
          <Container className="themed-container" fluid={false}>
            <div className=" cloudera text-center">
              <h6 className="mb-3">
                Domain <span className="skycolor">Expertise</span>
              </h6>
            </div>
            <Row className="d-flex align-items-center justify-content-center ">
              {domain && domain.length > 0
                ? domain.map((item, ibx) => (
                    <Col xl={3} lg={3} md={4} sm={6} xs={6} key={ibx}>
                      <div className="expertise text-center mt-4">
                        <div className="expertiseimg">
                          <img src={item.image} alt="" />
                        </div>
                        <span>{item.name}</span>
                      </div>
                    </Col>
                  ))
                : null}
            </Row>
                        <div className="text-center">
                            <Button color="primary" onClick={()=> props.history.push("/hire-us")}>Hire Us</Button>
                        </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Hadoop);
