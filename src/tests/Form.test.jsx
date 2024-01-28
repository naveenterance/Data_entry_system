import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Contexthook } from "../context/Context";
import Form from "../components/Form";

jest.mock("../context/Context", () => ({
  Contexthook: jest.fn(),
}));

describe("Form component", () => {
  it("1--Form Component renders without error", () => {
    Contexthook.mockReturnValue({ state: {}, dispatch: jest.fn() });

    const { container } = render(<Form />);

    expect(container).toMatchSnapshot();
  });

  it("2--On input change dynamically updates fields", () => {
    const dispatchMock = jest.fn();
    Contexthook.mockReturnValue({ state: {}, dispatch: dispatchMock });

    const { getByPlaceholderText } = render(<Form />);

    const fields = [
      { placeholder: "First Name", value: "John" },
      { placeholder: "Last Name", value: "Brennan" },
      { placeholder: "email", value: "jb@gmail.com" },
      { placeholder: "phone", value: "12345678" },
      { placeholder: "country", value: "India" },
      { placeholder: "age", value: "25" },
      { placeholder: "street", value: "st1" },
      { placeholder: "town", value: "tw1" },
      { placeholder: "postcode", value: "1234" },
      { placeholder: "visits", value: "34" },
    ];

    fields.forEach(({ placeholder, value }) => {
      fireEvent.change(getByPlaceholderText(placeholder), {
        target: { value },
      });
    });

    const dispatchCalls = [
      { type: "UPDATE_FIELD", field: "firstName", value: "John" },
      { type: "UPDATE_FIELD", field: "lastName", value: "Brennan" },
      { type: "UPDATE_FIELD", field: "email", value: "jb@gmail.com" },
      { type: "UPDATE_FIELD", field: "phone", value: "12345678" },
      { type: "UPDATE_FIELD", field: "country", value: "India" },
      { type: "UPDATE_FIELD", field: "age", value: "25" },
      { type: "UPDATE_FIELD", field: "street", value: "st1" },
      { type: "UPDATE_FIELD", field: "town", value: "tw1" },
      { type: "UPDATE_FIELD", field: "postcode", value: "1234" },
    ];

    dispatchCalls.forEach((call) => {
      expect(dispatchMock).toHaveBeenCalledWith(call);
    });
  });

  it("3--On button click form is submitted", () => {
    const dispatchMock = jest.fn();
    Contexthook.mockReturnValue({
      state: {
        firstName: "John",
        lastName: "Brennan",
        email: "jb@gmail.com",
        phone: "12345678",
        country: "India",
        age: "25",
        street: "st1",
        town: "tw1",
        postcode: "1234",
        visits: "34",
      },
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
        phone: "12345678",
        country: "India",
        age: "25",
        street: "st1",
        town: "tw1",
        postcode: "1234",
        visits: "34",
      },
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: "RESET",
    });
  });
});
