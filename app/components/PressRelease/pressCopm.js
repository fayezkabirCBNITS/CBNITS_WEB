import React from "react";
import "./pressComp.module.css";
import { withRouter } from "react-router-dom";
import moment from "moment";

const PressComp = (props) => {
  console.log("Props Here", props.pressRelease);
  const gotoArticlePage = (data) => {
    props.history.push(`/press-release/article/${data}`);
  };
  return (
    <div className="mt-5">
      <div className="newsImgBg">
        <p className="newsType">{props.pressRelease.category}</p>
      </div>
      <div className="newsCopmbtm">
        <h5>{props.pressRelease.metaDescription} </h5>
        <p>
          <span className="dateAdded">
            {moment(`${props.pressRelease.added_date}`).format("LLL")}
          </span>{" "}
          {/*MMMM Do YYYY*/}
          <abbr className="mx-2">|</abbr>
          <span className="newsAuthor">{props.pressRelease.createdBy}</span>
        </p>
      </div>
      <div
        className="newsImgBg"
        onClick={() => gotoArticlePage(props.pressRelease._id)}
      >
        Read More
      </div>
    </div>
  );
};

export default withRouter(PressComp);
