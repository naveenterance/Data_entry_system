import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { propertyNames } from "../Constants";

import { ContextProvider, Contexthook } from "../context/Context";

const MockChild = () => {
  const { state, dispatch } = Contexthook();

  const handleUpdateField = () => {
    dispatch({ type: "UPDATE_FIELD", field: "firstName", value: "John" });
    dispatch({ type: "UPDATE_FIELD", field: "lastName", value: "Brenann" });
    dispatch({ type: "UPDATE_FIELD", field: "email", value: "jb@gmail.com" });
    dispatch({ type: "UPDATE_FIELD", field: "phone", value: "12345678" });
    dispatch({ type: "UPDATE_FIELD", field: "country", value: "India" });
    dispatch({ type: "UPDATE_FIELD", field: "age", value: "25" });
    dispatch({ type: "UPDATE_FIELD", field: "street", value: "st1" });
    dispatch({ type: "UPDATE_FIELD", field: "town", value: "tw1" });
    dispatch({ type: "UPDATE_FIELD", field: "postcode", value: "1234" });
    dispatch({ type: "UPDATE_FIELD", field: "visits", value: "34" });
  };

  return (
    <div>
      {propertyNames.map((propertyName) => (
        <span key={propertyName} data-testid={propertyName}>
          {state[propertyName]}
        </span>
      ))}
      <button data-testid="submit" onClick={handleUpdateField}>
        Submit
      </button>
    </div>
  );
};

describe("Context Component", () => {
  it("1--Context component renders without crashing ", () => {
    const { container } = render(
      <ContextProvider>
        <MockChild />
      </ContextProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it("2--Context state is initially empty", () => {
    const { getByTestId } = render(
      <ContextProvider>
        <MockChild />
      </ContextProvider>
    );

    propertyNames.forEach((testId) => {
      expect(getByTestId(testId)).toHaveTextContent(
        testId === "visits" ? "0" : ""
      );
    });
  });

  it("3--Context state updates when dispatching UPDATE_FIELD action", () => {
    const { getByTestId } = render(
      <ContextProvider>
        <MockChild />
      </ContextProvider>
    );

    fireEvent.click(getByTestId("submit"));

    const testIdValuePairs = [
      { testId: "firstName", value: "John" },
      { testId: "lastName", value: "Brenann" },
      { testId: "email", value: "jb@gmail.com" },
      { testId: "phone", value: "12345678" },
      { testId: "country", value: "India" },
      { testId: "age", value: "25" },
      { testId: "street", value: "st1" },
      { testId: "town", value: "tw1" },
      { testId: "postcode", value: "1234" },
      { testId: "visits", value: "34" },
    ];

    testIdValuePairs.forEach(({ testId, value }) => {
      expect(getByTestId(testId)).toHaveTextContent(value);
    });
  });
});
