import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error, something is wrong');
    }
  };

  const handleClear = () => {
    setDisplayValue('');
  };

  return (
    <div className="calculator">
      <input type="text" value={displayValue} readOnly />
      <div>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>+</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('+')}>-</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>*</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('/')}>=</button>
        <button onClick={() => handleButtonClick('=')}>/</button>
      </div>
      <div>
        <button className="clear" onClick={() => handleClear()}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;