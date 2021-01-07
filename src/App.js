import React from "react";
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <Weather defaultCity="San Francisco" />

      <footer><a href="https://github.com/doana01/REACT-FINAL-APP" id="link">Open-source</a> coded by 🐇  <a href="https://www.linkedin.com/in/mimoolah/" id="link">Doana Ruhlmann</a>
      </footer>
    </div>

  );
}

export default App
