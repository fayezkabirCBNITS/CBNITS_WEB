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

import uiuxBnr from "./../../../images/uiuxBnr.jpg";
import expertiseimg from "./../../../images/hl10.jpg";
import uiuxMain from "./../../../images/uiuxMain.jpg";
import python from "./../../../images/website/tech1.png";
import javascript from "./../../../images/website/tech2.png";
import ruby from "./../../../images/website/tech3.png";
import php from "./../../../images/website/tech4.png";
import ccc from "./../../../images/website/tech5.png";
import "./blockchain.css";
import { withRouter } from "react-router-dom";

const whiteText = "development";
const blueTxt = "blockchain technology";
const paraFirst = "Get ou Blockchain Experts Ready to Empower your Business";
const paraSecond = "human interactions";

const capabilities = [
  {
    txt: "User Information Design",
    no: 1,
  },
  {
    txt: "User Experience Design",
    no: 2,
  },
  {
    txt: "Design Research & Sprint",
    no: 3,
  },
  {
    txt: "Graphic Design",
    no: 4,
  },
  {
    txt: "Web Design",
    no: 5,
  },
  {
    txt: "Desktop App Design",
    no: 6,
  },
  {
    txt: "UX/UI Consulting",
    no: 7,
  },
  {
    txt: "Branding & Identity",
    no: 8,
  },
  {
    txt: "Concept Design",
    no: 9,
  },
  {
    txt: "Interaction Design",
    no: 10,
  },
];

const techno = [
  {
    txt: "User Information Design",
    no: 1,
  },
  {
    txt: "User Experience Design",
    no: 2,
  },
  {
    txt: "Design Research & Sprint",
    no: 3,
  },
  {
    txt: "Graphic Design",
    no: 4,
  },
  {
    txt: "Web Design",
    no: 5,
  },
  {
    txt: "Desktop App Design",
    no: 6,
  },
  {
    txt: "UX/UI Consulting",
    no: 7,
  },
  {
    txt: "Branding & Identity",
    no: 8,
  },
  {
    txt: "Concept Design",
    no: 9,
  },
  {
    txt: "Interaction Design",
    no: 10,
  },
];

const techArr = [
  {
    techname: "OmniGraffle",
    img: python,
  },
  {
    techname: "Balsamiq",
    img: javascript,
  },
  {
    techname: "InVISION",
    img: ruby,
  },
  {
    techname: "Sketch",
    img: php,
  },
  {
    techname: "Xd",
    img: ccc,
  },
  {
    techname: "OmniGraffle",
    img: python,
  },
  {
    techname: "Balsamiq",
    img: javascript,
  },
  {
    techname: "InVISION",
    img: ruby,
  },
  {
    techname: "Sketch",
    img: php,
  },
  {
    techname: "Xd",
    img: ccc,
  },
];

const BlockChain = (props) => {
  const [data, setData] = useState({});
  const [response, setResponse] = useState({});

  useEffect(() => {
    _getFirstData();
  }, []);
  const _getFirstData = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "BlockChain",
        category: "Industry We Serve",
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
            <Row className="d-flex align-items-center ">
              {data && data.description && data.description.length > 0
                ? data.description.map((item, ibx) => (
                    <Col xl={3} lg={3} md={4} sm={6} xs={12} key={ibx}>
                      <div className="deliverOptn mt-4">
                        <div className="deliverOptnNo">
                          <div className="dashBorder">
                            <span>{ibx+1}</span>
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
          <Row className="mt-5 ">
            {techArr.map((data, idx) => (
              <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                <div className="techstack mt-4">
                  <div className="teckStackImg">
                    <img src={data.img} alt="" />
                  </div>
                  <div className="teckStackName">
                    <span>{data.techname}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        <div className="skybg py-5">
          <Container className="themed-container" fluid={false}>
            <div className="morethan text-center">
              <h2 className="mb-3">
                blockchain tools <span className="red">& technologies</span>
              </h2>
            </div>
            <Row className="d-flex align-items-center ">
              {techno.map((data, ibx) => (
                <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                  <div className="deliverOptn mt-4">
                    <div className="deliverOptnNo">
                      <div className="dashBorder">
                        <span>{data.no}</span>
                      </div>
                    </div>
                    <div className="deliverDetails">
                      <span>{data.txt}</span>
                    </div>
                  </div>
                </Col>
              ))}
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
                            <Button color="primary" onClick={()=> props.history.push("/hire-us")}>Hire Us</Button>
                        </div>
      </div>
    </div>
  );
};

export default withRouter(BlockChain);
