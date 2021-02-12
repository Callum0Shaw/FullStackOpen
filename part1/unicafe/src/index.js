import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = (props) => <h1>{props.text}</h1>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const DisplayValue = (props) => (
  <tr>
    <th>{props.text} </th>
    <th>{props.value}</th>
  </tr>
);

const Statistics = (props) => {
  const total = props.goodValue + props.neutralValue + props.badValue;
  const avg = props.goodValue - props.badValue;
  const perGood = `${(100 / total) * props.goodValue}%`;

  if (total === 0) {
    return <p>No Feedback Given</p>;
  } else {
    return (
      <>
        <Header text={"Statistics"} />
        <table>
          <tbody>
            <DisplayValue text={"Good"} value={props.goodValue} />
            <DisplayValue text={"Neutral"} value={props.neutralValue} />
            <DisplayValue text={"Bad"} value={props.badValue} />
            <DisplayValue text={"Total"} value={total} />
            <DisplayValue text={"Average"} value={avg} />
            <DisplayValue text={"Percentage"} value={perGood} />
          </tbody>
        </table>
      </>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // functions for submitting feedback
  const goodFeedback = () => setGood(good + 1);
  const neutralFeedback = () => setNeutral(neutral + 1);
  const badFeedback = () => setBad(bad + 1);

  return (
    <div>
      <Header text={"Give Feedback"} />
      <Button text={"Good"} handleClick={() => goodFeedback()} />
      <Button text={"Neutral"} handleClick={() => neutralFeedback()} />
      <Button text={"Bad"} handleClick={() => badFeedback()} />
      <Statistics goodValue={good} neutralValue={neutral} badValue={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
