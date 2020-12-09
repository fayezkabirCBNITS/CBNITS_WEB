import React, { useState, useEffect } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption,
    Container,
} from "reactstrap";
import "./bannerCarousel.css";

import axios from "axios";
import msg from "./../../images/msg.png";
import ph from "./../../images/ph.png";

const CarouselCustom = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [bannerDetails, setBannerDetails] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        getImageArray();
        getHomeBannerDetails();
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
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getHomeBannerDetails = () => {
        axios({
            method: "POST",
            url: "https://api.cbnits.com/getPageWiseDatabyCategory",
            data: {
                page: "Home",
                category: "Banner"
            }
        }).then((res) => {
            if (res.status === 200) {
                setBannerDetails(res.data.data.reverse())
            }
        })

    }

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === bannerDetails.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? bannerDetails.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = bannerDetails.map((item, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <div className="text-center car-home-bnr">
                    <h2 className="skycolor">{item.description[0] ? item.description[0] : ""}</h2>
                    <h2 className="mb-4">{item.description[1] ? item.description[1] : ""}</h2>
                    <p>{item.description[2] ? item.description[2] : ""}</p>
                    <p>{item.description[3] ? item.description[3] : ""}</p>
                </div>
                <div className="tech-lang-container-home">
                    {images.map((language, idx) => (
                        <div key={idx} className="tech-lang-wrapper-home">
                            <abbr>
                                <img src={language.image ? language.image : language.logoPic} alt={language.category} />
                            </abbr>
                            <span>{language.name ? language.name : ""}</span>
                        </div>
                    )
                    )}
                </div>
                <CarouselCaption captionText={""} captionHeader={""} />
            </CarouselItem>
        );
    });

    return (
        <div className="custom-carousel-home  py-5"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bannerDetails.length > 0 ? bannerDetails[activeIndex].image : props.bannerImg
                    }`,
            }}
        >
            <Container className="themed-container" fluid={false}>
                <p className="tech-title-info-home">
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
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    <CarouselIndicators
                        items={bannerDetails}
                        activeIndex={activeIndex}
                        onClickHandler={goToIndex}
                    />
                    {slides}
                </Carousel>
            </Container>
        </div>
    );
};

export default CarouselCustom;
