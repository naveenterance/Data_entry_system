import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Contexthook } from "../context/Context";
import Form from "../components/Form";
import renderer from "react-test-renderer";

jest.mock("../context/Context", () => ({
  Contexthook: jest.fn(),
}));

describe("Form component", () => {
  it("renders without crashing ", () => {
    Contexthook.mockReturnValue({ state: {}, dispatch: jest.fn() });

    const { container } = render(<Form />);

    expect(container).toMatchSnapshot();
  });

  it("updates form state on input change", () => {
    const dispatchMock = jest.fn();
    Contexthook.mockReturnValue({ state: {}, dispatch: dispatchMock });

    const { getByPlaceholderText } = render(<Form />);

    fireEvent.change(getByPlaceholderText("First Name"), {
      target: { value: "John" },
    });

    fireEvent.change(getByPlaceholderText("Last Name"), {
      target: { value: "Brennan" },
    });

    fireEvent.change(getByPlaceholderText("email"), {
      target: { value: "jb@gmail.com" },
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: "UPDATE_FIELD",
      field: "firstName",
      value: "John",
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: "UPDATE_FIELD",
      field: "lastName",
      value: "Brennan",
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: "UPDATE_FIELD",
      field: "email",
      value: "jb@gmail.com",
    });
  });

  it("submits form data on button click", () => {
    const dispatchMock = jest.fn();
    Contexthook.mockReturnValue({
      state: { firstName: "John", lastName: "Brennan", email: "jb@gmail.com" },
      dispatch: dispatchMock,
    });

    const { getByText } = render(<Form />);

    fireEvent.click(getByText("Submit"));

    expect(dispatchMock).toHaveBeenCalledWith({
      type: "ADD",
      formData: {
        firstName: "John",
        lastName: "Brennan",
        email: "jb@gmail.com",
      },
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: "RESET",
    });
  });
});
