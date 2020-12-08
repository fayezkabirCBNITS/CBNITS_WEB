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
import { showToast } from "../../utils/helper-methods";

import bannerImg from "./../../images/contactBnr.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "./contact.css";
import { withRouter } from "react-router-dom";

const whiteText = "us";
const blueTxt = "Contact";
const paraFirst = "Get in touch with our help team & get instant response";

const ContactUs = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [txtArea, setTxtArea] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {window.scrollTo(0, 0)},[]);

  const _validation = () => {
    return new Promise((resolve) => {
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (
        firstName.length == 0 ||
        lastName.length == 0 ||
        (email.length == 0 || !emailRegex.test(email)) ||
        contact.length == 0 ||
        txtArea.length == 0
      ) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  };

  const resetValue = () => {
    setFirstName("");
    setLastName("");
    setContact("");
    setEmail("");
    setTxtArea("");
    setIsLoading(false);
  };

  const onSubmit = async (e) => {
    try {
      if (!isLoading) {
        const validationStatus = await _validation();

        if (!validationStatus) {
          return;
        }
        e.preventDefault();
        setIsLoading(true);

        let res = await Axios.post("/contactMail", {
          name: firstName + " " + lastName,
          contactNo: contact,
          emailAddress: email,
          message: txtArea,
        });

        if (res.status == 200) {
          resetValue();
          showToast("We will contact you soon!");
        } else {
          setIsLoading(false);
          showToast("Something went wrong!", "error");
        }
      }
    } catch (error) {
      setIsLoading(false);
      showToast("Something went wrong!", "error");
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
                            placeholder="Enter your first name"
                            required
                            value={firstName}
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
                            value={lastName}
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
                            min={0}
                            value={contact}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: "10px" }}>
                      <Col md={12} lg={12} xl={12} sm={12} xs={12}>
                        <FormGroup>
                          <Label>Message</Label>
                          <Input
                            type="textarea"
                            name="text"
                            rows={4}
                            required
                            value={txtArea}
                            onChange={(e) => setTxtArea(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="text-center">
                          <Button
                            type="submit"
                            onClick={onSubmit}
                            disabled={isLoading}
                          >
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

export default withRouter(ContactUs);
