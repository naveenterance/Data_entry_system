import React from "react";
import { Contexthook } from "../context/Context";

const View = () => {
  const { state } = Contexthook();

  return (
    <div>
      <h2>View Component</h2>
      <ul>
        {state.entries.map((data, index) => (
          <li key={index}>
            Name: {data.firstName} {data.lastName}, Email: {data.email}, Phone:{" "}
            {data.phone},age: {data.age} ,country: {data.country}, address :{" "}
            {data.street}
            {data.town}
            {data.postcode}
            Visits: {data.visits}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default View;
