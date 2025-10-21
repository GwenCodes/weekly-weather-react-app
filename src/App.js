import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
      </div>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/GwenCodes">Gwendolyn Munoz</a>, open-sourced
        on Github and hosted on{" "}
        <a href="https://app.netlify.com/teams/gwencodes/projects">Netlify</a>
      </footer>
    </div>
  );
}
