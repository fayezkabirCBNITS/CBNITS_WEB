import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from 'reactstrap';

import "./gallery.css";
// import t4 from "./../../images/t4.jpg";
// import t4 from "./../../images/t4.jpg";
import t3 from "./../../images/t3.jpg";
import t4 from "./../../images/t4.jpg";
import t5 from "./../../images/t5.jpg";
import t6 from "./../../images/t6.jpg";
import t7 from "./../../images/t7.jpg";
import t8 from "./../../images/t8.jpg";


const ImageGallery = props => {
    return (
        <div>
            <div className="gallery-contain py-5">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center">
                        <Col xl={4} lg={4}>
                            <div className="gallery-img">
                                <img src={t3} alt="" />
                            </div>
                        </Col>
                        <Col xl={4} lg={4}>
                            <div className="gallery-img">
                                <img src={t4} alt="" />
                            </div>
                        </Col>
                        <Col xl={4} lg={4}>
                            <div className="gallery-img">
                                <img src={t5} alt="" />
                            </div>
                        </Col>
                        <Col xl={4} lg={4}>
                            <div className="gallery-img">
                                <img src={t6} alt="" />
                            </div>
                        </Col>
                        <Col xl={4} lg={4}>
                            <div className="gallery-img">
                                <img src={t7} alt="" />
                            </div>
                        </Col>
                        <Col xl={4} lg={4}>
                            <div className="gallery-img">
                                <img src={t8} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default ImageGallery;