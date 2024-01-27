import React, { createContext, useContext, useReducer } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    age: "",
    street: "",
    town: "",
    postcode: "",
    visits: "0",
    entries: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FIELD":
        return { ...state, [action.field]: action.value };
      case "RESET":
        return {
          ...state,
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          age: "",
          street: "",
          town: "",
          postcode: "",
          visits: "0",
        };
      case "ADD":
        return {
          ...state,
          entries: [...state.entries, action.formData],
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
