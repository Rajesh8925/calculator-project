import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import './App.css';
import './components/Style.css';
import { evaluate } from 'mathjs';

export default function App() {
  const [display, setDisplay] = useState("0");

  const handleClick = (val) => {
    if (val === "AC") return setDisplay("0");
    if (val === "C") return setDisplay(d => d.length > 1 ? d.slice(0, -1) : "0");
    if (val === "=") {
      try {
        const result = evaluate(display);
        setDisplay(result.toString());
      } catch {
        setDisplay("Error");
      }
      return;
    }
    if (val === ".") {
      const last = display.split(/[\+\-\*\/%]/).pop();
      if (last.includes(".")) return;
    }
    setDisplay(d => d === "0" && !isNaN(val) ? val : d + val);
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key;

      if (!isNaN(key) || "+-*/%.".includes(key)) {
        handleClick(key);
      } else if (key === "Enter") {
        handleClick("=");
      } else if (key === "Backspace") {
        handleClick("C");
      } else if (key.toLowerCase() === "c") {
        handleClick("AC");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [display]);

  return (
  <div className="App">
    <Button send={handleClick} display={display} />
  </div>
);

}
