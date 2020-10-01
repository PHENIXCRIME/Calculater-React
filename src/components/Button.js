import React, { useState } from "react";
import calculate from "./../Service/index";

function Button({ onClick, children }) {
  const [groupNum1, setGroupNum1] = useState("");
  const [groupNum2, setGroupNum2] = useState("");
  const [operators, setOperators] = useState("");

  const readNumber = (number) => {
    setGroupNum1(groupNum1 + number);
  };
  const handleClickOperators = (operatorsButton) => {
    setOperators(operatorsButton);
    setGroupNum2(groupNum1);
    setGroupNum1(" ");
  };
  return (
    <>
      <div>
        <div>&nbsp;{groupNum1}&nbsp;</div>
      </div>

      <div>
        <button onClick={() => readNumber("1")}>1</button>
        <button onClick={() => readNumber("2")}>2</button>
        <button onClick={() => readNumber("3")}>3</button>
        <button onClick={() => handleClickOperators("+")}>+</button>
      </div>
      <div>
        <button onClick={() => readNumber("4")}>4</button>
        <button onClick={() => readNumber("5")}>5</button>
        <button onClick={() => readNumber("6")}>6</button>
        <button onClick={() => handleClickOperators("-")}>-</button>
      </div>
      <div>
        <button onClick={() => readNumber("7")}>7</button>
        <button onClick={() => readNumber("8")}>8</button>
        <button onClick={() => readNumber("9")}>9</button>
        <button onClick={() => handleClickOperators("*")}>*</button>
      </div>
      <div>
        <button
          onClick={() =>
            calculate(setGroupNum1, groupNum1, operators, groupNum2)
          }
        >
          =
        </button>
        <button onClick={() => readNumber("0")}>0</button>
        <button onClick={() => handleClickOperators("/")}>/</button>
      </div>
    </>
  );
}

export default Button;
