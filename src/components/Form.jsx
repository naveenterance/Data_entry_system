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
      street: state.street,
      town: state.town,
      postcode: state.postcode,
      visits: state.visits,
    };
    dispatch({ type: "ADD", formData });
    dispatch({ type: "RESET" });
  };
  const incrementVisits = () => {
    const visitCount = parseInt(document.getElementById("visits").value, 10);

    dispatch({ type: "UPDATE_FIELD", field: "visits", value: visitCount + 1 });
  };
  const decrementVisits = () => {
    const visitCount = parseInt(document.getElementById("visits").value, 10);

    visitCount > 0 &&
      dispatch({
        type: "UPDATE_FIELD",
        field: "visits",
        value: visitCount - 1,
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
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
        <input
          type="text"
          name="street"
          value={state.street}
          onChange={handleInputChange}
          placeholder="street"
        />
        <input
          type="text"
          name="town"
          value={state.town}
          onChange={handleInputChange}
          placeholder="town"
        />
        <input
          type="text"
          name="postcode"
          value={state.postcode}
          onChange={handleInputChange}
          placeholder="postcode"
        />

        <input
          id="visits"
          type="text"
          name="visits"
          value={state.visits}
          readOnly
        />
        <div onClick={incrementVisits}>Increment</div>
        <div onClick={decrementVisits}>decrement</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
