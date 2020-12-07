import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import Axios from "../../service/axios-config";
import "./whycbnits.css";
import track from "./../../images/w1.png";
import support from "./../../images/w2.png";
import talent from "./../../images/w3.png";
import security from "./../../images/w4.png";


const WhyCbnits = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    _getData();
  }, []);
  const _getData = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Home",
        category: "Why CBNITS",
      });
      if (res.status == 200) {
        setData(res.data.data.reverse());
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };
  return (
    <div className="whyCbnits py-5">
      <Container className="themed-container" fluid={false}>
        <div className="text-center whyTitle">
          <h2>
            why<span> cbnits ?</span>
          </h2>
          <p>We don't deliberate. We deliver.</p>
        </div>
        <Row className="d-flex align-items-center justify-content-between">
          {data && data.length > 0
            ? data.map((item, idx) => (
                <Col xl={6} lg={6} key={idx}>
                  <div className="features">
                    <Row className="d-flex align-items-center justify-content-center">
                      <Col xl={2} lg={2}>
                        <img src={item.image} alt="map" />
                      </Col>
                      <Col xl={10} lg={10} className="feature-text">
                        <h4>{item.name}</h4>
                        <p>{item && item.description && item.description[0]}</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))
            : null}
        </Row>
      </Container>
    </div>
  );
};

export default WhyCbnits;
