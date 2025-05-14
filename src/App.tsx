import React from "react";
import "./App.css";
import Greeting from "./Greeting";
import Counter from "./Counter";

function App() {
  /*const getName = (): string => {
    return prompt("Give me Your name") || "Guest";
  };

  const name = getName();*/
  return (
    <div className="app">
      <Greeting name="Zohra" />
      <Counter />
    </div>
  );
}

export default App;
