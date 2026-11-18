// rafce
import React from "react";
import Counter from "./components/Counter";
import ThemeSwap from "./components/ThemeSwap";

const App = () => {
  return (
    <div>
      <h1>Hello react</h1>
      <button className="btn btn-primary">BUTTON EXAMPLE</button>
      <Counter />
      <div className="p-5">
        <ThemeSwap/>
      </div>
    </div>
  );
};

export default App;
