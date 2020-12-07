import React,{useState, useEffect} from 'react'
import { Row, Col, Container } from 'reactstrap';
import './softwareMaintenance.css';
import Axios from "../../service/axios-config";

const SoftwareMaintenance = () =>{
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        _getWhoWeAre();
      }, []);

      const _getWhoWeAre = async () => {
        try {
          let res = await Axios.post("/getPageWiseDatabyCategory", {
            page: "Software Support",
            category: "Support Services of CBNITS",
          });
          console.log("res-- Support Services of CBNITS --->", res.data.data[0]);
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
     console.log('responseData.description ',responseData.description ) 
    return (
        <div className="mainContainer py-5">
            <Container className="themed-container" fluid={false}>
                <div className="text-center soft-heads">
                    <h2>SOFTWARE MAINTENANCE &</h2>
                    <h2 className="skycolor">SUPPORT SERVICES OF CBNITS</h2>
                </div>
                
                <Row className="d-flex align-items-center justify-content-center serviceDiv" >
                {
                      responseData.description ? responseData.description.map((data, idx) => (
                            <Col xl={4} lg={4} key={idx}>
                                <div className="services">
                                    <Row className="d-flex align-items-center">
                                        <Col lg={2}>
                                            <h4>{idx + 1}</h4>
                                        </Col>
                                        <Col lg={10}>
                                            <h5>{data}</h5>
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

export default SoftwareMaintenance
