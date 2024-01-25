import React, { useState, useEffect } from "react";

const View = (props) => {
  return (
    <>
      <h2>Submitted Data:</h2>
      <ul>
        {props.entries.map((data, index) => (
          <li key={index}>{`Name: ${data.name}, Email: ${data.email}`}</li>
        ))}
      </ul>
    </>
  );
};

export default View;
