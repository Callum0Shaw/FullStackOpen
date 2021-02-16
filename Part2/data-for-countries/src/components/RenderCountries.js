import React from "react";
import FocusCountry from "./FocusCountry";
import DisplayCountry from "./DisplayCountry";

const RenderCountries = (props) => {
  // set regex search for user filter input
  const regex = new RegExp(`${props.filter}`, "gi");
  // const filteredCountries = props.countries.name.match(regex);

  const filtered = props.countries.filter((country) =>
    country.name.match(regex)
  );
  const length = filtered.length;
  // if filter returns just one country
  if (length === 1) {
    return <FocusCountry country={filtered[0]} />;
  } else if (length < 11 && length > 0) {
    return filtered.map((country) => (
      <DisplayCountry country={country} key={country.name} />
    ));
  } else if (length > 10) {
    return <p>Too many countries to handle, please filer</p>;
  } else {
    return <p>No country found</p>;
  }
};

export default RenderCountries;
