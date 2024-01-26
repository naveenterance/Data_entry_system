import React from "react";
import { Contexthook } from "./Context";

const View = () => {
  const { state } = Contexthook();

  return (
    <div>
      <h2>View Component</h2>
      <ul>
        {state.submittedData.map((data, index) => (
          <li key={index}>
            Name: {data.name}, Email: {data.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default View;
