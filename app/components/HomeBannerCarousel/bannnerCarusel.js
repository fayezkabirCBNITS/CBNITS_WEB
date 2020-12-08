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
import "./bannerCarousel.css";
import leftcoma from "./../../images/in1.png";
import rightcoma from "./../../images/in2.png";
import numly from "./../../images/testimonial.jpg";
import numlyLogo from "./../../images/numly.png";

const items1 = [
    {
        src:
            "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
        altText: "Slide 1",
        caption: "Slide 1",
    },
    {
        src:
            "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
        altText: "Slide 2",
        caption: "Slide 2",
    },
    {
        src:
            "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
        altText: "Slide 3",
        caption: "Slide 3",
    },
];

const CarouselCustom = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    // const [items, setItems] = useState(["1" , "2" , "3"]);
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
                setBannerDetails(res.data.data)
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

    const slides =bannerDetails.map((item, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <div className="text-center car-home-bnr">
                    <h2 className="skycolor">{item.description[0] ? item.description[0] : ""}</h2>
                    <h2>{item.description[1] ? item.description[1] : ""}</h2>
                    <p>{item.description[2] ? item.description[2] : ""}</p>
                    <p>{item.description[3] ? item.description[3] : ""}</p>
                </div>
                <div className="tech-lang-container-home">
                    {images.map((language, idx) => (
                        <div key={idx} className="tech-lang-wrapper">
                            <abbr>
                                <img src={language.image ? language.image : language.logoPic} alt={language.category} />
                            </abbr>
                            <span>{language.name ? language.name : ""}</span>
                        </div>
                    )
                    )}
                </div>
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });
    console.log(bannerDetails , "checking length")

    return (
        <div className="custom-carousel-home  py-5"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bannerDetails.length > 0 ? bannerDetails[activeIndex].image : props.bannerImg
                    }`,
            }}
        >
            <Container className="themed-container" fluid={false}>
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
