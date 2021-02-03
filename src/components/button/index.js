import React from "react";
import "./index.css";

function Index(props) {
  return (
    <div className={props.theme === "light" ? "cal-button" : "cal-button-dark"}>
      <input
        type="button"
        onClick={props.handleclick}
        value={props.name}
      ></input>
    </div>
  );
}

export default Index;
