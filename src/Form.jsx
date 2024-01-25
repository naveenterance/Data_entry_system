import React, { useReducer, createContext, useContext } from "react";

const initialState = {
  name: "",
  email: "",
  submittedData: [],
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return { ...state, name: "", email: "" };
    case "ADD":
      return {
        ...state,
        submittedData: [...state.submittedData, action.formData],
      };
    default:
      return state;
  }
};

const Form = (props) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "INPUT_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { name: state.name, email: state.email };
    dispatch({ type: "ADD", formData });
    dispatch({ type: "RESET" });

    props.setEntries([...state.submittedData, formData]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="email"
          value={state.email}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
