import React, { useReducer, createContext, useContext } from "react";

const FormContext = createContext();

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

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

const useFormContext = () => {
  return useContext(FormContext);
};

const Form = (props) => {
  const { state, dispatch } = useFormContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
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

export { FormProvider, useFormContext, Form };
