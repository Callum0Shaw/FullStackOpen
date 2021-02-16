import React, { useState } from "react";

const DisplayName = (props) => <p>{props.person.name}</p>;

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const name = { name: newName };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} has already been added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName }));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <DisplayName key={person.name} person={person} />
      ))}
    </div>
  );
};

export default App;
