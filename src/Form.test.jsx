import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { FormProvider, useFormContext, Form } from "./Form"; // Replace with the actual file path

test("Testing forms now", () => {
  // Mock function to set entries
  const setEntriesMock = jest.fn();

  // Wrap the Form component with FormProvider to provide the context
  render(
    <FormProvider>
      <Form setEntries={setEntriesMock} />
    </FormProvider>
  );

  // Get form elements
  const nameInput = screen.getByPlaceholderText(/name/i);
  const emailInput = screen.getByPlaceholderText(/email/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  // Test input change
  fireEvent.change(nameInput, { target: { value: "John" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });

  expect(useFormContext().state.name).toBe("John");
  expect(useFormContext().state.email).toBe("john@example.com");

  // Test form submission
  fireEvent.click(submitButton);

  // Verify that setEntriesMock has been called with the correct arguments
  expect(setEntriesMock).toHaveBeenCalledWith([
    { name: "John", email: "john@example.com" },
  ]);

  // Verify that context has been reset after submission
  expect(useFormContext().state.name).toBe("");
  expect(useFormContext().state.email).toBe("");
});
