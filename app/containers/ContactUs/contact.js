import React, { useState, useEffect } from "react";
import {
  Nav,
  NavItem,
  Button,
  NavLink,
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Banner from "./../../components/TechBanner/techBanner";
import Axios from "../../service/axios-config";

import bannerImg from "./../../images/angularBnr.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "./contact.css";

const whiteText = "us";
const blueTxt = "Contact";
const paraFirst = "Get in touch with our help team & get instant response";

const ContactUs = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState(0);
  const [email, setEmail] = useState("");
  const [txtArea, setTxtArea] = useState("");

  const _validation = () => {
    if (firstName.length == 0) {
      return false
    } else if (lastName.length == 0) {
      return false
    } else if (email.length == 0) {
      return false
    } else if (contact.length == 0) {
      return false
    } else if (txtArea.length == 0) {
      return false
    } else {
      return true
    }
  };

  const onSubmit = async (e) => {
    if (_validation()) {
      e.preventDefault();
      try {
        let res = await Axios.post("/contactMai", {
          name: firstName + " " + lastName,
          contactNo: contact,
          emailAddress: email,
          message: txtArea,
        });
        if (res.status == 200) {
          alert("Successful!");
        } else {
          alert("Something went wrong!");
        }
      } catch (error) {
        console.log("error---->", error);
      }
    }
  };

  return (
    <div>
      <Banner
        bannerImg={bannerImg}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
      />
      <div className="contact">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center">
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
              <div className="contact-head">
                <h2>Office</h2>
                <h2 className="skycolor mb-5">Address:</h2>
                <h3>Office Location</h3>
                <div>
                  <h4>USA</h4>
                  <Row>
                    <Col xl={1} lg={1}>
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="fontIcon"
                      />
                    </Col>
                    <Col xl={11} lg={11}>
                      <p>1861 Camacho Way San Jose, California 95132</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={1} lg={1}>
                      <FontAwesomeIcon
                        icon={faMobileAlt}
                        className="fontIcon"
                      />
                    </Col>
                    <Col xl={11} lg={11}>
                      <p>669-213-8571</p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <h4>India</h4>
                  <Row>
                    <Col xl={1} lg={1}>
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="fontIcon"
                      />
                    </Col>
                    <Col xl={11} lg={11}>
                      <p>
                        Webel IT Park DH 6/6 Action Area 1, Rajarhat, New Town
                        Kolkata-700156
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={1} lg={1}>
                      <FontAwesomeIcon
                        icon={faMobileAlt}
                        className="fontIcon"
                      />
                    </Col>
                    <Col xl={11} lg={11}>
                      <p>9038025366</p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <h4>Connect with Gmail</h4>
                  <Row>
                    <Col xl={1} lg={1}>
                      <FontAwesomeIcon icon={faEnvelope} className="fontIcon" />
                    </Col>
                    <Col xl={11} lg={11}>
                      <p>business@cbnits.com</p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <h4>Connect with Gmail</h4>
                  <Row>
                    <Col xl={1} lg={1}>
                      <FontAwesomeIcon icon={faEnvelope} className="fontIcon" />
                    </Col>
                    <Col xl={11} lg={11}>
                      <p>CBNITS Business Development</p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <div>
                <div
                  className="form-head text-center"
                  style={{ marginTop: "120px" }}
                >
                  <h2>
                    Leave us a <span className="skycolor">Message</span>
                  </h2>
                </div>
                <div className="formDiv">
                  <Form>
                    <Row style={{ marginBottom: "10px" }}>
                      <Col md={6} lg={6} xl={6} sm={12} xs={12}>
                        <FormGroup>
                          <Label>First Name</Label>
                          <Input
                            type="text"
                            name="firstname"
                            placeholder="Enter yoy first name"
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6} lg={6} xl={6} sm={12} xs={12}>
                        <FormGroup>
                          <Label>Last Name</Label>
                          <Input
                            type="text"
                            name="lastname"
                            placeholder="Enter your last name"
                            required
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: "10px" }}>
                      <Col md={6} lg={6} xl={6} sm={12} xs={12}>
                        <FormGroup>
                          <Label>Contact No</Label>
                          <Input
                            type="number"
                            name="contact"
                            placeholder="Enter your contact number"
                            required
                            onChange={(e) => setContact(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6} lg={6} xl={6} sm={12} xs={12}>
                        <FormGroup>
                          <Label>Email Address</Label>
                          <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: "10px" }}>
                      <Col md={12} lg={12} xl={12} sm={12} xs={12}>
                        <FormGroup>
                          <Label>Text Area</Label>
                          <Input
                            type="textarea"
                            name="text"
                            rows={4}
                            required
                            onChange={(e) => setTxtArea(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="text-center">
                          <Button type="submit" onClick={onSubmit}>
                            Submit
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;
