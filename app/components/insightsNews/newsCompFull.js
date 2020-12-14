import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./newsCopmfull.module.css";


const NewsFull = props => {
    return (
        <div className="mt-5">

            <Row>
                <Col sm={12}>
                    <div

                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.bgImg
                                }`,
                        }}
                        className="newsImgBgFull d-flex justify-content-center align-items-center"
                    >
                        <p className="newsType">Tech</p>
                        <p className="authNews">
                            <span className="dateAdded">11 december 2020</span>
                            <abbr className="mx-2">|</abbr>
                            <span className="newsAuthor">John Doe</span>
                        </p>
                        <div className="text-center fullLink">
                            <h5>Proin congueelit fringrilla </h5>
                            <p>sodals tellus interdum fermentum.Aliquam vitea Arcu condimentum , Consectetum diam sed, ultrices urna.</p>
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default NewsFull;

