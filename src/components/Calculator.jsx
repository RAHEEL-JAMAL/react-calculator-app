import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => setInput(input + value);
  const handleClear = () => setInput('');
  const handleDelete = () => setInput(input.slice(0, -1));
  const handleEqual = () => {
    try {
      const expression = input
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/log/g, 'Math.log10')
        .replace(/ln/g, 'Math.log')
        .replace(/√/g, 'Math.sqrt');
      setInput(eval(expression).toString());
    } catch {
      setInput('Error');
    }
  };

  const buttons = [
    '7','8','9','/','sin',
    '4','5','6','*','cos',
    '1','2','3','-','tan',
    '0','.','=','+','log',
    '(',')','√','ln','C',
    'DEL'
  ];

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => {
              if(btn === 'C') handleClear();
              else if(btn === 'DEL') handleDelete();
              else if(btn === '=') handleEqual();
              else handleClick(btn);
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;