import React, { useState, useEffect } from "react";
import Axios from "../../service/axios-config";
import "./whatwedo.css";
import { Row, Col, Container, Form } from "reactstrap";

const WhatWeDo = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    _getData();
  }, []);
  const _getData = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Home",
        category: "What We Do",
      });
      if (res.status == 200) {
        setData(res.data.data);
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };


  return (
    <div className="content-wrapper">
      <Container className="themed-container py-5" fluid={false}>
        <div className="we-subtitle">
          <h2>
            what <span>we do</span>
          </h2>
        </div>
        <Form>
          <Row className="d-flex justify-content-between ">
            {data && data.length > 0
              ? data.map((item, idx) => (
                  <Col xl={4} lg={4} key={idx}>
                    <div className="we-container">
                      <div className="num-txt">
                        <span>{idx + 1}</span>
                        <h4>{item.name}</h4>
                      </div>
                      <p className="desp">
                        {item.description && item.description[0]}
                      </p>
                    </div>
                  </Col>
                ))
              : null}
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default WhatWeDo;
