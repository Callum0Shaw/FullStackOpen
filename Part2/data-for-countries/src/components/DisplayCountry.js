import React from "react";

const DisplayCountry = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    props.setFilter(props.country.name);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        {props.country.name}
        <button type="submit">Select</button>
      </form>
    </div>
  );
};

export default DisplayCountry;
