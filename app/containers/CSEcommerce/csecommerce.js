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
import csHealthMain2 from "./../../images/csHealthMain2.png";
import csEcomBnr from "./../../images/csEcomBnr.jpg";
import csEcomMain2 from './../../images/csEcomMain2.jpg'
import csHealthMain from "./../../images/csHealthMain.png";
import csEcomMain from './../../images/csEcomMain.jpg'
import uiuxMain from "./../../images/uiuxMain.jpg";
import python from "./../../images/cst1.png";
import javascript from "./../../images/cst2.png";
import ruby from "./../../images/cst3.png";
import php from "./../../images/cst4.png";
import ccc from "./../../images/cst5.png";
import ccc2 from "./../../images/cst6.png";
import ccc3 from "./../../images/cst7.png";
import ccc4 from "./../../images/cst8.png";
import ccc5 from "./../../images/cst9.png";
import icon from "./../../images/list-icon.png";
import "./csecommerce.css";

const whiteText = "case study";
const blueTxt = "Ecommerce segment";

const pratitioners = [
  {
    txt: "Sign In / Sign Up",
    no: 1,
  },
  {
    txt: "Search Product",
    no: 2,
  },
  {
    txt: "Add Product to Cart",
    no: 3,
  },
  {
    txt: "Place Order",
    no: 4,
  },
  {
    txt: "Make Payment",
    no: 5,
  },
  {
    txt: "Provide Delivery",
    no: 6,
  },
  {
    txt: "Order Tracking",
    no: 7,
  },
  {
    txt: "Provide Rating and Feedback",
    no: 8,
  },
];

const patient = [
  {
    txt: "Sign in / Sign Up",
    no: 1,
  },
  {
    txt: "List Product with all details",
    no: 2,
  },
  {
    txt: "Seller Order",
    no: 3,
  },
  {
    txt: "Seller Dashboard",
    no: 4,
  },
  {
    txt: "Seller Report",
    no: 5,
  },
  {
    txt: "Seller Account",
    no: 6,
  },
  {
    txt: "Seller Payments",
    no: 7,
  },
  {
    txt: "Seller Delevery Management System",
    no: 8,
  },
  {
    txt: "Seller Stock Report",
    no: 9,
  },
  {
    txt: "Commission Calculator",
    no: 10,
  },
];

const admin = [
  {
    txt: "Productds Management",
    no: 1,
  },
  {
    txt: "Vendor Management",
    no: 2,
  },
  {
    txt: "Customer Management",
    no: 3,
  },
  {
    txt: "Order Management",
    no: 4,
  },
  {
    txt: "Report Management",
    no: 5,
  },
  {
    txt: "Sale Management",
    no: 6,
  },
  {
    txt: "Delivery Management",
    no: 7,
  },
  {
    txt: "Rating and Review Management",
    no: 8,
  },
];
const techArr = [
  {
    techname: "HTML",
    img: python,
  },
  {
    techname: "Bootstrap",
    img: javascript,
  },
  {
    techname: "CSS",
    img: ruby,
  },
  {
    techname: "React",
    img: php,
  },
  {
    techname: "Node",
    img: ccc,
  },
  {
    techname: "MySQL",
    img: ccc2,
  },
  {
    techname: "AWS",
    img: ccc3,
  },
];
const platform = [
  {
    txt:
      "Our entire designing team has built the entire HTML and CSS of the platform",
  },
  {
    txt:
      "We have made it responsive for all platforms and also created iOS and Android Apps.",
  },
  {
    txt:
      "Our development team has comprehensively implementted and developed the entire design concept.",
  },
];

const Csecommerce = (props) => {
  return (
    <div>
      <Banner bannerImg={csEcomBnr} whiteText={whiteText} blueTxt={blueTxt} />
      <div className="language py-2">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center py-5">
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="imgSec p-5">
                <img src={csEcomMain} alt="" />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="webpage">
                <h2>overview</h2>
                <span>
                  Teamwellness acts as a platform extensively for the health
                  Practitioner and patients of users seeking advice. The
                  platform connects both the patients and practitioner for an
                  online consultancy and eases the medical facility in a very
                  lucid manner. Starting from report sharing to medicinal advice
                  everything can be done sitting at residence. The appointment
                  with the most preferred doctors can be easily made through the
                  website and apps and also can choose insurance partners for
                  affordable choices.
                </span>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="darkbg py-5">
          <Container className="themed-container" fluid={false}>
            <div className="deliver text-center">
              <h2 className="skycolor mb-2">functionality</h2>
              <p className="my-2">
                <b>Seller's Activity:</b>
              </p>
            </div>
            <Row className="d-flex align-items-center ">
              {patient.map((data, ibx) => (
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

            <div className="para text-center">
              <p>
                <b>Buyer's Activity:</b>
              </p>
            </div>
            <Row className="d-flex align-items-center ">
              {pratitioners.map((data, ibx) => (
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

            <div className="para text-center">
              <p>
                <b>Admin Activity:</b>
              </p>
            </div>
            <Row className="d-flex align-items-center ">
              {admin.map((data, ibx) => (
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
      </div>

      <div className="skybg">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center">
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="imgSec p-5">
                <img src={csEcomMain2} alt="" />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="platform">
                <h2>
                  what we did for <span className="redsmall">the platform</span>
                </h2>
                {platform.map((data, ibx) => (
                  <p className="whiteText">
                    <span className="mr-2">
                      <img src={icon} alt={icon} />
                    </span>
                    {data.txt}
                  </p>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-5">
        <Container className="themed-container" fluid={false}>
          <div className="deliver text-center">
            <h2>
              technology <span className="skycolor">used</span>
            </h2>
          </div>

          <Row className="mt-5 ">
            {techArr.map((data, idx) => (
              <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                <div className="techstack mb-4">
                  <div className="teckStackImg">
                    <img src={data.img} alt="" />
                  </div>
                  <div className="teckStackName pl-4">
                    <span>{data.techname}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Csecommerce;
