import React, { useState, useEffect } from "react";
import DisplayName from "./components/DisplayName";
import AddNameForm from "./components/AddNameForm";
import FilterNames from "./components/FilterNames";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
