import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxCelsiusTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minCelsiusTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function maxFahrenheitTemperature() {
    let fahrenheitTemperature = (props.data.temp.max * 9) / 5 + 32;
    let temperature = Math.round(fahrenheitTemperature);

    return `${temperature}°`;
  }
  function minFahrenheitTemperature() {
    let fahrenheitTemperature = (props.data.temp.min * 9) / 5 + 32;
    let temperature = Math.round(fahrenheitTemperature);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }
  if (props.unit === "celsius") {
    return (
      <div>
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={38} />
        <div className="WeatherForecast-temperature">
          <span className="WeatherForecast-temperature-max">
            {maxCelsiusTemperature()}
          </span>{" "}
          <span className="WeatherForecast-temperature-min">
            {minCelsiusTemperature()}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={38} />
        <div className="WeatherForecast-temperature">
          <span className="WeatherForecast-temperature-max">
            {maxFahrenheitTemperature()}
          </span>{" "}
          <span className="WeatherForecast-temperature-min">
            {minFahrenheitTemperature()}
          </span>
        </div>
      </div>
    );
  }
}
