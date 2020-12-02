import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from 'reactstrap';
import Axios from "../../service/axios-config";

import "./gallery.css";
// import t4 from "./../../images/t4.jpg";
// import t4 from "./../../images/t4.jpg";
import t3 from "./../../images/t3.jpg";
import t4 from "./../../images/t4.jpg";
import t5 from "./../../images/t5.jpg";
import t6 from "./../../images/t6.jpg";
import t7 from "./../../images/t7.jpg";
import t8 from "./../../images/t8.jpg";


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
          if(res.status == 200){
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
                        {images && images.length>0?
                        images.map((img, key)=> (
                            <Col xl={4} lg={4} key={key}>
                            <div className="gallery-img">
                                <img src={img.image} alt="" />
                            </div>
                        </Col>
                        )):null}
                        {/* <Col xl={4} lg={4}>
                            <div className="gallery-img">
                                <img src={t3} alt="" />
                            </div>
                        </Col>
                        <Col xl={4} lg={4}>
                            <div className="gallery-img">
                                <img src={t4} alt="" />
                            </div>
                        </Col>
                        <Col xl={4} lg={4}>
                            <div className="gallery-img">
                                <img src={t5} alt="" />
                            </div>
                        </Col>
                        <Col xl={4} lg={4}>
                            <div className="gallery-img">
                                <img src={t6} alt="" />
                            </div>
                        </Col>
                        <Col xl={4} lg={4}>
                            <div className="gallery-img">
                                <img src={t7} alt="" />
                            </div>
                        </Col>
                        <Col xl={4} lg={4}>
                            <div className="gallery-img">
                                <img src={t8} alt="" />
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default ImageGallery;