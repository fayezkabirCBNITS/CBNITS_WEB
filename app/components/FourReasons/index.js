import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form } from "reactstrap";
import "./styles.css";
import Axios from "../../service/axios-config";

const FourReasons = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    _getReasons();
  }, []);

  const _getReasons = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        category: "Four Reasons",
        page: "Career",
      });
      if (res.status == 200) {
        setData(res.data.data[0]);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };

  return (
    <div className="fourReacson-wrapper">
      <Container className="themed-container py-5" fluid={false}>
        <div className="fourReacson text-center">
          <h2 className="mb-5">
            Four reasons why you should <br />
            <span className="skycolor">choose our service</span>
          </h2>
        </div>
        <Form>
          <Row className="d-flex justify-content-between">
            {data && data.description && data.description.length > 0
              ? data.description.map((item, idx) => {
                let parsedData = JSON.parse(item);
                return (
                  <Col xl={3} lg={3} md={6} className="mb-4" key={idx}>
                    <div className="we-container we-cnt-new fourResonsBX">
                      <div className="num-txt num-txt-new border-bottom mb-3 pb-3">
                        <span>{idx + 1}</span>
                        <h6>{parsedData.title}</h6>
                      </div>
                      <p className="desp">{parsedData.description}</p>
                    </div>
                  </Col>
                );
              })
              : null}
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default FourReasons;
