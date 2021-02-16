import React from "react";

const DisplayCountry = (props) => {
  console.log(props);
  return <p>{props.country.name}</p>;
};

export default DisplayCountry;
