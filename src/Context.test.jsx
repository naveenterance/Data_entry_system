import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ContextProvider, Contexthook } from "./Context";

const MockChild = () => {
  const { state, dispatch } = Contexthook();

  const handleUpdateField = () => {
    dispatch({ type: "UPDATE_FIELD", field: "firstName", value: "John" });
  };

  return (
    <div>
      <span data-testid="firstName">{state.firstName}</span>
      <button data-testid="submit" onClick={handleUpdateField}>
        Submit
      </button>
    </div>
  );
};

describe("Context", () => {
  it("renders without crashing", () => {
    render(
      <ContextProvider>
        <MockChild />
      </ContextProvider>
    );
  });

  it("updates context state when dispatching UPDATE_FIELD action", () => {
    const { getByTestId } = render(
      <ContextProvider>
        <MockChild />
      </ContextProvider>
    );

    const firstNameElement = getByTestId("firstName");
    expect(firstNameElement).toHaveTextContent("");

    fireEvent.click(getByTestId("submit"));

    expect(firstNameElement).toHaveTextContent("John");
  });
});
