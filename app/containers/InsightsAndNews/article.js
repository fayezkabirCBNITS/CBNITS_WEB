import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./news.module.css";
import bannerImg from "./../../images/uiuxBnr.jpg";
import Banner from "./../../components/TechBanner/techBanner";
import { withRouter } from "react-router-dom";
import axios from "axios";

// const whiteText = "";
const blueTxt = "News";
const paraFirst ="";
const paraSecond = "Leading the path of innovation!";



const News = props => {
    const [data, setData] = useState("");
    useEffect(() => {
        window.scrollTo({ top: 0 });

        axios({
            method: "GET",
            url: `https://api.cbnits.com/getNewsByID?newsID=${props.match.params.id}`

        })
            .then((res) => {
                console.log(res.data.data, "news listing")
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

                    <p dangerouslySetInnerHTML={{ __html: data.newsContent }}></p>
                    <p>you can get actual source from<a href={`${data.newsLink}`}> HERE.</a></p>
                </Row>
            </Container>
        </div>
    )
}

export default withRouter(News);

