import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import Axios from "../../service/axios-config";
import './style.css';

import careerImg from "./../../images/career-left.png";

const Transformation = props => {
    const [data, setData] = useState({});
    useEffect(() => {
        _getTransformation();
    }, [])
    const _getTransformation = async () => {
        try {
            let res = await Axios.post("/getPageWiseDatabyCategory", {
                category: "Projects Completed",
                page: "Career"
            });
            console.log("res-- Career --->", res);
            if (res.status == 200) {
                setData(res.data.data[0]);
            }
            else {
                console.log("Something went wrong");
            }
        } catch (error) {
            console.log("error---->", error);
        }
    }
    return (
        <div className="transformWrapper py-5">
            <Container className="themed-container" fluid={false}>

                <Row className="d-flex align-items-center justify-content-between">
                    <Col sm={6}>
                        <img src={careerImg} alt="next" />
                    </Col>
                    <Col sm={6}>
                        <div className="whyTitle">
                            <h2>transformation at <span> speed and scale.</span></h2>
                            {/* <p className="mt-4 mb-4">{data && data.subDescription} </p> */}
                            <p className="mt-4 mb-4">You can check the latest job openings here if you are looking to be a part of a young, vibrant and growing team. Take your first step to an incredible career with us.</p>
                        </div>
                        <ul className="listStyle">
                            {data && data.description && data.description.length > 0 ?
                                data.description.map((item, key) => (
                                    <li key={key}>{item}</li>
                                )) : null}
                            {/* <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
                        <li>Quis ipsum suspendisse</li>
                        <li>Viverra maecenas accumsan lacus</li>
                        <li>Suspendisse ultrices gravida.</li> */}
                        </ul>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Transformation;