import React, { useState } from 'react';
import { Nav, NavItem, Button , NavLink, Row, Col, Container } from 'reactstrap';
import './herder.css';
import logo from "./../../images/logo.png";
import { ReactMegaMenu } from "react-mega-menu";


const Example = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showAboutMenu , setshowAboutMenu] = useState(false)
   const  handleHover = () => {
    setshowAboutMenu(true );
      };
      
      const handleLeave = () => {
        setshowAboutMenu(false );
      };

    const toggle = () => setDropdownOpen(!dropdownOpen);


    const reactMegaMenu = props => (
        <ReactMegaMenu
            tolerance={50}      // optional, defaults to 100
            direction={"RIGHT"}  // optional, defaults to  "RIGHT", takes in "RIGHT" || "LEFT"
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
                        color: "red"
                    }
                },
                contentProps: {   //this is the dropdown content details
                    style: {
                        // width: "50em",
                        // border: "2px solid yellow",
                        padding: "2px",
                        zIndex: "9",
                        left: "0"
                        // backgroundColor:"#6c5ce7"
                    }
                },
                menuItemProps: {   //this is the content header or can say link
                    style: {
                        // border: "2px solid green",
                        // backgroundColor:"#81ecec",
                        // padding: "2px 20px",
                        // height: "2em",
                        // width:"8em",
                        zIndex: "9"
                    }
                },
                menuItemSelectedProps: {  //this navLink style on hover
                    style: {
                        // border: "2px solid purple",
                        // padding: "2px 20px",
                        // height: "2em",
                        // backgroundColor: "#fab1a0",

                        zIndex: "9"
                    }
                },
                containerProps: {     //this is the overall dropdown container
                    style: {
                        // border: "2px solid #fdcb6e",
                        padding: "2px",
                        display: "flex",
                        justifyContent: "center",
                        zIndex: "9",
                        width: "100%"
                        // backgroundColor:"red"
                    }
                }
            }}   // defaults to an empty object. not recommended to be left blank.
            onExit={() => { }}  // a function to be called when a mouse leaves the container
            data={[
                {
                    label: "Home",
                    key: 1,
                    items: <p>the the world</p>
                },
                {
                    label: "About",
                    key: 2,
                    items: <p>the  world</p>
                },
                {
                    label: "Studio",
                    key: 3,
                    items: <p> world</p>
                },
                {
                    label: "Dedicated Hiring",
                    key: 4,
                    items: <p> Dedicated Hiring</p>
                },
                {
                    label: "Insights & News",
                    key: 5,
                    items: <p> news  world</p>
                },
                {
                    label: "Conatact Us",
                    key: 6,
                    items: <p>contact world</p>
                },
            ]
            }        // array of data to be rendered
        />

    )
    return (
        <div className="header">
            <Container className="themed-container"  fluid={false}>
                <Row className="p15">
                    <Col xl={2} lg={1} className="d-flex align-items-center">
                    <div className="img-wrapper">
                        <img src={logo} alt="logo" />
                    </div>
                    </Col>
                    <Col xl={10} lg={11}>
                            <Row className="d-flex justify-content-md-left justify-content-center head-navigation">
                                <Col xl={10}>
                                    {reactMegaMenu()}
                                </Col>
                                <Col xl={2}>
                                <Button color="primary">Get in touch</Button></Col>
                            </Row>

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



    {/* <Nav tabs className="d-flex justify-content-end" >
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
        
    </Nav> */}