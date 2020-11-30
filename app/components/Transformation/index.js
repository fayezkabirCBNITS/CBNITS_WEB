import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './style.css';

const Transformation = props => {
    return (
        <div className="whyCbnits py-5">
            <Container className="themed-container" fluid={false}>
                
                <Row className="d-flex align-items-center justify-content-between">
                   <Col sm={6}></Col>
                   <Col sm={6}>
                   <div className="whyTitle">
                        <h2>transformation at <span> speed and scale.</span></h2>
                        <p>We don't deliberate. We deliver.</p>
                    </div>
                   </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Transformation;