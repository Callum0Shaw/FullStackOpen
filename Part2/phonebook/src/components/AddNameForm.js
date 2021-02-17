import React from "react";
import services from "/home/callum/Documents/FullStackOpen/Part2/phonebook/src/services/persons.js";

const AddNameForm = (props) => {
  const persons = props.persons;
  const handleNumberChange = (event) => props.setNewNumber(event.target.value);
  const handleNameChange = (event) => props.setNewName(event.target.value);

  const alreadyExists = () => {
    if (persons.some((person) => person.name === props.name)) {
      return true;
    } else {
      return false;
    }
  };

  const addName = (event) => {
    event.preventDefault();
    if (alreadyExists()) {
      alert(`${props.name} has already been added to phonebook`);
    } else {
      const newPerson = { name: props.name, number: props.number };
      services.create(newPerson).then((response) => {
        props.setPersons(persons.concat(newPerson));
        props.setNewName("");
        props.setNewNumber("");
      });
    }
  };

  return (
    <form onSubmit={addName}>
      <div>
        <div>
          name: <input value={props.name} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={props.number} onChange={handleNumberChange} />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddNameForm;
