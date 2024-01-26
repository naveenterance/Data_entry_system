import React from "react";
import { Contexthook } from "./Context";

const Forma = () => {
  const { state, dispatch } = Contexthook();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name: state.name, email: state.email };
    dispatch({ type: "ADD", formData });
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleInputChange}
          placeholder="name"
        />

        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleInputChange}
          placeholder="email"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forma;
