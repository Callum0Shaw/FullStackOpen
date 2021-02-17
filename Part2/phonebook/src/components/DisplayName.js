import React from "react";
import services from "/home/callum/Documents/FullStackOpen/Part2/phonebook/src/services/persons.js";

const DisplayName = (props) => {
  const regex = new RegExp(`${props.filter}`, "i");
  const remove = () => {
    if (window.confirm("Are you sure?")) {
      services.deletePerson(props.person.id).then((response) => {
        props.setPersons(
          props.persons.filter((person) => person.name !== props.person.name)
        );
      });
    }
  };

  if (props.person.name.match(regex)) {
    return (
      <div>
        {props.person.name} {props.person.number}
        <button onClick={remove}>Delete</button>
      </div>
    );
  } else {
    return "";
  }
};

export default DisplayName;
