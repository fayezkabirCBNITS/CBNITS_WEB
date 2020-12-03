import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from 'reactstrap';
import "./portfolio.css"
import Axios from "../../service/axios-config";

const CloudPortfolio = props => {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        _getWhoWeAre();   // Fetch Pogramming Languages images
      }, []);

      const _getWhoWeAre = async () => {
        try {
          let res = await Axios.post("/getPageWiseDatabyCategory", {
            page: "Web Development",
            category: "Pogramming Languages",
          });
          console.log("res-- Programming Languages --->", res.data.data);
          if (res.status == 200) {
            setResponseData(res.data.data);
          }
          else{
              console.log("Something went wrong!");
          }
        } catch (error) {
          console.log("error---->", error);
        }
      };
     console.log('Programming Languages=====> ',responseData ) 

    return (
        <div className="portfolio-bnits py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center head">
                    <h2>Our cloud Development services <span className="skycolor">Portfolio includes:</span></h2>
                </div>
                <Row className="d-flex align-items-center">
                    {
                       responseData ? responseData.map((data, idx) => (
                            <Col xl={3} lg={3} key={idx}>
                                <div className="portfolio-tracks">
                                    <Row className="d-flex align-items-center">
                                        {/* <Col lg={3}> <div className="tracks-img"><img src={data.image} alt="image" /></div></Col> */}
                                        <Col lg={3}> <div className="portfolio-tracks-img">{idx}</div></Col>
                                        <Col lg={9}>
                                            <p>{data.name}</p>
                                        </Col>
                                    </Row>

                                </div>
                            </Col>
                        )) : ''
                    }
                </Row>
            </Container>
        </div>

    )
}

export default CloudPortfolio;