import React, { useState, useEffect } from "react";
import { Row, Col, Container } from 'reactstrap';
import "./business.css"
import Axios from "../../service/axios-config";

import tickWhite1 from "./../../images/cloudDevop/cd1.png";
import tickWhite2 from "./../../images/cloudDevop/cd2.png";
import tickWhite3 from "./../../images/cloudDevop/cd3.png";
import tickWhite4 from "./../../images/cloudDevop/cd4.png";
import tickWhite5 from "./../../images/cloudDevop/cd5.png";
import tickWhite6 from "./../../images/cloudDevop/cd6.png";
import tickWhite7 from "./../../images/cloudDevop/cd7.png";
import tickWhite8 from "./../../images/cloudDevop/cd8.png";
import tickWhite9 from "./../../images/cloudDevop/cd9.png";

const expertise = [
    {
      txt: "Manufacturing",
      img: tickWhite1,
    },
    {
      txt: "Real Estate",
      img: tickWhite2,
    },
    {
      txt: "Healthcare",
      img: tickWhite3,
    },
    {
      txt: "Education/e-Learning",
      img: tickWhite4,
    },
    {
      txt: "Retail",
      img: tickWhite5,
    },
    {
      txt: "Energy",
      img: tickWhite6,
    },
  
    {
      txt: "Travel & Hospitality",
      img: tickWhite7,
    },
    {
      txt: "Logistics",
      img: tickWhite8,
    },
    {
      txt: "e-Commerce",
      img: tickWhite9,
    }
  ];
  

const DevopsBusiness = props => {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        _getWhoWeAre();   // Fetch Our Cloud Development Services images
    }, []);

    const _getWhoWeAre = async () => {
        try {
            let res = await Axios.post("/getPageWiseDatabyCategory", {
                page: "Cloud Development",
                category: "Our Cloud Development Services",
            });
            console.log("res-- Our Cloud Development Services --->", res.data.data[0]);
            if (res.status == 200) {
                setResponseData(res.data.data[0]);
            }
            else {
                console.log("Something went wrong!");
            }
        } catch (error) {
            console.log("error---->", error);
        }
    };
    console.log('Programming Languages=====> ', responseData.description)

    return (
        <div className="business-bnits py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center business-head">
                    <h2>What does devops <span> Offer my business</span></h2>
                </div>
                <Row className="d-flex align-items-center">
                  {expertise.map((data, idx) => (
                    <Col xl={3} lg={3} md={4} sm={12} xs={12} key={idx}>
                      <div className="business-deliverOptn mt-4">
                        <div className="business-dashBorder">
                          <span><img src={data.img} alt=""/></span>
                        </div>
                        <div className="business-deliverDetails">
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

export default DevopsBusiness;