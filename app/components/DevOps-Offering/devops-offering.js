import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from 'reactstrap';
import "./offering.css"
import Axios from "../../service/axios-config";

const CloudPortfolio = props => {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        _getWhoWeAre();   // Fetch Our Cloud Development Services images
    }, []);

    const _getWhoWeAre = async () => {
        try {
            let res = await Axios.post("/getPageWiseDatabyCategory", {
                page: "CLOUD & DEVOPS",
                category: "Our Cloud Development Services",
            });
            // console.log("res-- Our Cloud Development Services --->", res.data.data[0]);
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

    return (
        <div className="offering-bnits py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center offering-head">
                    <h2>Devops<span className="skycolor"> Offering</span></h2>
                </div>
                <Row className="d-flex align-items-center">
                    {responseData && responseData.description && responseData.description.length > 0
                        ? responseData.description.map((data, idx) => (
                            <Col xl={3} lg={3} md={4} sm={12} xs={12} key={idx}>
                                <div className="offering-deliverOptn mt-4">
                                    <div className="offering-deliverOptnNo">
                                        <div className="offering-dashBorder">
                                            <span>{idx + 1}</span>
                                        </div>
                                    </div>
                                    <div className="offering-deliverDetails">
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