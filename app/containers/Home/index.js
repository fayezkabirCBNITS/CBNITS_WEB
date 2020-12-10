import React, { useState, useEffect, Suspense } from "react";
import "./home.css";
import bannerImg from "../../images/banner.jpg";
import WhatWeDo from "./../../components/WhatWeDo/index";
import Expertise from "./../../components/OurExpertise/expertise";
import Specialised from "./../../components/SpecilalisedDomain/specialisec";
import WhyCbnits from "./../../components/WhyCbnits/whycbnits";
import AboutCbnits from "./../../components/AboutCbnits/aboutCbnits";
import WorkingWithUs from "./../../components/Caroousel/carousel";
import CustomerSay from "./../../components/CustomerSay/customarSay";
import YearsOfExperience from "./../../components/homeExperienceYear/exp"
import BannerCarousel from "./../../components/HomeBannerCarousel/bannnerCarusel"
import Banner from "./../../components/TechBanner/techBanner";

const whiteText = "specialists";
const blueTxt = "We are Startup";
const paraFirst =
  "Having successful track record of bringing 500+ products to life.";
const paraSecond = "Leading the path of innovation!";
import Loader from "react-loader-spinner";
import Axios from "./../../service/axios-config";
import axios from 'axios'

const HomePage = (props) => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const [responseData, setResponseData] = useState();
  const [whatWeDoData, setWhatWeDoData] = useState();
  const [whyCbnitsData, setWhyCbnitsData] = useState();
  const [items, setItems] = useState([]);
  const [specialDomain, setSpecialDomain] = useState([]);

  useEffect(() => {
    // setIsLoaded(true);
    window.scrollTo({ top: 0 });
    getExpertData();
    getWhatWeDoData();
    _getWhyCbnits();
    getItems();
    getSpecialDomain();
  }, [])

  const getExpertData = async () => {
    try {
      // setIsLoaded(true);
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Home",
        category: "Our Expertise",
      });
      if (res.status == 200) {
        setResponseData(res.data.data.reverse());
        // setIsLoaded(false);
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
      // props.setIsLoaded(false);
    }
  };
  const getWhatWeDoData = async () => {
    try {
      // setIsLoaded(true);
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Home",
        category: "What We Do",
      });
      if (res.status == 200) {
        setWhatWeDoData(res.data.data);
        // setIsLoaded(false)
      } else {
        console.log("Something went wrong!");

        // setIsLoaded(false);
      }
    } catch (error) {
      console.log("error---->", error);
      // setIsLoaded(false);
    }
  };

  const _getWhyCbnits = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Home",
        category: "Why CBNITS",
      });
      if (res.status == 200) {
        setWhyCbnitsData(res.data.data.reverse());
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };

  const getItems = async () => {
    try {
      let res = await Axios.post("/getHomePageImagebyCategory", {
        category: "Quotations",
      });
      if (res.status == 200) {
        setItems(res.data.data);
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };

  const getSpecialDomain = () => {
    axios({
      method: "POST",
      url: "https://api.cbnits.com/getHomePageImagebyCategory",
      data: {
        category: "Special Domains",
      },
    })
      .then((res) => {
        if (res) {
          setSpecialDomain(res.data.data);
          // setActiveIndexData(res.data.data[0]);
          // setActiveColor(res.data.data[0].color);
          // setReadmoreLink(res.data.data[0].link);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* {
        isLoaded ? 
        <Loader
        type="ThreeDots"
        color="rgba(0, 191, 255, 0.5)"
        height={"100vh"}
        width={100}
        className="d-flex justify-content-center align-items-center"
        visible={isLoaded}
        />

        :
        <> */}



      {/* <BannerCarousel 
            bannerImg={bannerImg} /> */}
      <Banner
        bannerImg={bannerImg}
        whiteText={whiteText}
        blueTxt={blueTxt}
        paraFirst={paraFirst}
        paraSecond={paraSecond}
      />
      <WhatWeDo whatWeDoData={whatWeDoData} />
      <YearsOfExperience />
      <Expertise responseData={responseData} />
      <Specialised specialDomain={specialDomain} />
      <WhyCbnits whyCbnitsData={whyCbnitsData} />
      <AboutCbnits />
      <WorkingWithUs items={items} />
      <CustomerSay />
      {/* </> */}


      {/* } */}
    </div >
  );
};

export default HomePage;
