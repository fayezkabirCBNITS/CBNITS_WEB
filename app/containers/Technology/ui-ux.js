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
import "./uiux.css";
import Banner from "./../../components/TechBanner/techBanner";
import uiuxBnr from "./../../images/uiuxBnr.jpg";
import expertiseimg from "./../../images/hl10.jpg";
import uiuxMain from "./../../images/uiuxMain.jpg";
import classnames from "classnames";
import ui1 from "./../../images/uiux/ui1.jpg";
import ui2 from "./../../images/uiux/ui2.jpg";
import ui3 from "./../../images/uiux/ui3.jpg";
import ui4 from "./../../images/uiux/ui4.jpg";
import ui5 from "./../../images/uiux/ui5.jpg";
import Axios from "../../service/axios-config";

const whiteText = "development";
const blueTxt = "UX & UI";
const paraFirst = "User-centric UI UX design to simplify";
const paraSecond = "human interactions";

const techArr = [
  {
    techname: "OmniGraffle",
    img: ui1,
  },
  {
    techname: "Balsamiq",
    img: ui2,
  },
  {
    techname: "InVISION",
    img: ui3,
  },
  {
    techname: "Sketch",
    img: ui4,
  },
  {
    techname: "Xd",
    img: ui5,
  },
];

const deliver = [
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
  {
    txt: "Wireframe Design",
    no: 11,
  },
  {
    txt: "Prototyping",
    no: 12,
  },
];

const morethan = [
  {
    txt: "Breathe new life into the existing design",
    img: expertiseimg,
    content:
      "Our mission is to provide a bespoke and tailor-made design strategy into the existing design that will offer the best user experience.",
    serial: "01",
  },
  {
    txt: "Future-focused design concept",
    img: expertiseimg,
    content:
      "AT CBNITS, we follow a future-proof design process to create products that will exceed the expectations of your current and future clients.",
    serial: "02",
  },
  {
    txt: "Known for our attention to detail",
    img: expertiseimg,
    content:
      "Every good user experience is the result of intensive research, that's why we uncover every minute details and bring them into play.",
    serial: "03",
  },
  {
    txt: "Dedicated UX/UI resource hiring option",
    img: expertiseimg,
    content:
      "We work in dedicated projects and our dedicatedly-hired resources can join your existing team to help you deliver outstanding results.",
    serial: "04",
  },
];

const Uiux = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    _getTechnicalSkills();
  }, []);

  const _getTechnicalSkills = async (skill = "User Experience") => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "UI&UX",
        category: skill,
      });
      if (res.status == 200) {
        setSkills(res.data.data);
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };

  const toggle = (tab, skill) => {
    if (activeTab !== tab) setActiveTab(tab);
    _getTechnicalSkills(skill);
  };

  console.log("skill----->", skills);
  return (
    <div>
      <Banner
        bannerImg={uiuxBnr}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
        paraSecond={paraSecond}
      />
      <div className="language py-2">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center py-5">
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="imgSec p-5">
                <img src={uiuxMain} alt="" />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="webpage">
                <h2>
                  Web page & <span className="skycolor">mobile</span>
                </h2>
                <span className="lightGreyText">
                  application designing have become a very sophisticated
                  technology-based art. At CBNITS, we follow a foundational
                  approach for building UX/UI strategy for our clients. Our
                  UI/UX designing team is globally recognized for designing the
                  most innovative and user-centric experience for any digital
                  product. We follow the best UI/UX practices in the
                  industry.pabilities for your company and get it up and running
                  in quick time.
                </span>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="skybg py-5">
          <Container className="themed-container" fluid={false}>
            <div className="morethan text-center">
              <h2 className="mb-3">
                why is cbnits <span className="red">more than</span>
              </h2>
              <h6>just another UX UI agency?</h6>
            </div>
            <Row className="d-flex align-items-center ">
              {morethan.map((data, ibx) => (
                <Col xl={3} lg={6} md={6} sm={12} xs={12} key={ibx}>
                  <div className="morethanlist mt-5">
                    <div className="morethantop">
                      <div className="head">
                        <span>{ibx + 1}</span>
                      </div>

                      <div className="head2">
                        <span>{data.txt}</span>
                      </div>
                    </div>
                    <div className="morethanbtm">
                      <p>{data.content}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <div className="py-5">
          <Container className="themed-container" fluid={false}>
            <div className="deliver text-center">
              <h2>deliverables</h2>
              <h2 className="mb-3 skycolor">what we can design for you</h2>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p> */}
            </div>
            <Row className="d-flex align-items-center ">
              {deliver.map((data, ibx) => (
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

        <div className="fullstack-tab darkbg py-5">
          <Container
            className="themed-container text-center tab-container"
            fluid={false}
          >
            <h2>
              UI/UX <span className="skycolor">technology stack</span>
            </h2>
            <p className="mb-5">
              Our UI/UX development team utilizes the right mixture of
              technologies to deliver immersive user experience.
            </p>

            <Row className="d-flex align-items-center">
              <div style={{ width: "100%" }}>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        toggle("1", "User Experience");
                      }}
                    >
                      User Experience
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        toggle("2", "UI & CSS");
                      }}
                    >
                      UI & CSS
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "3" })}
                      onClick={() => {
                        toggle("3", "Templating");
                      }}
                    >
                      Templating
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "4" })}
                      onClick={() => {
                        toggle("4", "CSS Preprocessors");
                      }}
                    >
                      CSS Preprocessors
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "5" })}
                      onClick={() => {
                        toggle("5", "Package Managers");
                      }}
                    >
                      Package Managers
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "6" })}
                      onClick={() => {
                        toggle("6", "JS Framework");
                      }}
                    >
                      JS Frameworks & Libraries
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId={activeTab}>
                    <Row className="mt-5 ">
                      {skills && skills.length > 0
                        ? skills.map((item, idx) => (
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
                  </TabPane>
                </TabContent>
              </div>
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

export default Uiux;
