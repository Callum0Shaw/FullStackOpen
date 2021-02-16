import React from "react";

const FilterNames = (props) => {
  const handleFilterChange = (event) => props.setNewFilter(event.target.value);

  return <input value={props.newFilter} onChange={handleFilterChange} />;
};

export default FilterNames;
