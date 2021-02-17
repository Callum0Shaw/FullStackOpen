import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import RenderCountries from "./components/RenderCountries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Find Countries</h2>
      <Search value={filter} setFilter={setFilter} />
      <RenderCountries
        filter={filter}
        countries={countries}
        setFilter={setFilter}
      />
    </div>
  );
};

export default App;
