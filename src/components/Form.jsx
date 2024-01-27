import React from "react";
import { Contexthook } from "../context/Context";

const Form = () => {
  const { state, dispatch } = Contexthook();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name == "phone") {
      if (/^\d{0,15}$/.test(value)) {
        dispatch({ type: "UPDATE_FIELD", field: name, value });
      }
    } else if (name == "age") {
      if (/^\d{0,2}$/.test(value)) {
        dispatch({ type: "UPDATE_FIELD", field: name, value });
      }
    } else {
      dispatch({ type: "UPDATE_FIELD", field: name, value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      phone: state.phone,
      country: state.country,
      age: state.age,
    };
    dispatch({ type: "ADD", formData });
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleInputChange}
          placeholder="firstName"
        />
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleInputChange}
          placeholder="lastName"
        />

        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleInputChange}
          placeholder="email"
        />
        <input
          type="text"
          name="phone"
          value={state.phone}
          onChange={handleInputChange}
          placeholder="phone"
        />
        <select name="country" id="country" onChange={handleInputChange}>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="Europa">Europa</option>
          <option value="japan">japan</option>
        </select>
        <input
          type="text"
          name="age"
          value={state.age}
          onChange={handleInputChange}
          placeholder="age"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
