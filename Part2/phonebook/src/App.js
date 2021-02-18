import React, { useState, useEffect } from "react";
import DisplayName from "./components/DisplayName";
import AddNameForm from "./components/AddNameForm";
import FilterNames from "./components/FilterNames";
import Notification from "./components/Notification";
import axios from "axios";
import service from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    service.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <div>
        Filter:
        <FilterNames newFilter={newFilter} setNewFilter={setNewFilter} />
      </div>
      <h2>Add New</h2>
      <AddNameForm
        name={newName}
        number={newNumber}
        persons={persons}
        setMessage={setMessage}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      {persons.map((person) => (
        <DisplayName
          key={person.name}
          person={person}
          filter={newFilter}
          persons={persons}
          setPersons={setPersons}
        />
      ))}
    </div>
  );
};

export default App;
