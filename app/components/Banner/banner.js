import React, { useState, useEffect } from "react";
import { Button, Container } from "reactstrap";
import axios from "axios";

import "./banner.css";
import msg from "./../../images/msg.png";
import ph from "./../../images/ph.png";

const Banner = (props) => {
  const [images, setImages] = useState([]);

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
    <div className="header-img">
      <Container className="themed-container" fluid={false}>
        <p className="title-info">
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
        <div className="middle-section">
          <h1>We Build</h1>
          <h2 className="skycolor mb-xl-4">Startup experts</h2>
          <p className="mb-xl-1">
            with our innovation and expertise in cutting-edge technology. we
            help to achieve
          </p>
          <p className="skycolor mb-xl-1">optimal buisness growth</p>
          <Button type="button" color="primary">
            Hire us
          </Button>
        </div>
        <div className="lang-container">
          {images.map((language, idx) => (
            <div key={idx} className="lang-wrapper">
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
