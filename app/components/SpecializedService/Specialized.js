import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './Specialized.css';
import Axios from "../../service/axios-config";

const Specialized = (props) => {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        _getWhoWeAre();   // Fetch Specialized Services images
      }, []);

      const _getWhoWeAre = async () => {
        try {
          let res = await Axios.post("/getPageWiseDatabyCategory", {
            page: "Software Support",
            category: "Specialized Services",
          });
          console.log("res-- Specialized Services --->", res.data.data);
          if (res.status == 200) {
            setResponseData(res.data.data.reverse());
          }
          else{
              console.log("Something went wrong!");
          }
        } catch (error) {
          console.log("error---->", error);
        }
      };
     console.log('responseData.ima=====> ',responseData.data ) 
     
    return (
        <div className="special py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center special-heads">
                    <h2>Specialized <span> Services</span></h2>
                </div>
                
                <Row className="d-flex align-items-center  justify-content-center">
                    {
                        responseData ? responseData.map((data, index) => (
                            <Col xl={2} lg={2} className=" d-flex align-items-center" key={index}>
                                <div className="special-wrap">
                                    <div className="text-center">
                                        <img src={data.image} />
                                        <h6>{data.name}</h6>
                                    </div>
                                </div>
                            </Col>
                         )) : ''
                    } 
                </Row>
            </Container>
        </div>
    )
}

export default Specialized;