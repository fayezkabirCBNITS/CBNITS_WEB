import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
} from "reactstrap";

import "./carousel.css";
import leftcoma from "./../../images/in1.png";
import rightcoma from "./../../images/in2.png";



const CarouselCustom = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = props.items;


  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.logoPic}
      >
        <div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={item.thumbnailPic} alt=" " />
          </div>
          <div>
            <img src={leftcoma} alt="" />
            <p className="px-5 car-desp">{item.description} </p>
            <img src={rightcoma} alt="" style={{ float: "right" }} />
          </div>
          <div className="clients">
            <div className="client-img">
              <img src={item.logoPic} />
            </div>
            <div className="actual-client">
              <h5 className="car-desp-name">{item.name.split(",")[0]}</h5>
              <h5 className="car-desp-name">{item.name.split(",")[1]}</h5>
            </div>
          </div>
        </div>
        <CarouselCaption
          // captionText={item.name}
          // captionHeader={item.name}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="custom-carousel py-5">
      <Container className="themed-container" fluid={false}>
        <div className="title-carousel text-center">
          <h3>Why customers love</h3>
          <h4>working with us</h4>
        </div>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Container>
    </div>
  );
};

export default CarouselCustom;
