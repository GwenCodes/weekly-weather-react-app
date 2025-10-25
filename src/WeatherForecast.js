import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Mon</div>
          <WeatherIcon code="clear-sky-day" size={30} />
          <div className="WeatherForecastTemperature">
            <span className="WeatherForecast-temperature-min">19</span>
            <span className="WeatherForecast-temperature-max">30</span>
          </div>
        </div>
      </div>
    </div>
  );
}
