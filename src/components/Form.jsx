import React from "react";
import { Contexthook } from "../context/Context";
import { countries } from "../Constants";
import "./Style.css";

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

  const handleReset = () => {
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
    <form className="flex-col" onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <label className="label" htmlFor="firstName">
          First Name
        </label>
        <input
          required
          type="text"
          id="firstName"
          name="firstName"
          value={state.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          className="input"
        />
      </div>

      <div className="flex justify-between">
        <label className="label" htmlFor="lastName">
          Last Name
        </label>
        <input
          required
          type="text"
          id="lastName"
          name="lastName"
          value={state.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          className="input"
        />
      </div>

      <div className="flex justify-between">
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          value={state.email}
          onChange={handleInputChange}
          placeholder="email"
          className="input"
        />
      </div>

      <div className="flex justify-between">
        <label className="label" htmlFor="phone">
          Phone
        </label>
        <input
          required
          type="text"
          id="phone"
          name="phone"
          value={state.phone}
          onChange={handleInputChange}
          placeholder="phone"
          className="input"
        />
      </div>

      <div className="flex justify-between">
        <label className="label" htmlFor="country">
          Country
        </label>
        <select
          id="country"
          name="country"
          onChange={handleInputChange}
          placeholder="country"
          className="input"
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between">
        <label className="label" htmlFor="age">
          Age
        </label>
        <input
          required
          type="text"
          id="age"
          name="age"
          value={state.age}
          onChange={handleInputChange}
          placeholder="age"
          className="input"
        />
      </div>
      <div className="flex justify-between">
        <label className="label" htmlFor="street">
          Street
        </label>
        <input
          required
          type="text"
          id="street"
          name="street"
          value={state.street}
          onChange={handleInputChange}
          placeholder="street"
          className="input"
        />
      </div>
      <div className="flex justify-between">
        <label className="label" htmlFor="town">
          Tow
        </label>
        <input
          required
          type="text"
          id="town"
          name="town"
          value={state.town}
          onChange={handleInputChange}
          placeholder="town"
          className="input"
        />
      </div>
      <div className="flex justify-between">
        <label className="label" htmlFor="postcode">
          Postcode
        </label>
        <input
          required
          type="text"
          id="postcode"
          name="postcode"
          value={state.postcode}
          onChange={handleInputChange}
          placeholder="postcode"
          className="input"
        />
      </div>
      <div className="flex justify-between  my-4">
        <label className="label" htmlFor="visits">
          Visits
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16  font-bold text-5xl mr-2 hover:text-red-500 p-2"
          onClick={decrementVisits}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <input
          required
          data-testid="visits"
          id="visits"
          type="hidden"
          name="visits"
          value={state.visits}
          placeholder="visits"
          readOnly
          disabled
        />
        <p className="font-bold text-5xl  my-auto">{state.visits}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16  font-bold text-5xl mr-2 hover:text-green-500 p-2"
          onClick={incrementVisits}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-green-500 p-2 rounded-lg w-1/2 m-4 text-slate-50   hover:outline"
          type="submit"
        >
          Submit
        </button>
        <button
          className="bg-red-500 p-2 rounded-lg w-1/2 m-4 text-slate-50   hover:outline"
          onClick={handleReset}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default Form;
