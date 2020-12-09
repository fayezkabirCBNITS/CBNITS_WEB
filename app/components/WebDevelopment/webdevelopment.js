import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from 'reactstrap';
import "./webdevelopment.css"
import Axios from "../../service/axios-config";

const Webdevelopment = props => {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        _getWhoWeAre();   // Fetch Pogramming Languages images
    }, []);

    const _getWhoWeAre = async () => {
        try {
            let res = await Axios.post("/getPageWiseDatabyCategory", {
                page: "Web Development",
                category: "Pogramming Languages",
            });
            if (res.status == 200) {
                setResponseData(res.data.data);
            }
            else {
                console.log("Something went wrong!");
            }
        } catch (error) {
            console.log("error---->", error);
        }
    };
    console.log('Programming Languages=====> ', responseData)

    return (
        <div className="about-bnits py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center head">
                    <h2>Web <span className="skycolor">Development</span></h2>
                    <h4>Technologies and Framworks we use</h4>
                </div>
                <div className="text-center head1">
                    <Button className="program">Programming Languages</Button>
                    <Button className="framworks">Frameworks</Button>
                    <Button className="database">Databases</Button>
                </div>
                <Row className="d-flex align-items-center">
                    {
                        responseData ? responseData.map((data, idx) => (
                            <Col xl={3} lg={3} key={idx}>
                                <div className="web-tracks">
                                    <Row className="d-flex align-items-center">
                                        <Col lg={3}> <div className="tracks-img"><img src={data.image} alt="image" /></div></Col>
                                        <Col lg={9}>
                                            <p>{data.name}</p>
                                        </Col>
                                    </Row>

                                </div>
                            </Col>
                        )) : ''
                    }
                </Row>
            </Container>
        </div>

    )
}

export default Webdevelopment;