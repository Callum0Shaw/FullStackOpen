import React from "react";

const Search = (props) => {
  const handleSearchChange = (event) => {
    props.setFilter(event.target.value);
  };

  return <input value={props.Filter} onChange={handleSearchChange} />;
};

export default Search;
