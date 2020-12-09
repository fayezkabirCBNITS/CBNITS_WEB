import React, { useState, useEffect } from "react";
import { Row, Col, Container } from 'reactstrap';
import "./portfolio.css"
import Axios from "../../service/axios-config";

const CloudPortfolio = props => {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        _getWhoWeAre();   // Fetch Our Cloud Development Services images
    }, []);

    const _getWhoWeAre = async () => {
        try {
            let res = await Axios.post("/getPageWiseDatabyCategory", {
                page: "Cloud Development",
                category: "Our Cloud Development Services",
            });
            console.log("res-- Our Cloud Development Services --->", res.data.data[0]);
            if (res.status == 200) {
                setResponseData(res.data.data[0]);
            }
            else {
                console.log("Something went wrong!");
            }
        } catch (error) {
            console.log("error---->", error);
        }
    };
    console.log('Programming Languages=====> ', responseData.description)

    return (
        <div className="portfolio-bnits py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center head">
                    <h2>Our cloud Development services <span className="skycolor">Portfolio includes:</span></h2>
                </div>
                <Row className="d-flex align-items-center justify-content-center">
                    {responseData.description && responseData.description.length > 0
                        ? responseData.description.map((data, idx) => (
                            <Col xl={3} lg={3} md={4} sm={12} xs={12} key={idx}>
                                <div className="deliverOptn mt-4">
                                    <div className="deliverOptnNo">
                                        <div className="dashBorder">
                                            <span>{idx + 1}</span>
                                        </div>
                                    </div>
                                    <div className="deliverDetails">
                                        <span>{data}</span>
                                    </div>
                                </div>
                            </Col>
                        )) : ''}
                </Row>
            </Container>
        </div>

    )
}

export default CloudPortfolio;