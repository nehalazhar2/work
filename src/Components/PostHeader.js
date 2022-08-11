import React from "react";
import { Link } from "react-router-dom";
import "../Assets/PostHeader.css";
export const PostHeader = (props) => {
  return (
    <div className="HeaderBody">
      <div className="container">
        <div className="Post_Title">
          <h4>{props.Title}</h4>
          {props.Category ? (
            <p>
              Home / News / Category
              / {props.Title}
            </p>
          ) : props.Tag ? (
            <p>
              Home / News / Tag /{" "}
              {props.Title}
            </p>
          ) : props.Query ? (
            <p className="Search_Results">
              Home / News / Search
              Results / {props.Title}
            </p>
          ) : (
            <p>
              Home / News /{" "}
              {props.Title}
            </p>
          )}{" "}
        </div>
      </div>
    </div>
  );
};
