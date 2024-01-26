import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Context, { Contexthook } from "./Context";

const MockChild = () => {
  const { state, dispatch } = Contexthook();

  const handleUpdateField = () => {
    dispatch({ type: "UPDATE_FIELD", field: "name", value: "John" });
  };

  return (
    <div>
      <span data-testid="name">{state.name}</span>
      <button data-testid="submit" onClick={handleUpdateField}>
        Update Name
      </button>
    </div>
  );
};

describe("Context", () => {
  it("renders without crashing", () => {
    render(
      <Context>
        <MockChild />
      </Context>
    );
  });

  it("updates context state when dispatching UPDATE_FIELD action", () => {
    const { getByTestId } = render(
      <Context>
        <MockChild />
      </Context>
    );

    const nameElement = getByTestId("name");
    expect(nameElement).toHaveTextContent("");

    fireEvent.click(getByTestId("submit"));

    expect(nameElement).toHaveTextContent("John");
  });
});
