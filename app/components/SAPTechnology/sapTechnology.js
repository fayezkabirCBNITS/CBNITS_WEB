import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from 'reactstrap';
import "./style.css"
import Axios from "../../service/axios-config";

import sapIcon6 from "./../../images/sap/sapIcon6.png";
import sapIcon8 from "./../../images/sap/sapIcon8.png";
import sapIcon9 from "./../../images/sap/sapIcon9.png";
import sapIcon10 from "./../../images/sap/sapIcon10.png";


const expertise = [
    {
      txt: "SAP ABAP-ABAP on HANA",
      img: sapIcon6,
    },
    {
      txt: "Flori/SAP Ui5",
      img: sapIcon8,
    },
    {
      txt: "OData",
      img: sapIcon9,
    },
    {
      txt: "Workflow",
      img: sapIcon10,
    }
  ];
  

const SapTechnology = props => {

    return (
        <div className="sapTechnoly-bnits py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center sapTechnoly-head">
                    <h2>Our Expertise in other</h2>
                    <h2 className="skycolor">Sap technology includes:</h2>
                </div>
                <Row className="d-flex align-items-center">
                  {expertise.map((data, idx) => (
                    <Col xl={3} lg={3} md={4} sm={12} xs={12} key={idx}>
                      <div className="sapTechnoly-deliverOptn mt-4">
                        <div className="sapTechnoly-dashBorder">
                          <span><img src={data.img} alt=""/></span>
                        </div>
                        <div className="sapTechnoly-deliverDetails">
                          <span>{data.txt}</span>
                        </div>
                      </div>
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>

    )
}

export default SapTechnology;