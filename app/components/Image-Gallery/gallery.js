import React, { useState, useEffect } from "react";
import { Row, Col, Container } from 'reactstrap';
import Axios from "../../service/axios-config";

import "./gallery.css";


const ImageGallery = props => {
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
            console.log("res-- Gallery --->", res);
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
        <div>
            <div className="gallery-contain py-5">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center">
                        {images && images.length > 0 ?
                            images.map((img, key) => (
                                <Col xl={4} lg={4} key={key}>
                                    <div className="gallery-img">
                                        <img src={img.image} alt="" />
                                    </div>
                                </Col>
                            )) : null}
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default ImageGallery;