import React from "react";
import ReactDOM from "react-dom";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const Header = ({ course }) => <h1>{course.name}</h1>;

const Total = ({ course }) => {
  const parts = course.parts;

  const sum = parts.reduce((sum, value) => sum + value.exercises, 0);
  return <p>Number of exercises {sum}</p>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  let renderParts = course.parts.map((part) => (
    <Part part={part} key={part.id} />
  ));

  return <div>{renderParts}</div>;
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  const renderCourses = courses.map((course) => (
    <Course course={course} key={course.id} />
  ));

  return <div>{renderCourses}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
