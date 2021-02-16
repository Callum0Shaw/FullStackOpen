import React from "react";

const AddNameForm = (props) => {
  const handleNumberChange = (event) => props.setNewNumber(event.target.value);
  const handleNameChange = (event) => props.setNewName(event.target.value);

  const addName = (event) => {
    event.preventDefault();
    if (props.persons.some((person) => person.name === props.name)) {
      alert(`${props.name} has already been added to phonebook`);
    } else {
      props.setPersons(
        props.persons.concat({ name: props.name, number: props.number })
      );
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
