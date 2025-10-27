import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function formatDay() {
    let date = new Date(props.data.time * 1000);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  }

  return (
    <div className="col">
      <div className="WeatherForecastDay">{formatDay()}</div>
      <WeatherIcon code={props.data.condition.icon} size={30} />
      <div className="WeatherForecastTemperature">
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
        <span className="WeatherForecast-temperature-max ms-2">
          {maxTemperature()}
        </span>
      </div>
    </div>
  );
}
