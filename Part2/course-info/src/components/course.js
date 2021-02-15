import React from "react";

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <Total course={props.course} />
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

export default Course;
