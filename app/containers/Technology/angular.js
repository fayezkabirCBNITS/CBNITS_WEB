import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "reactstrap";
import Banner from "./../../components/TechBanner/techBanner";
import Axios from "../../service/axios-config";

import bannerImg from "./../../images/angularBnr.jpg"
import icon from "./../../images/list-icon.png"
import { withRouter } from "react-router-dom";

import "./techLanguage.css";

const whiteText = "service";
const blueTxt = "angular js development";
const paraFirst =
    "no matter how complex your project is, at CBNITS, our cutting edge and best in";
const paraSecond =
    "class Angular Development Services have predictable outcomes. ";


const Angularjs = (props) => {
    const [data, setData] = useState({});
    const [response, setResponse] = useState({});
    useEffect(() => {
        _getData();
        _getResponse();
    }, []);
    const _getData = async () => {
        try {
            let res = await Axios.post("/getPageWiseDatabyCategory", {
                page: "Angular Js Development Service",
                category: "Our AngularJs Development",
            });
            if (res.status == 200) {
                setData(res.data.data[0]);
                console.log('6767',res.data.data[0])
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
                page: "Angular Js Development Service",
                category: "Advantages of Hiring Angular JS",
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
            {/* {
            isLoaded ?
              <Loader
                type="ThreeDots"
                color="rgba(0, 191, 255, 0.5)"
                height={"100vh"}
                width={100}
                className="d-flex justify-content-center align-items-center"
                visible={isLoaded}
              />
              :
              <> */}
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
                                <h2>our angularjs</h2>
                                <h2 className="skycolor mb-5">development offerings</h2>
                                {data && data.description
                                    ? data.description.map((item, index) => (
                                        <p key={index}>
                                            <span>
                                                <img src={icon} alt={icon} />
                                            </span>
                                            {item}
                                        </p>
                                    ))
                                    : null}
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="imgSec"> 
                                <img src={data && data.image} alt="" />
                            </div>
                        </Col>
                    </Row>
                    <div className="text-center Ahire-req">
                        <p>
                            Hire the best in the industry Angular Js developer from CBNITS to
                            secure outstanding software development services according to your
                            buisness requirements.
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
                                        Advantages of hiring Angular JS dvelopers from{" "}
                                        <span className="skycolor">CBNITS</span>
                                    </h6>
                                    {response && response.description
                                        ? response.description.map((item, ibx) => (
                                            <p key={ibx}>
                                                <span>
                                                    <img src={icon} alt={icon} />
                                                </span>
                                                {item}
                                            </p>
                                        ))
                                        : null}
                                </div>
                            </Col>
                        </Row>
                        <div className="text-center">
                            <Button color="primary" onClick={()=> props.history.push("/hire-us")}>Hire Us</Button>
                        </div>
                    </Container>
                </div>
            </div>
        {/* </>
} */}
        </div>
    );
};

export default withRouter(Angularjs);
