import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from "reactstrap";
import Axios from "../../service/axios-config";

import "./whoWeAre.css";
import t4 from "./../../images/t4.jpg";

const WhoWeAre = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    _getWhoWeAre();
  }, []);
  const _getWhoWeAre = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "About Us",
        category: "Who We Are",
      });
      console.log("res-- Who We Are --->", res.data.data[0]);
      if (res.status == 200) {
        setData(res.data.data[0]);
      }
      else{
          console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };
  return (
    <div>
      <div className="whoweare py-5">
        <Container className="themed-container" fluid={false}>
          <Row className="d-flex align-items-center">
            <Col xl={6} lg={6}>
              <div className="whowe">
                <h5>
                  who <span className="skycolor">we are</span>
                </h5>
                <p>
                 {data && data.description && data.description.length && data.description[0]}
                </p>
              </div>
            </Col>
            <Col xl={6} lg={6}>
              <div className="whowe-img">
                <img src={data.image} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WhoWeAre;
