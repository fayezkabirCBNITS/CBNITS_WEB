import React, { useState, useEffect } from "react";
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
import Banner from "./../../../components/TechBanner/techBanner";
import Axios from "../../../service/axios-config";

import uiuxBnr from "./../../../images/blockBnr.jpg";
import "./blockchain.css";
import { withRouter } from "react-router-dom";

const whiteText = "development";
const blueTxt = "blockchain technology";
const paraFirst = "Get our Blockchain Experts Ready to Empower your Business";
const paraSecond = "human interactions";


const BlockChain = (props) => {
  const [data, setData] = useState({});
  const [technology, setTechnology] = useState([]);
  const [response, setResponse] = useState({});

  useEffect(() => {
    _getFirstData();
    _getTechnology();
    _getIndustries();
  }, []);
  const _getFirstData = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "BlockChain",
        category: "Capabilities",
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

  const _getTechnology = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "BlockChain",
        category: "Tools and Technologies",
      });
      if (res.status == 200) {
        setTechnology(res.data.data.reverse());
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };

  const _getIndustries = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "BlockChain",
        category: "Industry We Serve",
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
        bannerImg={uiuxBnr}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
      />
      <div className="language py-2">
        <Container className="themed-container" fluid={false}>
          <div className="topDetails text-center">
            <p>
              From banking and secure communications to healthcare and
              ride-sharing,Blockchain technology exists with real world
              implementations beyond cryptocurrencies. Let CBNITS help you
              navigate through the rapidly changing landscape of Blockchain
              development. Based in San Jose,California, CBNITS is an
              all-encompassing Blockchain development service provider.
            </p>
          </div>
        </Container>
        <div className="skybg py-5">
          <Container className="themed-container" fluid={false}>
            <div className="morethan text-center">
              <h2 className="mb-3">
                our blockchain <span className="red">capabilities</span>
              </h2>
            </div>
            <Row className="d-flex align-items-center justify-content-center">
              {data && data.description && data.description.length > 0
                ? data.description.map((item, ibx) => (
                    <Col xl={3} lg={3} md={4} sm={6} xs={12} key={ibx}>
                      <div className="deliverOptn mt-4">
                        <div className="deliverOptnNo">
                          <div className="dashBorder">
                            <span>{ibx + 1}</span>
                          </div>
                        </div>
                        <div className="deliverDetails">
                          <span>{item}</span>
                        </div>
                      </div>
                    </Col>
                  ))
                : null}
            </Row>
          </Container>
        </div>

        <Container className="themed-container py-5" fluid={false}>
          <div className="technology text-center">
            <h2>
              blockchain tools <span className="skycolor">& technologies</span>
            </h2>
          </div>
          <Row className="d-flex mt-5 justify-content-center">
            {technology && technology.length > 0
              ? technology.map((item, idx) => (
                  <Col xl={3} lg={3} md={4} sm={6} xs={12} key={idx}>
                    <div className="techstack mt-4">
                      <div className="teckStackImg">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="teckStackName">
                        <span>{item.name}</span>
                      </div>
                    </div>
                  </Col>
                ))
              : null}
          </Row>
        </Container>

        <div className="skybg py-5">
          <Container className="themed-container" fluid={false}>
            <div className="morethan text-center">
              <h2 className="mb-3">
                Industries <span className="red">We Serve</span>
              </h2>
            </div>
            <Row className="d-flex align-items-center justify-content-center">
              {response &&
              response.description &&
              response.description.length > 0
                ? response.description.map((item, ibx) => (
                    <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                      <div className="deliverOptn mt-4">
                        <div className="deliverOptnNo">
                          <div className="dashBorder">
                            <span>{ibx + 1}</span>
                          </div>
                        </div>
                        <div className="deliverDetails">
                          <span>{item}</span>
                        </div>
                      </div>
                    </Col>
                  ))
                : null}
            </Row>
          </Container>
        </div>
        <Container className="themed-container" fluid={false}>
          <div className="detailsBox text-center">
            <p>
              <b>Global companies</b> rely on us, SMEs partner with us &
              startups love to work with us for handling their Blockchain
              development needs
            </p>
          </div>
        </Container>
        <div className="text-center">
          <Button
            color="primary"
            onClick={() => props.history.push("/hire-us")}
          >
            Hire Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BlockChain);
