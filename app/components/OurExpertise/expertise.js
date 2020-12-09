import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './expertise.css';

const Expertise = props => {
    const [responseData, setResponseData] = useState();
    useEffect(() => {
        setResponseData(props.responseData)
    }, [])


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