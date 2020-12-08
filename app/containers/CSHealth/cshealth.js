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
import caseHealthBnr from "./../../images/caseHealthBnr.jpg";
import csHealthMain from "./../../images/csHealthMain.png";
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
import "./cshealth.css";

const whiteText = "case study";
const blueTxt = "health statup";

const pratitioners = [
  {
    txt: "Sign In / Sign Up",
    no: 1,
  },
  {
    txt: "Create Profile",
    no: 2,
  },
  {
    txt: "Add details of speciality",
    no: 3,
  },
  {
    txt: "Add Medical experience, and Education",
    no: 4,
  },
  {
    txt: "Put availability on calendar",
    no: 5,
  },
  {
    txt: "View Request",
    no: 6,
  },
  {
    txt: "Accept / Decline",
    no: 7,
  },
  {
    txt: "View Upcoming Booking",
    no: 8,
  },
  {
    txt: "Send Meeting URL",
    no: 9,
  },
  {
    txt: "Receive Payments",
    no: 10,
  },
  {
    txt: "Provide rating and feedback",
    no: 11,
  },
];

const patient = [
  {
    txt: "Download the Mobile App",
    no: 1,
  },
  {
    txt: "Sign in / Sign Up",
    no: 2,
  },
  {
    txt: "Choose Speciality of Treatment",
    no: 3,
  },
  {
    txt: "View lIst of Doctors",
    no: 4,
  },
  {
    txt: "Filter on the basis of location and experience",
    no: 5,
  },
  {
    txt: "View Profile and Portfolio",
    no: 6,
  },
  {
    txt: "View background of Medical History",
    no: 7,
  },
  {
    txt: "Check Availability on Calendar",
    no: 8,
  },
  {
    txt: "Make Payments",
    no: 9,
  },
  {
    txt: "Book Appointment Request",
    no: 10,
  },
  {
    txt: "See Status of Booking",
    no: 11,
  },
  {
    txt: "Get Confirmation and receive online Appointment link",
    no: 12,
  },
  {
    txt: "Review",
    no: 13,
  },
];

const admin = [
  {
    txt: "Practitioner's Profile Management",
    no: 1,
  },
  {
    txt: "Patients Management",
    no: 2,
  },
  {
    txt: "Appointment Management",
    no: 3,
  },
  {
    txt: "Booking Calendar Management",
    no: 4,
  },
  {
    txt: "Reports Management",
    no: 5,
  },
  {
    txt: "Online Meeting Management",
    no: 6,
  },
  {
    txt: "Payment Management",
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
  {
    techname: "Photoshop",
    img: ccc4,
  },
  {
    techname: "React Native",
    img: ccc5,
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
        "Our development team has comprehensively implemented and developed the entire design concept.",
    },
  ];

const Cshealth = (props) => {
  return (
    <div>
      <Banner bannerImg={caseHealthBnr} whiteText={whiteText} blueTxt={blueTxt} />
      <div className="language py-2">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center py-5">
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="imgSec p-5">
                <img src={csHealthMain2} alt="" />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="webpage">
                <h2>overview</h2>
                <span>
                  Teamwellness acts as a platform extensively for health practitioners and patients who are seeking advice.
                  The platform connects both the patients and practitioner for an
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
                <b>Patients Activity:</b>
              </p>
            </div>
            <Row className="d-flex justify-content-center align-items-center ">
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
                <b>Practitioners' Activity:</b>
              </p>
            </div>
            <Row className="d-flex justify-content-center align-items-center ">
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
            <Row className="d-flex justify-content-center align-items-center ">
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
                <img src={csHealthMain} alt="" />
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

          <Row className="mt-5 d-flex justify-content-center align-items-center">
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

export default Cshealth;
