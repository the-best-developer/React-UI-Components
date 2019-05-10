import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div className={props.buttonStyle}>
            <span>{props.text}</span>
        </div>
    );
  };
  
export default CalculatorDisplay;