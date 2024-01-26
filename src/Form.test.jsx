import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { FormProvider, useFormContext, Form } from "./Form";

const TestComponent = () => {
  const { state } = useFormContext();
  return (
    <div>
      <div data-testid="name">{state.name}</div>
      <div data-testid="email">{state.email}</div>
    </div>
  );
};

test("Testing forms now", () => {
  const setEntriesMock = jest.fn();

  render(
    <FormProvider>
      <Form setEntries={setEntriesMock} />

      <TestComponent />
    </FormProvider>
  );

  const nameInput = screen.getByPlaceholderText(/name/i);
  const emailInput = screen.getByPlaceholderText(/email/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  fireEvent.change(nameInput, { target: { value: "John" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });

  expect(screen.getByTestId("name").textContent).toBe("John");
  expect(screen.getByTestId("email").textContent).toBe("john@example.com");

  fireEvent.click(submitButton);

  expect(setEntriesMock).toHaveBeenCalledWith([
    { name: "John", email: "john@example.com" },
  ]);

  expect(screen.getByTestId("name").textContent).toBe("");
  expect(screen.getByTestId("email").textContent).toBe("");
});
