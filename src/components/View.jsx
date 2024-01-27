import React from "react";
import { Contexthook } from "../context/Context";

const View = () => {
  const { state } = Contexthook();

  return (
    <div>
      <h2>View Component</h2>
      <ul>
        {state.submittedData.map((data, index) => (
          <li key={index}>
            Name: {data.firstName} {data.lastName}, Email: {data.email}, Phone:{" "}
            {data.phone},age: {data.age} ,country: {data.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default View;
