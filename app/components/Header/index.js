import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Button,
  NavLink,
  Row,
  Col,
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import "./herder.css";
import logo from "./../../images/logo.png";
import { ReactMegaMenu } from "react-mega-menu";

import { withRouter } from "react-router-dom";

const Example = (props) => {
  const [firstDrop, setFirstDrop] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showAboutMenu, setshowAboutMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navtoggle = () => setIsOpen(!isOpen);
  const handleHover = () => {
    setshowAboutMenu(true);
  };

  const handleLeave = () => {
    setshowAboutMenu(false);
  };
  const toggleFirst = () => setFirstDrop(!firstDrop);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  const reactMegaMenu = (props) => (
    <ReactMegaMenu
      tolerance={50} // optional, defaults to 100
      direction={"RIGHT"} // optional, defaults to  "RIGHT", takes in "RIGHT" || "LEFT"
      styleConfig={{
        menuProps: {
          style: {
            // border: "2px solid red",  //this is the header navigation dropdown container
            backgroundColor: "transparent",
            // height: "2.5em",
            // width: "20em",
            padding: "0px 10px",
            margin: "0",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            zIndex: "9",
            color: "red",
          },
        },
        contentProps: {
          //this is the dropdown content details
          style: {
            // width: "50em",
            // border: "2px solid yellow",
            // padding: "2px",
            // zIndex: "9",
            // left: "-111%"
            // backgroundColor:"#6c5ce7"
          },
        },
        menuItemProps: {
          //this is the content header or can say link
          style: {
            // border: "2px solid green",
            // backgroundColor:"#81ecec",
            // padding: "2px 20px",
            // height: "2em",
            // width:"8em",
            zIndex: "9",
          },
        },
        menuItemSelectedProps: {
          //this navLink style on hover
          style: {
            // border: "2px solid purple",
            // padding: "2px 20px",
            // height: "2em",
            // backgroundColor: "#fab1a0",

            zIndex: "9",
          },
        },
        containerProps: {
          //this is the overall dropdown container
          style: {
            // border: "2px solid #fdcb6e",
            padding: "2px",
            display: "flex",
            justifyContent: "center",
            zIndex: "9",
            width: "100%",
            // backgroundColor:"red"
          },
        },
      }} // defaults to an empty object. not recommended to be left blank.
      onExit={() => {}} // a function to be called when a mouse leaves the container
      data={[
        // {
        //     label: "Home",
        //     key: 1,
        //     items: <p>the the world</p>
        // },
        // {
        //     label: "About",
        //     key: 2,
        //     items: <p>the  world</p>
        // },
        {
          label: "Studio",
          key: 1,
          items: (
            <div>
              <Row>
                <Col className="mega-link">
                  <h6 className="text-left">Web development</h6>
                  <Nav tabs className="d-flex direction-column">
                    <NavItem>
                      <NavLink href="/angular">angular</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/react">react</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/full-stack">full-stack</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/ui-ux">Ui/Ux</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col className="mega-link">
                  <h6 className="text-left">back end</h6>
                  <Nav tabs className="d-flex direction-column">
                    <NavItem>
                      <NavLink href="/node">node</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/golang">golang</NavLink>
                    </NavItem>
                    {/* <NavItem>
                                        <NavLink href="/python">python</NavLink>
                                    </NavItem> */}
                    <NavItem>
                      <NavLink href="/hadoop">hadoop</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/dynamic-365">dynamic-365</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/blockchain">blockchain</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col className="mega-link">
                  <h6 className="text-left">mobile development</h6>
                  <Nav tabs className="d-flex direction-column">
                    <NavItem>
                      <NavLink href="/mobileApp">mobileApp</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col className="mega-link">
                  <h6 className="text-left">sap</h6>
                  <Nav tabs className="d-flex direction-column">
                    <NavItem>
                      <NavLink href="#">sap</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col className="mega-link">
                  <h6 className="text-left">others</h6>
                  <Nav tabs className="d-flex direction-column">
                    <NavItem>
                      <NavLink href="/cloud-development">
                        cloud-development
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/cloud-devops">
                        cloud-devOps
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/quality-engineering">
                        quality-engineering
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/software-support">
                        software-support
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
            </div>
          ),
        },
        {
          label: "Dedicated Hiring",
          key: 4,
          items: <p> Dedicated Hiring</p>,
        },
        {
          label: "Insights & News",
          key: 5,
          items: <p> news world</p>,
        },
        // {
        //     label: "Conatact Us",
        //     key: 6,
        //     items: <p>contact world</p>
        // },
      ]} // array of data to be rendered
    />
  );
  return (
    <div className="header">
      <Container className="themed-container" fluid={false}>
        <Row className="p15 d-flex align-items-center">
          <Col
            xl={2}
            lg={1}
            md={1}
            xs={6}
            className="d-flex align-items-center p-0"
          >
            <div className="img-wrapper-head m-0">
              <img
                src={logo}
                alt="logo"
                onClick={() => props.history.push("/")}
              />
            </div>
          </Col>
          <Col xl={10} lg={11} md={11} className="p-0 for-desktop">
            <Row className="d-flex justify-content-md-left justify-content-center head-navigation">
              <Col xl={4} lg={4} md={4} sm={4} className="p-0">
                <Nav tabs className="d-flex justify-content-end">
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/aboutus">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/contact">Contact</NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} xs={6} className="p-0">
                {reactMegaMenu()}
              </Col>
              <Col xl={2} lg={2} md={2} sm={2} xs={2} className="p-0">
                <Button
                  color="primary"
                  onClick={() => props.history.push("/contact")}
                >
                  Get in touch
                </Button>
              </Col>
            </Row>
          </Col>

          {/* <Col xl={10} lg={11} md={11} xs={6} className="p-0 for-tab">
            <Navbar light expand="md">
              <NavbarToggler onClick={navtoggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                      GitHub
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
              </Collapse>
            </Navbar>
          </Col> */}

          <Col xl={10} lg={11} md={11} xs={6} className="p-0 for-tab">
            <Navbar light expand="md">
              <NavbarToggler onClick={navtoggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/home">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/aboutus">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/contact">Contact</NavLink>
                  </NavItem>
                  <NavbarText><span style={{fontWeight: 600}}>Studio</span></NavbarText>
                  <DropdownItem divider />
                  {/* <Dropdown isOpen={firstDrop} toggle={toggleFirst}> */}
                  <UncontrolledDropdown nav inNavbar>
                    {/* <Dropdown isOpen={firstDrop} toggle={toggleFirst}> */}
                    <DropdownToggle nav caret>
                      Front End
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="/angular">Angular</DropdownItem>
                      <DropdownItem href="/react">React</DropdownItem>
                    </DropdownMenu>
                    {/* </Dropdown> */}
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Back End
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="/node">Node</DropdownItem>
                      <DropdownItem href="/golang">Golang</DropdownItem>
                      <DropdownItem href="/python">Python</DropdownItem>
                      <DropdownItem href="/hadoop">Hadoop</DropdownItem>
                      <DropdownItem href="/dynamic-365">
                        Dynamic-365
                      </DropdownItem>
                      <DropdownItem href="/blockchain">Blockchain</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Full-Stack
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="/full-stack">full-stack</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Others
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="/cloud-development">
                        Cloud-Development
                      </DropdownItem>
                      <DropdownItem href="/software-support">
                        Software-Support
                      </DropdownItem>
                      <DropdownItem href="/cloud-devops">
                      cloud-devops
                      </DropdownItem>
                      <DropdownItem href="/quality-engineering">
                        quality-engineering
                      </DropdownItem>
                      <DropdownItem href="/mobileApp">Mobile App</DropdownItem>
                      <DropdownItem href="/ui-ux">Ui/Ux</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink href="/hire-us">Dedicated Hiring</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Insights & News</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
      <div style={{ display: "flex" }}>
        <div
          style={{ backgroundColor: "#009444", width: "33%", height: "2px" }}
        />
        <div
          style={{ backgroundColor: "#7f3f98", width: "34%", height: "2px" }}
        />
        <div
          style={{ backgroundColor: "#1dbdfc", width: "33%", height: "2px" }}
        />
      </div>
    </div>
  );
};

export default withRouter(Example);

{
  /* <Nav tabs className="d-flex justify-content-end" >
        <NavItem>
            <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/aboutus">About</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">Studios</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">dedicated Hiring</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">Insignts & News</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">Contact</NavLink>
        </NavItem>
        <NavItem>
            <Button color="primary">Get in touch</Button>
        </NavItem>
        
    </Nav> */
}
