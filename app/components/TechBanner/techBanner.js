import React, { useState, useEffect } from "react";
import { Button, Container } from "reactstrap";
import axios from "axios";
import styled from "styled-components";

import "./techBanner.css";
import msg from "./../../images/msg.png";
import ph from "./../../images/ph.png";
import { withRouter } from "react-router-dom";
import Axios from "./../../service/axios-config"

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
    font-family: "Lato", sans-serif;
    ${(props) =>
      props.bannerimage &&
      css`
        background-image: url(${msg});
      `}
  `;

  useEffect(() => {
    if(props.bannerIconCategory   === "Cloud Devops") {
      getCloudDevopsImage()
    }else {
      getImageArray();
    }
  }, []);

  const getImageArray = () => {
    axios({
      method: "POST",
      url: "https://api.cbnits.com/getPageWiseDatabyCategory",
      data: {
        page : "Banner",
        category: "Languages",
      },
    })
      .then((res) => {
        if (res) {
          setImages(res.data.data.reverse());
          console.log(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCloudDevopsImage = async () => {
    try {
      
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Cloud Devops",
        category: "Languages",
        
    });
    setImages(res.data.data.reverse());

    }catch (e){
      console.log(e);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${
          props.bannerImg
        }`,
      }}
      className="tech-img"
    >
      <Container className="themed-container" fluid={false}>
        <p className="tech-title-info">
          <span>
            <abbr>
              <img src={msg} alt="msg" />{" "}
            </abbr>
            business@cbnits.com
          </span>
          <span>
            <abbr>
              <img src={ph} alt="phone" />{" "}
            </abbr>
            +1669-213-8571
          </span>
        </p>
        <div className="tech-middle-section">
          <h1 className="skycolor">
            {" "}
            {props.blueTxt}{" "}
            <span className="whiteColor">{props.whiteText}</span>
          </h1>
          <p>{props.paraFirst}</p>
          <p className="optimal">{props.paraSecond}</p>
          {props.requiredButton ? (
            <Button type="button" color="primary" onClick={() => props.history.push("/hire-us")}>
              Hire us
            </Button>
          ) : null}
        </div>
        <div className="tech-lang-container">
          {images.map((language, idx) => (
            <div key={idx} className="tech-lang-wrapper">
              <abbr>
                <img src={language.image ?language.image :  language.logoPic} alt={language.category} />
              </abbr>
              <span>{language.name ? language.name : ""}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default withRouter(Banner);
