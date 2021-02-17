import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DisplayWeather from "./DisplayWeather";

const Weather = (props) => {
  const [weather, setWeather] = useState([]);
  const capital = props.country.capital;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <DisplayWeather weather={weather} />
    </div>
  );
};

export default Weather;
