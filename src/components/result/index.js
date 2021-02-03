import React from "react";
import "./index.css";

function Result(props) {
  return (
    <div
      className={props.theme === "light" ? "result-view" : "result-view-dark"}
    >
      {props.result}
    </div>
  );
}

export default Result;
