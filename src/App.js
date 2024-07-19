import React, { useState } from "react";
import {
  sortArray,
  sumArray,
  checkIsArraySorted,
  secondLargestNum,
  secondSmallestNumber,
  removeDuplicate,
  leftRotateByOne,
  rotateByDNumber,
  moveZerosToEnd,
  findTotalCountOfFactor,
  primeNumberOrNot,
} from "./utils/dsaFunction";

const functionsMap = {
  sort: sortArray,
  sum: sumArray,
  isSorted: checkIsArraySorted,
  secondLargestNumber: secondLargestNum,
  secondSmallestNumber: secondSmallestNumber,
  removeDuplicate: removeDuplicate,
  leftRotateByOne: leftRotateByOne,
  rotateByDNumber: rotateByDNumber,
  moveZerosToEnd: moveZerosToEnd,
  findTotalCountOfFactor: findTotalCountOfFactor,
  primeNumberOrNot: primeNumberOrNot,
};

function App() {
  const [input, setInput] = useState("");
  const [selectedFunction, setSelectedFunction] = useState("sort");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFunctionChange = (e) => {
    setSelectedFunction(e.target.value);
  };

  const handleButtonClick = () => {
    let parsedInput;
    try {
      parsedInput = JSON.parse(input);
    } catch (e) {
      if (!isNaN(input)) {
        parsedInput = Number(input);
      } else {
        setResult("Invalid input");
        return;
      }
    }
    const result = functionsMap[selectedFunction](parsedInput);
    setResult(result);
  };

  return (
    <div className="container">
      <h1>JavaScript Array Operations</h1>
      <div className="array-input">
        <label htmlFor="userInput">Enter Array or Number:</label>
        <input
          type="text"
          id="userInput"
          placeholder="e.g. [1,2,3] or 5"
          value={input}
          onChange={handleInputChange}
        />
      </div>
      <div className="controls">
        <label htmlFor="functionSelect">Select Function:</label>
        <select
          id="functionSelect"
          value={selectedFunction}
          onChange={handleFunctionChange}
        >
          {Object.keys(functionsMap).map((functionName) => (
            <option key={functionName} value={functionName}>
              {capitalizeFirstLetter(functionName)
                .replace(/([A-Z])/g, " $1")
                .trim()}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleButtonClick}>Execute</button>
      <p id="output">{result}</p>
    </div>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default App;
