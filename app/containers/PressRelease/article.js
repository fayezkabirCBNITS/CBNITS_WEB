import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./pressRelease.module.css";
import bannerImg from "./../../images/uiuxBnr.jpg";
import Banner from "./../../components/TechBanner/techBanner";
import { withRouter } from "react-router-dom";
import axios from "axios";

// const whiteText = "";
const blueTxt = "Press Releases";
const paraFirst ="";
const paraSecond = "Leading the path of innovation!";



const News = props => {
    const [data, setData] = useState("");
    useEffect(() => {
        window.scrollTo({ top: 0 });

        axios({
            method: "GET",
            url: `https://api.cbnits.com/getPressReleaseByID?pressReleaseID=${props.match.params.id}`

        })
            .then((res) => {
                setData(res.data.data);
            })
    }, [])


    return (
        <div>
            <Banner
                bannerImg={bannerImg}
                blueTxt={blueTxt}
                paraFirst={paraFirst}
                paraSecond={paraSecond}
            />
            <Container className="themed-container mt-5" fluid={false}>
                <div className="article-header">
                    <h2>{data.metaTitle}</h2>

                </div>
                <Row className="mt-5 ">

                    <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
                </Row>
            </Container>
        </div>
    )
}

export default withRouter(News);

