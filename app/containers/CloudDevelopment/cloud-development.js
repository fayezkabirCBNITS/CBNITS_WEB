import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from "reactstrap";
import Banner from "../../components/TechBanner/techBanner";
import Axios from "../../service/axios-config";

import cloudDevBnr from "./../../images/cloudDevBnr.jpg";
import icon from "./../../images/list-icon.png";
import tickWhite from "./../../images/tickWhite.png";
import expertiseimg from "./../../images/hl10.jpg";
import agile from "./../../images/cloudDevMain.jpg"
import cloudDevMain2 from "./../../images/cloudDevMain2.jpg"

import CloudPortfolio from './../../components/CloudPortfolio/CloudPortfolio'
import "./cloudDev.css";

const blueTxt = "Cloud";
const whiteText = "Development";
const paraFirst = "With Cloud development,move away from traditional";
const paraSecond = "desktop environment";

const dummyArr = [
  {
    txt: "custom angular js development",
    img: icon,
  },
  {
    txt: "AJAX development",
    img: icon,
  },
  {
    txt: "Angular js mobile app development",
    img: icon,
  },
  {
    txt: "Angular js web app development",
    img: icon,
  },
  {
    txt: "Angular ecommerce application",
    img: icon,
  },
];

const advantageArr = [
  {
    txt: "Big Data Development Maintenance & Support",
    img: tickWhite,
  },
  {
    txt: "Data Integration and Management",
    img: tickWhite,
  },
  {
    txt: "Cloudera Services",
    img: tickWhite,
  },
  {
    txt: "Data Integration and Management",
    img: tickWhite,
  },
  {
    txt: "Cloudera Services",
    img: tickWhite,
  },
  {
    txt: "Big Data Analytics & Insights Services",
    img: tickWhite,
  },
  {
    txt: "Hadoop configuration management,",
    img: tickWhite,
  },
  {
    txt: "Hadoop monitoring, Hadoop Metrics,",
    img: tickWhite,
  },
];

const expertise = [
  {
    txt: "Manufacturing",
    img: expertiseimg,
  },
  {
    txt: "Real Estate",
    img: expertiseimg,
  },
  {
    txt: "Healthcare",
    img: expertiseimg,
  },
  {
    txt: "Education/e-Learning",
    img: expertiseimg,
  },
  {
    txt: "Retail",
    img: expertiseimg,
  },
  {
    txt: "Energy",
    img: expertiseimg,
  },

  {
    txt: "Travel & Hospitality",
    img: expertiseimg,
  },
  {
    txt: "Logistics",
    img: expertiseimg,
  },
  {
    txt: "e-Commerce",
    img: expertiseimg,
  },
  {
    txt: "Social Networking",
    img: expertiseimg,
  },
];

const CloudDevelopment = (props) => {
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
        bannerImg={cloudDevBnr}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
        paraSecond={paraSecond}
      />
      <div className="cloud py-5">
        <div className="py-4 head-para">
          <p>
            Are you searching for third party data hosting ? Look no further than CBNITS
            as we help companies leverage the vast potential of cloud computing and delight their customers
            and transform their business. CBNITS offers both public and private data center within its cloud services including Amazon web services(AWS),
            Google platform, Microsoft Azure, Backspace, Apache, CloudStock, and Salesforce.
          </p>
        </div>
        <div>
          <CloudPortfolio />
        </div>
        <div className="cloudCbnits py-5">
          <Container className="themed-container" fluid={false}>
            <Row className="d-flex align-items-center">
              <Col xl={6} lg={6}>
                <div className="cloudCbnits-img">
                  <img src={agile} alt="" />
                </div>
              </Col>
              <Col xl={6} lg={6}>
                <div className="cloudCbnits-Text">
                  <p><span>Kubernets</span> has the special expertise in developing top of the line webistes.
                      Our talented bunch of developres hold special expertise in reaceting excellent websites.
                      We are focused on delevering real value to our global clients.
                      You can hire our talented team of developers on dedicated basis option.
                      Let us drive your growth with our web development expertise.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="cloudCbnits py-5">
          <Container className="themed-container" fluid={false}>
            <Row className="d-flex align-items-center">
              <Col xl={6} lg={6}>
                <div className="cloudCbnits-Text">
                  <p><span>The Cost</span><span className="skycolor"> advantage</span> has the special expertise in developing top of the line webistes.
                      Our talented bunch of developres hold special expertise in reaceting excellent websites.
                      We are focused on delevering real value to our global clients.
                      You can hire our talented team of developers on dedicated basis option.
                      Let us drive your growth with our web development expertise.</p>
                </div>
              </Col>
              <Col xl={6} lg={6}>
                <div className="cloudCbnits-img">
                  <img src={cloudDevMain2} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="text-center cloudCbnits-btn">
          <Button color="primary">Hire Us</Button>
        </div>
      </div>
    </div>
  );
};

export default CloudDevelopment;
