import React, { createContext, useContext, useReducer } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    name: "",
    email: "",
    submittedData: [],
  };

  const reducer = (state, action) => {
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

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const Contexthook = () => {
  return useContext(Context);
};

export default ContextProvider;
