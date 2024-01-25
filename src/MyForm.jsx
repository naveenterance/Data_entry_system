import React, { useReducer, createContext, useContext } from "react";

// Create a context
const MyFormContext = createContext();

// Define the initial state and reducer function
const initialState = {
  name: "",
  email: "",
  submittedData: [],
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
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

const MyFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <MyFormContext.Provider value={{ state, dispatch }}>
      {children}
    </MyFormContext.Provider>
  );
};

const useFormContext = () => {
  return useContext(MyFormContext);
};

const MyForm = (props) => {
  const { state, dispatch } = useFormContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  // Event handler for form submission
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
          type="name"
          name="email"
          value={state.email}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export { MyFormProvider, useFormContext, MyForm };
