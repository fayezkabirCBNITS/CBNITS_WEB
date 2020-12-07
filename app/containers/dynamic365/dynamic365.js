import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import "./dynamic.css";
import Axios from "../../service/axios-config";
import Banner from "./../../components/TechBanner/techBanner";
import banner365 from "./../../images/banner365.jpg";
import MicroDynamic from "./../../components/MicroDynamic/microDyamic";
import SeamLessMigration from "./../../components/SeamlessMigration/SeamlessMigration";

const blueTxt = "Microsoft";
const whiteText = "Dynamic 365";
const paraFirst = "Map your needs with the Certified Microsoft Dynamic 365 Partner";


const Dynamic365 = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    _getFirstPost();
  }, []);
  const _getFirstPost = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        page: "Dynamic 365",
        category: "Dynamic 365 First Post",
      });
      if (res.status == 200) {
        setData(res.data.data[0]);
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };


  return (
    <div>
      <Banner
       bannerImg={banner365}
       whiteText={whiteText}
       blueTxt={blueTxt}
       paraFirst={paraFirst}
      />
      <div className="sub-header">
        <div className="dyanamicCbnits py-5">
          <Container className="themed-container" fluid={false}>
            <Row className="d-flex align-items-center">
              <Col xl={6} lg={6}>
                <div className="imgSec">
                  <img src={data.image} alt="image" />
                </div>
              </Col>
              <Col xl={6} lg={6}>
                <div className="dyanamicCbnits-Text">
                  <p>
                    <span>Dynamic </span> <span className="skycolor"> 365</span>{" "}
                   {data && data.description && data.description[0]}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="themed-container">
          <MicroDynamic />
        </div>
        <div className="themed-container">
          <SeamLessMigration />
        </div>
        <div className="themed-container">
          <Container fluid={false}>
            <div className="text-center dynamic-bottamBanner">
              <p>
              With CBNITS, take the leap from on-premise to the cloud and make sure you’re supported every step of the way. Our process is flexible and customer-driven, so you get a Dynamics 365 solution that could prove a game-changer for your business.
              </p>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dynamic365;
