import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './expertise.css';
import Axios from './../../service/axios-config'
import ai from "./../../images/e1.png"
import blockchain from "./../../images/e2.png"
import iot from "./../../images/e3.png"
import hadoop from "./../../images/e4.png"
import augmented from "./../../images/e5.png"
import wearbles from "./../../images/e6.png"
import decops from "./../../images/e7.png"
import uxui from "./../../images/e8.png"
import dataSci from "./../../images/e9.png"
import cyberSec from "./../../images/e10.png"
import cloudSol from "./../../images/e11.png"
import softDev from "./../../images/e12.png"

const techArr = [
    {
        img: ai,
        title: "Al & Machine Learnings"
    },
    {
        img: blockchain,
        title: "blockchain"
    },
    {
        img: iot,
        title: "iot & connected devices"
    },
    {
        img: hadoop,
        title: "Big data & Hadoop"
    },
    {
        img: augmented,
        title: "Augmented Reality"
    },
    {
        img: wearbles,
        title: "Mobile & wearables"
    },
    {
        img: decops,
        title: "DevOps & Infrastructure"
    },
    {
        img: uxui,
        title: "UX / ui"
    },
    {
        img: dataSci,
        title: "Data Science"
    },
    {
        img: cyberSec,
        title: "Cybersecurity"
    },
    {
        img: cloudSol,
        title: "Cloud solutions"
    },
    {
        img: softDev,
        title: "Software Development"
    },
]



const Expertise = props => {
    const [responseData, setResponseData] = useState();

    const getData = async () => {
        try {
          let res = await Axios.post("/getPageWiseDatabyCategory", {
            page: "Home",
            category: "Our Expertise",
          });
          console.log("res-- Our Expertise --->", res);
          if (res.status == 200) {
            setResponseData(res.data.data);
          } else {
            console.log("Something went wrong!");
          }
        } catch (error) {
          console.log("error---->", error);
        }
      };

    useEffect(()=>{
        getData()
    },[])

    console.log('responseData===>',responseData)

    return (
        <div className="expertiseDiv py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center expertiseDiv-head">
                    <h2>our <span>expertise</span></h2>
                    <p>in the Cutting-Edge Technologies</p>
                </div>
                <p className="expertiseDiv-para text-center">
                    At CBNITS, we provide out of the box ideas to help
                    you unleash the business potential of new-age technologies
                    for differentiated advantage. We are able to catalyze dedicated
                    and skilled resources to our clients.
                </p>
                <Row className="d-flex align-items-center  justify-content-center">
                    {responseData ? responseData.map((data, index) => (
                        <Col
                            xl={3}
                            lg={3}
                            className=" d-flex align-items-center"
                            key={index}
                        >
                            <div className="expertiseDiv-box">
                                <div className="text-center">
                                    <img src={data.image} />
                                    <h6>{data.name}</h6>
                                </div>
                            </div>
                        </Col>
                    )) : null
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Expertise;