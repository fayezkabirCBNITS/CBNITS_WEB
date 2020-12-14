import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./newsComp.module.css";
import { withRouter } from "react-router-dom";
import moment from "moment";



const NewsComp = props => {
    console.log()
    const gotoArticlePage = data => {
        props.history.push(`/news/article/${data}`)
    }
    return (
        <div className="mt-5">
                        <div

                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.news.newsImageURL
                                    }`,
                            }}
                            className="newsImgBg"
                            onClick={() => gotoArticlePage(props.news._id)}
                        >
                            <p className="newsType">{props.news.newCategory}</p>

                        </div>
                        <div className="newsCopmbtm">
                            <h5>{props.news.metaDescription} </h5>
                            <p>
                                <span className="dateAdded">{moment(`${props.news.added_date}`).format('LLL')}</span> {/*MMMM Do YYYY*/}
                                <abbr className="mx-2">|</abbr>
                                <span className="newsAuthor">{props.news.newsCreatedBy}</span>
                            </p>
                        </div>
        </div>
    )
}

export default withRouter(NewsComp);
