import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Contexthook } from "./Context";
import Form from "./Form";

jest.mock("./Context", () => ({
  Contexthook: jest.fn(),
}));

describe("Form component", () => {
  it("renders without crashing", () => {
    Contexthook.mockReturnValue({ state: {}, dispatch: jest.fn() });

    render(<Form />);
  });

  it("updates form state on input change", () => {
    const dispatchMock = jest.fn();
    Contexthook.mockReturnValue({ state: {}, dispatch: dispatchMock });

    const { getByPlaceholderText } = render(<Form />);

    fireEvent.change(getByPlaceholderText("firstName"), {
      target: { value: "John" },
    });
    fireEvent.change(getByPlaceholderText("email"), {
      target: { value: "john@example.com" },
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: "UPDATE_FIELD",
      field: "firstName",
      value: "John",
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: "UPDATE_FIELD",
      field: "email",
      value: "john@example.com",
    });
  });

  it("submits form data on button click", () => {
    const dispatchMock = jest.fn();
    Contexthook.mockReturnValue({
      state: { firstName: "John", email: "john@example.com" },
      dispatch: dispatchMock,
    });

    const { getByText } = render(<Form />);

    fireEvent.click(getByText("Submit"));

    expect(dispatchMock).toHaveBeenCalledWith({
      type: "ADD",
      formData: { firstName: "John", email: "john@example.com" },
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: "RESET",
    });
  });
});
