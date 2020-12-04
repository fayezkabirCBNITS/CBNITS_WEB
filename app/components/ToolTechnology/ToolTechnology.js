import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "reactstrap";
import "./toolTech.css";
import Axios from "../../service/axios-config";

const ToolTechnology = (props) => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    _getTools(); // Fetch Pogramming Languages images
  }, []);

  const _getTools = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Mobile App Development",
        category: "Tool and Technology",
      });
      console.log("res-- Tool --->", res);
      if (res.status == 200) {
        setResponseData(res.data.data);
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };
  console.log("Programming Languages=====> ", responseData);

  return (
    <div className="tool-bnits py-5">
      <Container className="themed-container" fluid={false}>
        <div className="text-center tool-head">
          <h2>
            Tool & <span className="skycolor">Technology</span>
          </h2>
          <h4>We use to make your mobile app come to life</h4>
          <p>
            A Developer of CBNITS will pick the perfect Technology stack suited
            for your mobile app to <br /> be robust and scalable
          </p>
        </div>

        <Row className="d-flex align-items-center">
          {responseData
            ? responseData.map((data, idx) => (
                <Col xl={3} lg={3} key={idx}>
                  <div className="techstack mb-4">
                        <div className="teckStackImg">
                          <img src={data.image} alt="image" />
                        </div>
                        <div className="teckStackName pl-4">

                        <span>{data.name}</span>
                        </div>
                  </div>
                </Col>
              ))
            : ""}
        </Row>
      </Container>
    </div>
  );
};

export default ToolTechnology;
