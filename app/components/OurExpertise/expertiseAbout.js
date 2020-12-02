import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './expertise.css';
import img1 from "./../../images/d1.png"
import img2 from "./../../images/d2.png"
import img3 from "./../../images/d3.png"
import img4 from "./../../images/d4.png"
import img5 from "./../../images/d5.png"
import img6 from "./../../images/d6.png"


const techArr = [
    {
        img: img1,
        title: "Dynamic 365 Licensing"
    },
    {
        img: img2,
        title: "Dynamic 365 Marketing CRM"
    },
    {
        img: img3,
        title: "Dynamic 365 Scal CRM"
    },
    {
        img: img4,
        title: "Dynamic 365 Customer Service CRM"
    },
    {
        img: img5,
        title: "Dynamic 365 Consultancy & Implementation Service"
    },
    {
        img: img6,
        title: "Dynamic 365 Power Apps"
    },
    
]



const ExpertiseAbout= props => {
    return (
        <div className="expertise py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center tech-head">
                    <h2>THE MICROSOFT  <span>DYNAMIC 365</span></h2>
                    <p>Products And Solutions We Provide</p>
                </div>
              
     
                <Row className="d-flex align-items-center justify-content-between">
                    {
                        techArr.map((data, index) => (
                            <Col xl={6} lg={8} className=" d-flex align-items-center justify-content-center" key={index}>
                                <div className="tect-wrap">
                                <div  className="text-center">
                                    <img src={data.img} />
                                    <p>{data.title}</p>
                                </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default ExpertiseAbout;