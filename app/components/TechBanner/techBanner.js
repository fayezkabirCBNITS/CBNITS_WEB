import React, { useState, useEffect } from "react";
import { Button, Container } from "reactstrap";
import axios from "axios";
import styled from "styled-components";


import "./techBanner.css";
import msg from "./../../images/msg.png";
import ph from "./../../images/ph.png";

const Banner = (props) => {
    const [images, setImages] = useState([]);


    const bannerDiv = styled.div`        
        height: 700px;
        width: 100%;
        background-image: url(${"./../../images/banner2.jpg"});
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        padding-top: 80px;
        font-family: 'Lato', sans-serif;
        ${
            props => props.bannerimage && css`
            background-image: url(${msg});
            `
        }
    `

    useEffect(() => {
        getImageArray();
    }, []);

    const getImageArray = () => {
        axios({
            method: "POST",
            url: "https://api.cbnits.com/getHomePageImagebyCategory",
            data: {
                category: "Languages",
            },
        })
            .then((res) => {
                if (res) {
                    setImages(res.data.data);
                    console.log(res.data.data)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div bannerimage="./../../images/banner.jpg" className="tech-img">
            <Container className="themed-container" fluid={false}>
                <p className="tech-title-info">
                    <span>
                        <abbr>
                            <img src={msg} alt="msg" />{" "}
                        </abbr>
                        info@cbnits.com
                    </span>
                    <span>
                        <abbr>
                            <img src={ph} alt="phone" />{" "}
                        </abbr>
                        +1699-213-8574
                    </span>
                </p>
                <div className="tech-middle-section">
                    <h1 className="skycolor">angular js development <span className="whiteColor">service</span></h1>
                    <p>no matter how complex your project is ,at CBNITS, our cutting edge and best in</p>
                    <p>class Angular Development Services have predictable outcomes. </p>
                    
                </div>
                <div className="tech-lang-container">
                    {images.map((language, idx) => (
                        <div key={idx} className="tech-lang-wrapper">
                            <abbr>
                                <img src={language.logoPic} alt={language.category} />
                            </abbr>
                            <span>{language.name}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Banner;
