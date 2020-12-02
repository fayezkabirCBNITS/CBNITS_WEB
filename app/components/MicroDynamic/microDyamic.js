import React, { useState,useEffect } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './micro.css';
import Axios from "../../service/axios-config";

import python from "./../../images/softwareSupport/spl1.png"
import java from "./../../images/softwareSupport/spl2.png"
import golang from "./../../images/softwareSupport/spl3.png"
import msg from "./../../images/softwareSupport/spl4.png"
import ph from "./../../images/softwareSupport/spl5.png"

const imgArr = [
    { img: python, name: "python" },
    { img: java, name: "angular.js" },
    { img: golang, name: "vue.js" },
    { img: msg, name: "vue.js" },
    { img: ph, name: "vue.js" },
    { img: java, name: "angular.js" },
];

const MicroDynamic = props => {
    const [data, setData] = useState([]);
  useEffect(() => {
    _getProduct();
  }, []);
  const _getProduct = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Dynamic 365",
        category: "Product and Solution",
      });
      console.log("Product and Solution---->", res);
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
        <div className="micro py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center micro-tech-heads">
                    <h2>The Microsoft <span>Dynamic 365</span></h2>
                    <h6>Product and Solution We Provide</h6>
                </div>
                
                <Row className="d-flex align-items-center justify-content-between">
                    { data && data.length>0 ?
                        data.map((item, index) => (
                            <Col xl={4} lg={4} className=" d-flex align-items-center justify-content-center" key={index}>
                                <div className="micro-tect-wraps">
                                    <div className="text-center">
                                        <img src={item.image} />
                                        <h5>{item.name}</h5>
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

export default MicroDynamic;