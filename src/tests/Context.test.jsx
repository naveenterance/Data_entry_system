import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ContextProvider, Contexthook } from "../context/Context";

const MockChild = () => {
  const { state, dispatch } = Contexthook();

  const handleUpdateField = () => {
    dispatch({ type: "UPDATE_FIELD", field: "firstName", value: "John" });
    dispatch({ type: "UPDATE_FIELD", field: "lastName", value: "Brenann" });
    dispatch({ type: "UPDATE_FIELD", field: "email", value: "jb@gmail.com" });
    dispatch({ type: "UPDATE_FIELD", field: "phone", value: "12345678" });
  };

  return (
    <div>
      <span data-testid="firstName">{state.firstName}</span>
      <span data-testid="lastName">{state.lastName}</span>
      <span data-testid="email">{state.email}</span>
      <span data-testid="phone">{state.phone}</span>
      <button data-testid="submit" onClick={handleUpdateField}>
        Submit
      </button>
    </div>
  );
};

describe("Context", () => {
  it("renders without crashing ", () => {
    const { container } = render(
      <ContextProvider>
        <MockChild />
      </ContextProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it("updates context state when dispatching UPDATE_FIELD action", () => {
    const { getByTestId } = render(
      <ContextProvider>
        <MockChild />
      </ContextProvider>
    );

    expect(getByTestId("firstName")).toHaveTextContent("");
    expect(getByTestId("lastName")).toHaveTextContent("");
    expect(getByTestId("email")).toHaveTextContent("");
    expect(getByTestId("phone")).toHaveTextContent("");

    fireEvent.click(getByTestId("submit"));

    expect(getByTestId("firstName")).toHaveTextContent("John");
    expect(getByTestId("lastName")).toHaveTextContent("Brenann");
    expect(getByTestId("email")).toHaveTextContent("jb@gmail.com");
    expect(getByTestId("phone")).toHaveTextContent("12345678");
    const phone = getByTestId("phone").textContent;
    expect(typeof phone).toBe("string");
    expect(/^[0-9]+$/.test(phone)).toBe(true);
    const email = getByTestId("email").textContent;
    expect(typeof email).toBe("string");
    expect(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)).toBe(true);
  });
});
