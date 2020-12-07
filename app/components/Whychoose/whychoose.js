import React, { useState, useEffect } from "react";
import { Row, Col, Container } from 'reactstrap';
import "./whychoose.css"
import Axios from "../../service/axios-config";

const WhyChoose = () => {

    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        _getWhoWeAre();
      }, []);

      const _getWhoWeAre = async () => {
        try {
          let res = await Axios.post("/getPageWiseDatabyCategory", {
            page: "Software Support",
            // category: "Specialized Services",
            category: "Why Choose Us"
          });
          console.log("res-- Why choose use --->", JSON.parse(res.data.data[0].description[0]));
          if (res.status == 200) {
            setResponseData(res.data.data[0]);
          }
          else{
              console.log("Something went wrong!");
          }
        } catch (error) {
          console.log("error---->", error);
        }
      };

    return (
        <div className="whychoose-cbnits py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center whychoose-cbnits-head">
                    <h2>Why <span className="skycolor">Choose us</span></h2>
                    <p>A choice that makes different</p>
                </div>
                <Row className="d-flex align-items-center">
                    {
                       responseData.description ? responseData.description.map((data, idx) => {
                            let parseData = JSON.parse(data);
                            console.log("parseDAta--->", parseData)
                            return (<Col xl={3} lg={3} key={idx}>
                                <div className="whychoose">
                                    <div className="whychoose-header text-center"><span>{idx + 1}</span></div>
                                        <Row className="d-flex align-items-center">
                                            <Col xl={12} lg={12}>
                                                <h5>{parseData.title}</h5>
                                                <p>{parseData.desc}</p>
                                            </Col>
                                        </Row>
                                </div>
                            </Col>)
}) : ''
                    }
                </Row>
            </Container>
        </div>

    )
}

export default WhyChoose;