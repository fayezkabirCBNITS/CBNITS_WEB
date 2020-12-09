import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './dediacatedweb.css';
import Axios from "../../service/axios-config";


const DedicatedWeb = props => {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        _getWhoWeAre();   // Fetch Specialized Services images
    }, []);

    const _getWhoWeAre = async () => {
        try {
            let res = await Axios.post("/getPageWiseDatabyCategory", {
                page: "Web Development",
                category: "Developers",
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

    return (
        <div className="dedicated py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center tech-heads">
                    <h2>types of dedicated <span>webdevelopers</span></h2>
                    <p>you can Hire from CBNITS</p>
                </div>

                <Row className="d-flex align-items-center justify-content-between">
                    {
                        responseData ? responseData.map((data, index) => (
                            <Col xl={4} lg={4} className=" d-flex align-items-center justify-content-center" key={index}>
                                <div className="tect-wraps">
                                    <div className="text-center">
                                        <img src={data.image} />
                                        <h5>{data.name}</h5>
                                        <p>{data.description}</p>
                                    </div>
                                </div>
                            </Col>
                        )) : ''
                    }
                </Row>
            </Container>
        </div>
    )
}

export default DedicatedWeb;