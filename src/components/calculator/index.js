import React, { useState } from "react";
import CalcButton from "../button";
import Result from "../result";

import "./index.css";

function Index() {
  const [result, setResult] = useState(0);

  function onNumberClick(val) {
    setResult(val);
  }

  function onClear() {
    setResult(0);
  }

  function onOperatorClick(mode) {
  
  }

  return (
    <div className="calculator-view">
      <div className="result-view">
        <Result result={result} />
      </div>
      <div className="button-row">
        <CalcButton name={1} handleclick={() => onNumberClick(1)} />
        <CalcButton name={2} handleclick={() => onNumberClick(2)} />
        <CalcButton name={3} handleclick={() => onNumberClick(3)} />
        <CalcButton name={"+"} handleclick={() => onOperatorClick("+")} />
      </div>
      <div className="button-row">
        <CalcButton name={4} handleclick={() => onNumberClick(4)} />
        <CalcButton name={5} handleclick={() => onNumberClick(5)} />
        <CalcButton name={6} handleclick={() => onNumberClick(6)} />
        <CalcButton name={"-"} handleclick={() => onOperatorClick("-")} />
      </div>
      <div className="button-row">
        <CalcButton name={7} handleclick={() => onNumberClick(7)} />
        <CalcButton name={8} handleclick={() => onNumberClick(8)} />
        <CalcButton name={9} handleclick={() => onNumberClick(9)} />
        <CalcButton name={"x"} handleclick={() => onOperatorClick("*")} />
      </div>
      <div className="button-row">
        <CalcButton name={"clear"} handleclick={() => onClear()} />
        <CalcButton name={0} />
        <CalcButton name={"="} />
        <CalcButton name={"/"} handleclick={() => onOperatorClick("/")} />
      </div>
      <div className="button-row">
        <CalcButton name={"Scientific Mode"} />
        <CalcButton name={"+/-"} />
        <CalcButton name={"x^"} />
        <CalcButton name={"√"} />
      </div>
    </div>
  );
}

export default Index;
