import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import FunctionButton from './components/ButtonComponents/FunctionButton.js';


const App = () => {
  return (
    <div className="mainCalcContainer">
      <h3>Welcome to React Calculator</h3>

      {/* Display */}
      <CalculatorDisplay text="0" buttonStyle="calcDisplay" />

      {/* Numbers container */}
      <div className="numContainer">
        {/* Clear */}
        <ActionButton text="Clear" buttonStyle="actionButton"/>

        {/* 7 8 9 */}
        <NumberButton text="7" buttonStyle="numButton"/>
        <NumberButton text="8" buttonStyle="numButton"/>
        <NumberButton text="9" buttonStyle="numButton"/>

        {/* 4 5 6 */}
        <NumberButton text="4" buttonStyle="numButton"/>
        <NumberButton text="5" buttonStyle="numButton"/>
        <NumberButton text="6" buttonStyle="numButton"/>

        {/* 1 2 3 */}
        <NumberButton text="1" buttonStyle="numButton"/>
        <NumberButton text="2" buttonStyle="numButton"/>
        <NumberButton text="3" buttonStyle="numButton"/>

        {/* 0 */}
        <ActionButton text="0" buttonStyle="actionButton"/>
      </div>

      {/* Function buttons */}
      <div className="funContainer">
        {/*     ÷ x - + =     */}
        <FunctionButton text="÷" buttonStyle="funButton"/>
        <FunctionButton text="x" buttonStyle="funButton"/>
        <FunctionButton text="-" buttonStyle="funButton"/>
        <FunctionButton text="+" buttonStyle="funButton"/>
        <FunctionButton text="=" buttonStyle="funButton"/>
      </div>

    </div>
  );
};

export default App;
