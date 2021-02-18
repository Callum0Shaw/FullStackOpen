import React from "react";
import services from "/home/callum/Documents/FullStackOpen/Part2/phonebook/src/services/persons.js";

const AddNameForm = (props) => {
  const persons = props.persons;
  const personExists = persons.find((person) => person.name === props.name);
  const newPerson = { name: props.name, number: props.number };

  const handleNumberChange = (event) => props.setNewNumber(event.target.value);
  const handleNameChange = (event) => props.setNewName(event.target.value);

  const replaceNumber = () => {
    services
      .updateNumber(personExists.id, newPerson)
      .then(
        props.setPersons(
          persons.map((person) =>
            person.name === props.name ? newPerson : person
          )
        )
      )
      .catch((error) => {
        props.setMessage(`${newPerson.name} has already been deleted!`);
      });
  };

  const createPerson = () => {
    services.create(newPerson).then((response) => {
      props.setPersons(persons.concat(newPerson));
      props.setMessage(`Added ${newPerson.name}`);
      props.setNewName("");
      props.setNewNumber("");
    });
  };

  const addName = (event) => {
    event.preventDefault();
    if (personExists) {
      if (window.confirm("Name already exists. Replace number?")) {
        replaceNumber();
      }
    } else {
      createPerson();
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
