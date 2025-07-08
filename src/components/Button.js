import React from 'react';

export default function Button(props) {
  return (
    <div className="button-container">
      <div className="grid-sec">
        <button onClick={() => props.send("AC")} className="sym">AC</button>
        <button onClick={() => props.send("C")} className="sym">⌫</button>
        <button onClick={() => props.send("/")} className="sym">/</button>
        <button onClick={() => props.send("*")} className="sym">*</button>

        <button onClick={() => props.send("9")}>9</button>
        <button onClick={() => props.send("8")}>8</button>
        <button onClick={() => props.send("7")}>7</button>
        <button onClick={() => props.send("-")} className="sym">-</button>

        <button onClick={() => props.send("6")}>6</button>
        <button onClick={() => props.send("5")}>5</button>
        <button onClick={() => props.send("4")}>4</button>
        <button onClick={() => props.send("+")} className="sym">+</button>

        <button onClick={() => props.send("3")}>3</button>
        <button onClick={() => props.send("2")}>2</button>
        <button onClick={() => props.send("1")}>1</button>
        <button onClick={() => props.send("%")} className="sym">%</button>

        <button onClick={() => props.send("0")}>0</button>
        <button onClick={() => props.send(".")}>.</button>
        <button onClick={() => props.send("=")} className="sym equal">=</button>
      </div>
    </div>
  );
}
