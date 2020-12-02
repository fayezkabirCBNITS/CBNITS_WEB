import React, { useState } from 'react';
import { Nav, NavItem, Button , NavLink, Row, Col, Container } from 'reactstrap';
import './herder.css';
import logo from "./../../images/logo.png";


const Example = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div className="header">
            <Container className="themed-container"  fluid={false}>
                <Row>
                    <Col xl={2} lg={1} className="d-flex align-items-center">
                    <div className="img-wrapper">
                        <img src={logo} alt="logo" />
                    </div>
                    </Col>
                    <Col xl={10} lg={11}>
                        <Nav tabs className="d-flex justify-content-end" >
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">About</NavLink>
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
                            
                        </Nav>

                    </Col>
                </Row>
            </Container>
                <div style={{display: "flex"}}>
                    <div style={{backgroundColor : "#009444" , width : "33%" , height : "2px"}}></div>
                    <div style={{backgroundColor : "#7f3f98" , width : "34%" , height : "2px"}}></div>
                    <div style={{backgroundColor : "#1dbdfc" , width : "33%" , height : "2px"}}></div>
                </div>
        </div>
    );
}

export default Example;