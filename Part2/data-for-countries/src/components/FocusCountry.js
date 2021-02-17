import React from "react";
import Weather from "./Weather";

const FocusCountry = (props) => {
  const country = props.country;
  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages:</h3>
      <ol>
        {country.languages.map((language) => (
          <p key={language.name}>{language.name}</p>
        ))}
      </ol>
      <img src={country.flag} alt={`flag for ${country.name}`}></img>
      <Weather country={props.country} />
    </div>
  );
};

export default FocusCountry;
