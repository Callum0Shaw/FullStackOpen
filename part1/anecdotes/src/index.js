import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const length = props.anecdotes.length;

  // Array of votes, index realtes to anecdotes index
  const createVotes = Array.apply(null, new Array(length)).map(
    Number.prototype.valueOf,
    0
  );

  //  Create state
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(createVotes);

  // Create a random array value
  const random = () => Math.floor(Math.random() * length);

  const copyVotes = () => {
    const tempVotes = [...votes];
    tempVotes[selected] += 1;
    return tempVotes;
  };
  const maxIndex = votes.indexOf(Math.max(...votes));
  return (
    <div>
      <h1>Anecdotes</h1>
      <p>{props.anecdotes[selected]}</p>
      <button onClick={() => setSelected(random())}>Randomise</button>
      <button onClick={() => setVotes(copyVotes())}>Vote</button>
      <p>has {votes[selected]} votes</p>
      <h1>Anecdotes with most votes</h1>
      <p>{props.anecdotes[maxIndex]}</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
