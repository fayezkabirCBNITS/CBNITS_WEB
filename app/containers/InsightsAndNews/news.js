import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./news.module.css";
import bannerImg from "./../../images/uiuxBnr.jpg";
import Banner from "./../../components/TechBanner/techBanner";
import NewsCopm from "./../../components/insightsNews/newsCopm";
import NewsCopmfull from "./../../components/insightsNews/newsCompFull";
import NewsLetter from "./../../components/insightsNews/newsLetter";
import { withRouter } from "react-router-dom";
import axios from "axios";

// const whiteText = "";
const blueTxt = "News";
const paraFirst ="";
const paraSecond = "Leading the path of innovation!";



const News = props => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {

        window.scrollTo({ top: 0 });
        getNewsList();
    }, []);


    const getNewsList = data => {
        axios({
            method: "GET",
            url: "https://api.cbnits.com/getallNews"
        })
            .then((res) => {
                // console.log(res.data.data, "news listing")
                setNewsList(res.data.data.reverse());
            })
    }


    return (
        <div>
            <Banner
                bannerImg={bannerImg}
                blueTxt={blueTxt}
                paraFirst={paraFirst}
                paraSecond={paraSecond}
            />
            <Container className="themed-container" fluid={false}>
                <Row className="mt-5 d-flex justify-content-center">
                    {
                        newsList.length > 1 ? newsList.map((news, index) => (
                            <Col md={6} sm={12} xs={12} key={index}>
                                <NewsCopm news={news} bgImg={bannerImg} />
                            </Col>

                        ))
                            : ""
                    }
                </Row>
            </Container>
        </div>
    )
}

export default withRouter(News);

