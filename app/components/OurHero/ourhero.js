import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './hero.css';
import Axios from "../../service/axios-config";


const OurHero = props => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        _getWhoWeAre();
    }, []);
    const _getWhoWeAre = async () => {
        try {
            let res = await Axios.post("/getPageWiseDatabyCategory", {
                category: "Gallery Images",
                page: "About Us"
            });
            if (res.status == 200) {
                setImages(res.data.data);
            }
            else {
                console.log("Something went wrong");
            }
        } catch (error) {
            console.log("error---->", error);
        }
    };

    return (
        <div className="heroes py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center hero-heads">
                    <h2>Meet our <span className="skycolor">Heroes</span></h2>
                    <p>Our Team is friendly, talkative, and fully reliable</p>
                </div>

                <Row className="d-flex align-items-center justify-content-between">
                    {
                        images && images.length > 0 ? images.map((data, index) => (
                            <Col xl={2} lg={2} key={index}>
                                <div className="hero-img">
                                    <img src={data.image} alt="" />
                                </div>
                                <div className="text-center txthead">
                                    <h6>Heroes</h6>
                                    <p>Team Leader</p>
                                </div>
                                <div className="hero-img">
                                    <img src={data.image} alt="" />
                                </div>
                                <div className="text-center txthead">
                                    <h6>Heroes</h6>
                                    <p>Team Leader</p>
                                </div>
                            </Col>
                        )) : ''
                    }
                </Row>
            </Container>
        </div>
    )
}

export default OurHero;