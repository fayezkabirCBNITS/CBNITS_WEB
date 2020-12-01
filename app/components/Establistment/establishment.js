import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from "reactstrap";
import Axios from "../../service/axios-config";

import arrowLeft from "./../../images/black-arrow-left.png";
import arrowRight from "./../../images/black-arrow-right.png";

import "./establishment.css";

const Establishment = (props) => {
  const [progressPoint, setProgressPoint] = useState(2013);
  const [milestone, setMileStone] = useState([]);

  useEffect(() => {
    _getMilestone();
  }, []);

  const _getMilestone = async () => {
    try {
      let res = await Axios.post("/getPageWiseDatabyCategory", {
        category: "Milestone",
        page: "About Us",
      });
      console.log("res-- Milestone --->", res);
      if (res.status == 200) {
        setMileStone(res.data.data);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };

  const handelNext = (data) => {
    let currentProgressPoint = progressPoint;
    let completedProgressPoint = parseInt(currentProgressPoint) + parseInt(1);
    if (completedProgressPoint <= 2020) {
      setProgressPoint(completedProgressPoint);
    }
  };
  const handelPrevious = (data) => {
    let currentProgressPoint = progressPoint;
    let completedProgressPoint = parseInt(currentProgressPoint) - parseInt(1);
    if (completedProgressPoint >= 2013) {
      setProgressPoint(completedProgressPoint);
    }
  };
  return (
    <div className="establishment">
      {/* {console.log(progressPoing)} */}
      <Container className="themed-container" fluid={false}>
        <div className="text-center establish">
          <h4>Established 2014 in Cbnits has been </h4>
          <h4>
            offering{" "}
            <span className="skycolor">
              world-class information technology.
            </span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.{" "}
          </p>
        </div>

        <div className="wrapper">
          <div className="progressSection">
            <ol className="ProgressBar">
              {milestone && milestone.length > 0
                ? milestone.map((item, key) => (
                    <li
                      className={
                        progressPoint >= +item.name
                          ? "ProgressBar-step is-current"
                          : "ProgressBar-step"
                      }
                      key={key}
                    >
                      <span className="ProgressBar-stepLabel">{item.name}</span>
                      <svg className="ProgressBar-icon">
                        <use href="#checkmark-bold" />
                      </svg>
                    </li>
                  ))
                : null}
              {/* <li className={progressPoint >= 1 ?"ProgressBar-step is-current":"ProgressBar-step"}>
                            <span className="ProgressBar-stepLabel">2014</span>
                            <svg className="ProgressBar-icon"><use href="#checkmark-bold"/></svg>                            
                        </li>
                        <li className={progressPoint >= 2 ?"ProgressBar-step is-current":"ProgressBar-step"}>
                            <span className="ProgressBar-stepLabel">2015</span>
                            <svg className="ProgressBar-icon"><use href="#checkmark-bold"/></svg>                            
                        </li>
                        <li className={progressPoint >= 3 ?"ProgressBar-step is-current":"ProgressBar-step"}>
                            <span className="ProgressBar-stepLabel">2016</span>
                            <svg className="ProgressBar-icon"><use href="#checkmark-bold"/></svg>                            
                        </li>
                        <li className={progressPoint >= 4 ?"ProgressBar-step is-current":"ProgressBar-step"}>
                            <span className="ProgressBar-stepLabel">2017</span>
                            <svg className="ProgressBar-icon"><use href="#checkmark-bold"/></svg>                            
                        </li>
                        <li className={progressPoint >= 5 ?"ProgressBar-step is-current":"ProgressBar-step"}>
                            <span className="ProgressBar-stepLabel">2018</span>
                            <svg className="ProgressBar-icon"><use href="#checkmark-bold"/></svg>                            
                        </li>
                        <li className={progressPoint >= 6 ?"ProgressBar-step is-current":"ProgressBar-step"}>
                            <span className="ProgressBar-stepLabel">2019</span>
                            <svg className="ProgressBar-icon"><use href="#checkmark-bold"/></svg>                            
                        </li>
                        <li className={progressPoint >= 7 ?"ProgressBar-step is-current":"ProgressBar-step"}>
                            <span className="ProgressBar-stepLabel">2020</span>
                            <svg className="ProgressBar-icon"><use href="#checkmark-bold"/></svg>                          
                        </li> */}
            </ol>

            <div className="npButton">
              <button onClick={handelPrevious} id="previous">
                <img src={arrowLeft} alt="next" />
              </button>
              <button onClick={handelNext} id="advance">
                <img src={arrowRight} alt="next" />
              </button>
            </div>
          </div>

          <div className="infoBox">
            {milestone && milestone.length > 0
              ? milestone.map((item, key) => {
                  if (item.name == progressPoint) {
                    console.log("heyyy");
                    return (
                      <>
                        <div className="infoYear">
                          <h3>{item.name}</h3>
                        </div>
                        <div className="infoContent">
                          <p>
                            <b>{item.description[0]}</b>
                          </p>
                          <p>
                            <em>{item.description[1]}</em>
                          </p>
                          <p>{item.description[1]}</p>
                        </div>
                      </>
                    );
                  }
                })
              : null}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Establishment;
