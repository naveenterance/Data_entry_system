import React, { createContext, useContext, useReducer } from "react";
import { propertyNames } from "../Constants";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = {
    ...Object.fromEntries(propertyNames.map((name) => [name, ""])),
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
          ...Object.fromEntries(propertyNames.map((name) => [name, ""])),
          visits: "0",
        };
      case "ADD":
        return {
          ...state,
          entries: [...state.entries, action.formData],
        };
      case "DELETE":
        return {
          ...state,
          entries: state.entries.filter(
            (entry) => entry.email !== action.email
          ),
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
