import React, { useState } from 'react';
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from 'reactstrap';
import './footer.css';
import logo from "./../../images/logo.png";
import fb from "./../../images/fb.png";
import insta from "./../../images/insta.png";
import twitter from "./../../images/twitter.png";
import linkedin from "./../../images/link.png";
import footer from "./../../images/design.png";

import { withRouter } from "react-router-dom";

const Example = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div className="footer">
            <div className="moon">
                <img src={footer} alt="foot" />
            </div>
            <Container className="themed-container" fluid={false}>
                <div className="haveproject text-center">
                    <p>Have a project?</p>
                    <Button color="primary" onClick={() => props.history.push("/contact")}>Contact us</Button>
                </div>

                <Row className="d-flex justify-content-center mb-4">
                    <Col xl={9}>
                        <Nav tabs className="d-flex justify-content-between" >
                            <NavItem>
                                <NavLink href="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/aboutus">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/hire-us">dedicated Hiring</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/career">Career</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4}>
                        <div className="img-wrapper">
                            <img src={logo} alt="logo" />
                        </div></Col>
                    <Col xl={4} className="socialsec d-flex justify-content-between">
                        <div className="social">
                            <img src={fb} alt="fb" />
                        </div>
                        <div className="social">
                            <img src={twitter} alt="twit" />
                        </div>
                        <div className="social">
                            <img src={insta} alt="ins" />
                        </div>
                        <div className="social">
                            <img src={linkedin} alt="linke" />
                        </div>
                    </Col>
                    <Col xl={4} className="copyrights">
                        <span className="copy">&copy; 2020 copyright CBNITS</span>
                    </Col>

                </Row>
            </Container>

        </div>
    );
}

export default withRouter(Example);