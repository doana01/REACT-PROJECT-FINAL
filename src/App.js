import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {

  return (
    <div className="App" >

      <div className="container"></div>

      <Weather defaultCity="Montblanc" />
      <br />
      <Weather defaultCity="San Francisco" />
      <br />
      <Weather defaultCity="Cannes" />
      <br />
      <Weather defaultCity="Vallejo" />
      <br />
      <Weather defaultCity="New York" />
      <br />
      <Weather defaultCity="Paris" />
      <br />
      <Weather defaultCity="El Nido" />
      <br />
      <Weather defaultCity="Tahiti" />
      <br />
      <Weather defaultCity="Lisbon" />
      <br />
      <Weather defaultCity="Antarctica" />

      <footer><a href="https://github.com/doana01/REACT-PROJECT-FINAL" id="link">Open-source</a> coded with love by 🐇  <a href="https://www.linkedin.com/in/mimoolah/" id="link">the busy bunny</a>
      </footer>
      <p><em>".. have a great day human💖 "</em></p>
    </div>

  );
}


