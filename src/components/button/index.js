import React from "react";

function Index(props) {
  return (
    <>
      <input type="button" onClick={props.handleclick} value={props.name}></input>
    </>
  );
}

export default Index;
