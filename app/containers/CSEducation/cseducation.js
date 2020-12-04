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
import caseStudyEduBnr from "./../../images/caseStudyEduBnr.jpg";
import cseMain2 from "./../../images/cseMain2.jpg";
import cseMain from "./../../images/cseMain.jpg";
import python from "./../../images/cst1.png";
import ruby from "./../../images/cst3.png";
import php from "./../../images/cst4.png";
import ccc from "./../../images/cst5.png";
import ccc3 from "./../../images/cst7.png";
import icon from "./../../images/list-icon.png";
import cseIcon1 from "./../../images/cseIcon1.png";
import cseIcon2 from "./../../images/cseIcon2.png";
import cseIcon3 from "./../../images/cseIcon3.png";
import "./cseducation.css";

const whiteText = "case study";
const blueTxt = "education website";

const morethan = [
  {
    txt: "Complete UI UX designs",
    img: cseIcon1,
  },
  {
    txt: "Programing the web interface and Mobile App",
    img: cseIcon2,
  },
  {
    txt: "We have made it responsive for all platforms",
    img: cseIcon3,
  },
];
const techArr = [
  {
    techname: "HTML",
    img: python,
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
    techname: "AWS",
    img: ccc3,
  },
];
const platform = [
  {
    txt:
      "Most of the students who require a clear idea on a subject prefer video conferencing. So, we incorporate subscription course module and video conferencing in the website.",
  },
  {
    txt:
      "Course creation will help the students and parents to find the best courses that platform offer. We have incorporated unique courses, videos, and content along with the study materials into the website into PDF, audio files and video format.",
  },
  {
    txt:
      "Dashboards offer students, parents, and teachers a way to better visualize the progress by providing a mix of reports and assessments. Depending on the student’s age, parents can also review the data gathered via the dashboard. This would be helpful for parents as they can monitor their child’s improvement.",
  },
  {
    txt:
      "Forums create a way for students to mingle and discuss courses, assignments, and other relevant information. It also provides an extra facility for students to get answers from their fellow students or professors.",
  },
  {
    txt:
      "The trust of the learners often builds on the feedback from other learners. So, we have incorporated rating and review section in the platform.",
  },
  {
    txt:
      "Various secured payment gateway included in the platform like credit card, PayPal, Stripe and so on which should be easy for learners to pay and for trainers to get their earnings.",
  },
];

const CSEducation = (props) => {
  return (
    <div>
      <Banner
        bannerImg={caseStudyEduBnr}
        whiteText={whiteText}
        blueTxt={blueTxt}
      />
      <div className="language py-2">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center py-5">
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="imgSec p-5">
                <img src={cseMain} alt="" />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="webpage">
                <h2>overview</h2>
                <span>
                  The students and parents need to register and login into the
                  platform. In the dashboard section they will be able to access
                  the courses. Video conferencing will be integrated where the
                  users will get a clear idea of the subject. In Forum section
                  users will discuss about the assignments and courses. The
                  admin will be responsible for looking after the entire
                  functionality of the platform.
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="darkbg">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center">
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="imgSec p-5">
                <img src={cseMain2} alt="" />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="functionality">
                <h2>Functionality</h2>
                {platform.map((data, ibx) => (
                  <p>
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

      <div className="skybg py-5">
        <Container className="themed-container" fluid={false}>
          <div className="morethan text-center">
            <h2 className="mb-3 mt-2">
              what we did for <span className="red">for the platform</span>
            </h2>
          </div>
          <Row className="d-flex mt-5 align-items-center ">
            {morethan.map((data, ibx) => (
              <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                <div className="mobile-wrap text-center">
                  <img src={data.img} alt="" />
                  <h6>{data.txt}</h6>
                </div>
              </Col>
            ))}
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

export default CSEducation;
