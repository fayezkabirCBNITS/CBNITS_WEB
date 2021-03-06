import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Container } from 'reactstrap';
import "./techLanguage.css"
import Banner from "./../../components/TechBanner/techBanner"
import Axios from "../../service/axios-config";
import bannerImg from "./../../images/pythonBnr.jpg"
import icon from "./../../images/list-icon.png"
import { withRouter } from "react-router-dom";
const whiteText = "service"
const blueTxt = "Python development"
const paraFirst = "We leverage the power of Python for creating hogh performing"
const paraSecond = "real-time web applications "

const Python = props => {
    const [data, setData] = useState({});
    const [response, setResponse] = useState({});

    useEffect(() => {
        _getData();
        _getResponse();
    }, []);
    const _getData = async () => {
        try {
            let res = await Axios.post("/getPageWiseDatabyCategory", {
                page: "Python",
                category: "Python Development",
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

    const _getResponse = async () => {
        try {
            let res = await Axios.post("/getPageWiseDatabyCategory", {
                page: "Python",
                category: "Advantages of Hiring Pyhton Developer",
            });
            if (res.status == 200) {
                setResponse(res.data.data[0]);
            } else {
                console.log("Something went wrong!");
            }
        } catch (error) {
            console.log("error---->", error);
        }
    };

    return (
        <div>
            <Banner
                bannerImg={bannerImg}
                whiteText={whiteText}
                blueTxt={blueTxt}
                paraFirst={paraFirst}
                paraSecond={paraSecond}
            />
            <div className="Alanguage py-5">
                <Container className="themed-container" fluid={false}>
                    <Row className="d-flex align-items-center">
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="Adevelpment">
                                <h2>Python <span className="skycolor mb-5">development</span></h2>
                                {data && data.description
                                    ? data.description.map((item, key) => (
                                        <Row key={key}>
                                            <Col xl={1} lg={1}>
                                                <img 
                                                    src={icon}
                                                    alt={icon}
                                                    style={{
                                                        marginRight: "2px",
                                                        fontSize: "18px",
                                                        marginTop: "5px",
                                                        marginLeft: "10px",
                                                    }}
                                                />
                                            </Col>
                                            <Col xl={11} lg={11}>
                                                <p>
                                                    {item}
                                                </p>
                                            </Col>
                                        </Row>
                                    )) : ''
                                }
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="imgSec">
                                <img src={data && data.image} alt="image" />
                            </div>
                        </Col>
                    </Row>
                    <div className="text-center Ahire-req">
                        <p> Hire the best in the industry Python developer from CBNITS
                        to secure outstanding software development services according
                        to your buisness requirements.
                        </p>
                    </div>
                </Container>
                <div className="Adarkbg">
                    <Container className="themed-container" fluid={false}>
                        <Row className="d-flex align-items-center ">
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="imgSec">
                                    <img src={response && response.image} alt="" />
                                </div>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="Aadvantages">
                                    <h6>
                                        Advantages of hiring Python dvelopers from{" "}
                                        <span className="skycolor">CBNITS</span>
                                    </h6>
                                    {response && response.description
                                        ? response.description.map((item, key) => (
                                            <Row key={key}>
                                                <Col xl={1} lg={1}>
                                                    <img 
                                                        src={icon}
                                                        alt={icon}
                                                        style={{
                                                            marginRight: "2px",
                                                            fontSize: "18px",
                                                            marginTop: "5px",
                                                            marginLeft: "10px",
                                                        }}
                                                    />
                                                </Col>
                                                <Col xl={11} lg={11}>
                                                    <p>
                                                        {item}
                                                    </p>
                                                </Col>
                                            </Row>
                                        )) : ''
                                    }
                                </div>
                            </Col>
                        </Row>
                        <div className="text-center">
                            <Button color="primary" onClick={()=> props.history.push("/hire-us")}>Hire Us</Button>
                        </div>
                    </Container>

                </div>
            </div>
        </div>
    )
}

export default withRouter(Python);