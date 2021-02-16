import React, { useState } from "react";
import DisplayName from "./components/DisplayName";
import AddNameForm from "./components/AddNameForm";
import FilterNames from "./components/FilterNames";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "0123" },
    { name: "bill Hellas", number: "0123" },
    { name: "steve Hellas", number: "0123" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter:
        <FilterNames newFilter={newFilter} setNewFilter={setNewFilter} />
      </div>
      <h2>Add New</h2>
      <AddNameForm
        name={newName}
        number={newNumber}
        persons={persons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      {persons.map((person) => (
        <DisplayName key={person.name} person={person} filter={newFilter} />
      ))}
    </div>
  );
};

export default App;
