import React from 'react';

// Add 'display' to the props here
export default function Button({ send, display }) {
  const buttons = [
    "AC", "C", "/", "*",
    "9", "8", "7", "-",
    "6", "5", "4", "+",
    "3", "2", "1", "%",
    "0", ".", "="
  ];

  const isSymbol = (val) => ["AC", "C", "/", "*", "-", "+", "%", "="].includes(val);
  return (
    <div className="button-container">
      {/* Now you can use display here */}
      <div className="display">
        <h2>{display}</h2>
      </div>
      
      <div className="grid-sec">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => send(btn)}
            className={`button ${isSymbol(btn) ? 'sym' : ''} ${btn === '=' ? 'equal' : ''}`}
          >
            {btn === "C" ? "⌫" : btn}
          </button>
        ))}
      </div>
    </div>
  );
}
