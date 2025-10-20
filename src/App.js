import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
      </div>

      <footer>
        This project was coded by Gwendolyn Munoz, open-sourced on Github and
        hosted on Netlify
      </footer>
    </div>
  );
}
