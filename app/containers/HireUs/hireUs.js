import React, { useState, useEffect } from "react";
import {
  Nav,
  NavItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  NavLink,
  Row,
  Col,
  Container,
  fo,
} from "reactstrap";
import Banner from "./../../components/TechBanner/techBanner";
import Axios from "./../../service/axios-config";
import { countryCodes } from "../../Config/countrycodes";

import bannerImg from "./../../images/hireUsBnr.jpg";
// import icon from "./../../images/list-icon.png"
// import angularcreation from "./../../images/angularcreation.png"
import tree from "./../../images/lineArrowRound.png";

import "./hireus.css";

const whiteText = "us";
const blueTxt = "hire";
const paraFirst =
  "CBNITS aims to provide the best-in-class remote hiring options of";
const paraSecond = "skilled resources";

const dummyArr = [
  {
    tech: "ui/ux",
  },
  {
    tech: "DevOps / Cloud DecOps",
  },
  {
    tech: "Hadoop & data science",
  },
  {
    tech: "python and java development",
  },
  {
    tech: "backend development",
  },
  {
    tech: "Cloud development",
  },
  {
    tech: "IOT(Internet of Things)",
  },
  {
    tech: "Microsoft Dynamics 365",
  },
  {
    tech: "dedicated full-stack development",
  },
  {
    tech: "maintance & support",
  },
  {
    tech: "Cyber security",
  },
  {
    tech: "blockchain technology",
  },
  {
    tech: "web development",
  },
  {
    tech: "react & anular development",
  },
  {
    tech: "Quality engineering",
  },
  {
    tech: "machine learning",
  },
  {
    tech: "mobile application development",
  },
  {
    tech: "applicaion development",
  },
];

const initialFields = {
  fullname: "",
  country: "",
  contactNo: "",
  emailAddress: "",
  hiringChecked: "monthly",
  note: "",
};
const HireUs = (props) => {
  const [checks, setChecks] = useState([]);
  const [formData, setFormData] = useState(initialFields);
  const [fullNameError, setFullNameError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [contactNoError, setContactNoError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [noteError, setNoteError] = useState(false);
  const [fixedHiredData, setFixedHiredData] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    getFixedHiringProcess();
  }, [])

  const handleCheckbox = (value) => {
    let tempServices = JSON.parse(JSON.stringify(checks));
    let index = -1;
    for (let i = 0; i < tempServices.length; i++) {
      if (tempServices[i] == value) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      tempServices.push(value);
    } else {
      tempServices.splice(index, 1);
    }
    setChecks(tempServices);
  };

  const handleChange = (name, value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onFocusInput = (name) => {
    if (name == "fullname") {
      setFullNameError(false);
    } else if (name == "country") {
      setCountryError(false);
    } else if (name == "contactNo") {
      setContactNoError(false)
    } else if (name == "emailAddress") {
      setEmailError(false)
    } else if (name == "note") {
      setNoteError(false)
    }
  };

  const _validation = () => {
    if (formData.fullname.length == 0) {
      setFullNameError(true);
      return false;
    } else if (formData.country.length == 0) {
      setCountryError(true);
      return false;
    } else if (formData.contactNo.length == 0) {
      setContactNoError(true);
      return false;
    } else if (!formData.emailAddress.match(/\S+@\S+\.\S+/)) {
      setEmailError(true);
      return false;
    } else if (formData.hiringChecked.length == 0) {
      return false;
    } else if (formData.note.length == 0) {
      setNoteError(true);
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = async (e) => {
    if (_validation()) {
      e.preventDefault();
      try {
        let res = await Axios.post("/hire-usMail", {
          fullName: formData.fullname,
          country: formData.country,
          contactNo: formData.contactNo,
          emailAddress: formData.emailAddress,
          note: formData.note,
          hiringChecked: formData.hiringChecked,
          serviceChecked: checks,
        });
        if (res.status == 200) {
          alert("Successful!");
          setFormData(initialFields);
        } else {
          alert("Something went wrong!");
        }
      } catch (error) {
        console.log("error---->", error);
      }
    }
  };
  const getFixedHiringProcess = async data => {

    const response = await Axios.post("/getPageWiseDatabyCategory", {
      page: "Hire Us",
      category: "Fixed Basis Hiring",
    });

    setFixedHiredData(response.data.data);
  }
  return (
    <div>
      <Banner
        bannerImg={bannerImg}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
        paraSecond={paraSecond}
      />
      <div className="hirre py-5">
        <Container className="themed-container hirre-container" fluid={false}>
          <h2>
            select as many of <span className="skycolor">these as apply</span>
          </h2>

          <Row className="mb-5">
            {dummyArr.map((data, idx) => (
              <Col xl={3} key={idx}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={() => handleCheckbox(data.tech)}
                    />
                    {data.tech}
                  </Label>
                </FormGroup>
              </Col>
            ))}
          </Row>
          <Row className="d-flex align-items-center justify-content-center user-hire-form pt-5">
            <Col xl={10} lg={10} md={10}>
              <Form className="w-100 ">
                <Row form className="mb-2">
                  <Col md={6}>
                    <FormGroup className="px-4">
                      <Label for="fullname">Full name*</Label>
                      <Input
                        type="text"
                        invalid={fullNameError}
                        form
                        name="fullname"
                        value={formData.fullname}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                        onFocus={(e) => onFocusInput(e.target.name)}
                        required
                        id="full name"
                        placeholder="enter your first name"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="px-4">
                      <Label for="exampleEmail">Where are you from*</Label>
                      <Input
                        invalid={countryError}
                        type="select"
                        name="country"
                        value={formData.country}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                        onFocus={(e) => onFocusInput(e.target.name)}
                        required
                        id="exampleSelect"
                      >
                        {countryCodes.map((item, id) => (
                          <option value={item.name} key={id}>
                            {item.name}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="px-4">
                      <Label for="examplePassword">Contact no*</Label>
                      <Input
                        invalid={contactNoError}
                        type="number"
                        name="contactNo"
                        value={formData.contactNo}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                        onFocus={(e) => onFocusInput(e.target.name)}
                        required
                        id="number"
                        placeholder="enter your contact no"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="px-4">
                      <Label for="email">Email*</Label>
                      <Input
                        invalid={emailError}
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                        required
                        onFocus={(e) => onFocusInput(e.target.name)}
                        id="userEmail"
                        placeholder="enter your email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup
                  row
                  className="px-4"
                  value={formData.hiringChecked}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  required
                >
                  <Label for="exampleEmail" sm={2}>
                    type of hiring*
                  </Label>
                  <Col sm={10} className="d-flex align-items-center">
                    <FormGroup check className="mr-4">
                      <Label check>
                        <Input
                          type="radio"
                          name="hiringChecked"
                          value="monthly"
                        />{" "}
                        monthly
                      </Label>
                    </FormGroup>
                    <FormGroup check className="mr-4">
                      <Label check>
                        <Input
                          type="radio"
                          name="hiringChecked"
                          value="fixed"
                        />{" "}
                        fixed
                      </Label>
                    </FormGroup>
                    <FormGroup check className="mr-4">
                      <Label check>
                        <Input
                          type="radio"
                          name="hiringChecked"
                          value="decide later"
                        />{" "}
                        decide later
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <Row>
                  <Col md={12}>
                    <FormGroup className="px-4">
                      <Label for="text">yout note*</Label>
                      <Input
                        invalid={noteError}
                        type="textarea"
                        rows={6}
                        name="note"
                        value={formData.note}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                        required
                        onFocus={(e) => onFocusInput(e.target.name)}
                        id="textarea"
                        placeholder=""
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="text-center submit-btn">
                  <Button type="button" color="primary" onClick={onSubmit}>
                    Submit
                  </Button>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="hire-process-wrapper py-5">
        <Container className="themed-container" fluid={false}>
          <h2>
            monthly-basis <span className="skycolor">hiring process</span>
          </h2>
          <Row className="d-flex align-items-center">
            <Col>
              <div className="imgSec">
                <img src={tree} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="monthly-based py-5">
        <Container className="themed-container" fluid={false}>
          <h2 className="mb-5">
            Fixed-basis <span className="skycolor">hiring process</span>
          </h2>
          <Row className="d-flex align-items-center justify-content-center">
            {
              fixedHiredData.length > 1 &&
              fixedHiredData.map((data, idx) => (
                <Col  xl={4} lg={4} md={6} xs={12} sm={12}  key={idx} className="mb-4">
                  <div className="fix-buget-process d-flex align-items-center">
                    <div>
                      <img src={data.image} alt="" />
                    </div>
                    <div className="fixedmotnPara">
                      <p>{data.name}</p>
                    </div>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HireUs;
