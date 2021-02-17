import React from "react";

const DisplayWeather = (props) => {
  const weather = props.weather;
  return (
    <div>
      {weather.length !== 0 && (
        <>
          <p>Weather: {weather.weather[0].main}</p>
          <p>Temperature: {weather.main.temp}</p>
          <p>Wind: {weather.wind.speed}</p>
        </>
      )}
    </div>
  );
};

export default DisplayWeather;
