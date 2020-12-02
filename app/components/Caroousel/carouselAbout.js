import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
} from "reactstrap";

import axios from "axios";
import "./carousel.css";
import leftcoma from "./../../images/in1.png";
import rightcoma from "./../../images/in2.png";
import numly from "./../../images/testimonial.jpg";
import numlyLogo from "./../../images/numly.png";


const CarouselAbout = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [items, setItems] = useState([]);

  


  return (
    <div className="custom-carousel py-5">
      <Container className="themed-container" fluid={false}>
        <div className="title-carousel text-center">
          <h3>WE HELP SEAMLESS MIGRATION</h3>
          <h4>TO DYNAMICS 365</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. </p>
        </div>
       
       
      </Container>
    </div>
  );
};

export default CarouselAbout;
