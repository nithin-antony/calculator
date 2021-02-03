import React, { useState } from "react";
import CalcButton from "../button";
import Result from "../result";

import "./index.css";

function Index() {
  const [screenValue, setScreenValue] = useState("0");
  const [operandONE, setOperandONE] = useState(null);
  const [hasOperator, setHasOperator] = useState(false);
  const [operator, setOperator] = useState("");
  const [sMode, setSMode] = useState(false);
  const [theme, setTheme] = useState("light");

  function onNumberClick(val) {
    if (!operandONE) {
      screenValue === "0"
        ? setScreenValue(String(val))
        : setScreenValue(screenValue + val);
    } else {
      !hasOperator && setScreenValue(val);
      setHasOperator(true);
      hasOperator && setScreenValue(screenValue + val);
    }
  }

  function onClear() {
    setScreenValue("0");
    setHasOperator(false);
    setOperandONE(null);
  }

  function onOperatorClick(mode) {
    let specialOperation = ["+-", "x^", "√"];
    if (specialOperation.find((value) => value === mode)) {
      calculation(mode, Number(screenValue));
    } else {
      !operandONE && setOperandONE(Number(screenValue));
      setOperator(mode);
      if (operandONE && mode) {
        calculation(mode, Number(screenValue));
      }
    }
  }

  function onGiveResult() {
    operator && calculation(operator, Number(screenValue));
    setOperator(null);
  }

  function calculation(operation, operandTWO) {
    let operationResult;
    if (hasOperator) {
      switch (operation) {
        case "+":
          operationResult = operandONE + operandTWO;
          setScreenValue(String(operationResult));
          setOperandONE(operationResult);
          setHasOperator(null);
          break;
        case "-":
          operationResult = operandONE - operandTWO;
          setScreenValue(String(operationResult));
          setOperandONE(operationResult);
          setHasOperator(null);
          break;
        case "/":
          operationResult = operandONE / operandTWO;
          setScreenValue(String(operationResult));
          setOperandONE(operationResult);
          setHasOperator(null);
          break;
        case "*":
          operationResult = operandONE * operandTWO;
          setScreenValue(String(operationResult));
          setOperandONE(operationResult);
          setHasOperator(null);
          break;
        default:
          break;
      }
    } else {
      switch (operation) {
        case "+-":
          if (operandTWO > 0) {
            operationResult = -Math.abs(operandTWO);
          } else {
            operationResult = Math.abs(operandTWO);
          }
          setScreenValue(String(operationResult));
          setHasOperator(null);
          break;
        case "x^":
          operationResult = Math.pow(operandTWO, 2);
          setScreenValue(String(operationResult));
          setHasOperator(null);
          break;
        case "√":
          operationResult = Math.sqrt(operandTWO);
          setScreenValue(String(operationResult));
          setOperandONE(operationResult);
          setHasOperator(null);
          break;
        default:
          break;
      }
    }
  }

  function onActivateSMode() {
    setSMode(!sMode);
  }

  function toggleTheme(value) {
    setTheme(value);
    if (value === "dark") {
      document.body.style.background = "#000";
    } else {
      document.body.style.background = "#fff";
    }
  }

  return (
    <div className="calculator-view">
      <Result result={screenValue} theme={theme} />
      <div className="button-row">
        <CalcButton
          name={1}
          theme={theme}
          handleclick={() => onNumberClick("1")}
        />
        <CalcButton
          name={2}
          theme={theme}
          handleclick={() => onNumberClick("2")}
        />
        <CalcButton
          name={3}
          theme={theme}
          handleclick={() => onNumberClick("3")}
        />
        <CalcButton
          name={"+"}
          theme={theme}
          handleclick={() => onOperatorClick("+")}
        />
      </div>
      <div className="button-row">
        <CalcButton
          name={4}
          theme={theme}
          handleclick={() => onNumberClick("4")}
        />
        <CalcButton
          name={5}
          theme={theme}
          handleclick={() => onNumberClick("5")}
        />
        <CalcButton
          name={6}
          theme={theme}
          handleclick={() => onNumberClick("6")}
        />
        <CalcButton
          name={"-"}
          theme={theme}
          handleclick={() => onOperatorClick("-")}
        />
      </div>
      <div className="button-row">
        <CalcButton
          name={7}
          theme={theme}
          handleclick={() => onNumberClick("7")}
        />
        <CalcButton
          name={8}
          theme={theme}
          handleclick={() => onNumberClick("8")}
        />
        <CalcButton
          name={9}
          theme={theme}
          handleclick={() => onNumberClick("9")}
        />
        <CalcButton
          name={"x"}
          theme={theme}
          handleclick={() => onOperatorClick("*")}
        />
      </div>
      <div className="button-row">
        <CalcButton
          name={"clear"}
          theme={theme}
          handleclick={() => onClear()}
        />
        <CalcButton
          name={0}
          theme={theme}
          handleclick={() => onNumberClick("0")}
        />
        <CalcButton
          name={"="}
          theme={theme}
          handleclick={() => onGiveResult()}
        />
        <CalcButton
          name={"/"}
          theme={theme}
          handleclick={() => onOperatorClick("/")}
        />
      </div>
      <div className="button-row">
        <CalcButton
          name={"S Mode"}
          theme={theme}
          handleclick={() => onActivateSMode()}
        />
        <div style={{ display: sMode ? "flex" : "none" }}>
          <CalcButton
            name={"+/-"}
            theme={theme}
            handleclick={() => onOperatorClick("+-")}
          />
          <CalcButton
            name={"x^"}
            theme={theme}
            handleclick={() => onOperatorClick("x^")}
          />
          <CalcButton
            name={"√"}
            theme={theme}
            handleclick={() => onOperatorClick("√")}
          />
        </div>
      </div>
      <div className="button-row">
        <CalcButton
          name={"Light Mode"}
          theme={theme}
          handleclick={() => toggleTheme("light")}
        />
        <CalcButton
          name={"Dark Mode"}
          theme={theme}
          handleclick={() => toggleTheme("dark")}
        />
      </div>
    </div>
  );
}

export default Index;
