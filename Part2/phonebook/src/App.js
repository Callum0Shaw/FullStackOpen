import React, { useState } from "react";

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

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "0123" },
    { name: "bill Hellas", number: "0123" },
    { name: "steve Hellas", number: "0123" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const handleNameChange = (event) => setNewName(event.target.value);

  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const handleFilterChange = (event) => setNewFilter(event.target.value);

  const addName = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} has already been added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter:
        <input value={newFilter} onChange={handleFilterChange} />
      </div>
      <h2>Add New</h2>
      <form onSubmit={addName}>
        <div>
          <div>
            name: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <DisplayName key={person.name} person={person} filter={newFilter} />
      ))}
    </div>
  );
};

export default App;
