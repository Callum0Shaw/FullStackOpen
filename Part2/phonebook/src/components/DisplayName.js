import React from "react";

const DisplayName = (props) => {
  const regex = new RegExp(`${props.filter}`, "i");
  if (props.person.name.match(regex)) {
    return (
      <p>
        {props.person.name} {props.person.number}
      </p>
    );
  } else {
    return "";
  }
};

export default DisplayName;
