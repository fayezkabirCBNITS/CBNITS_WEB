import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './management.css';

import careerImg from "./../../images/career-left.png";

const ManagementTeam = props => {
    return (
        <div className="teamCbnits py-5">
            <Container className="themed-container" fluid={false}>

                <Row className="d-flex align-items-center justify-content-between">
                    <Col sm={6}>
                        <img src={careerImg} alt="next" />
                    </Col>
                    <Col sm={6}>
                        <div className="whyTitle">
                            <h2>Management <span> Team</span></h2>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default ManagementTeam;