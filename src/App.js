import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Button from './components/Button';
import "./components/Style.css";
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [title, setTitle] = useState("0");

  function adding(a) {
    /*******for press equal out******/
    if (a == "=") {
      setTitle((pretitle) => evaluate(pretitle));
    }
    /*****for clear*****/
    else if (a == "C") {
      setTitle((pretitle) => {
        let backspace = pretitle.slice(0, -1);
        if (backspace == "") {
          return "0";
        } else {
          return backspace;
        }
      });
    }
    /*******for all clear******/
    else if (a == "AC") {
      setTitle("0");
    }

    else {
      setTitle((pretitle) => {
        if (pretitle === "0") {
          return a;
        } else {
          return pretitle + a;
        }
      });
    }
  }

  return (
    <div className="App">
      <Title title={title} />
      <Button send={(a) => { adding(a) }} />
    </div>
  );
}

export default App;
