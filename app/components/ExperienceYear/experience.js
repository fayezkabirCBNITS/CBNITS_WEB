import React, { useState, useEffect } from 'react';
import Axios from "../../service/axios-config";
import { Row, Col, Container } from 'reactstrap';
import './experience.css';
import exper from "./../../images/365.png";


const Experience = props => {
    const [data, setData] = useState({});
    useEffect(() => {
      _getData();
    }, []);
    const _getData = async () => {
      try {
        let res = await Axios.post("/getPageWiseDatabyCategory", {
          page: "Home",
          category: "Dynamic 365",
        });
        if (res.status == 200) {
          setData(res.data.data[0]);
        } else {
          console.log("Something went wrong!");
        }
      } catch (error) {
        console.log("error---->", error);
      }
    };
    return (
        <div className="experience py-5">
            <Container className="themed-container" fluid={false}>
                <Row className="d-flex align-items-center">
                    <Col xl={6} lg={6} className="circle-wrap d-flex align-items-center justify-content-center">
                        <div >
                        <img src={data && data.image} 
                        style={{width:'100%', height:'100%'}}
                        />
                        </div>
                    </Col>
                    <Col xl={6} lg={6}>
                        <div>
                            <div className="text-center customer-head">
                            <h2>DYNAMICS <span>365</span></h2>
                                <p>{data && data.description && data.description[0]}</p>
                            </div>
                           
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Experience;