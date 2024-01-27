import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Contexthook, ContextProvider } from "../context/Context";
import View from "../components/View";

jest.mock("../context/Context", () => ({
  Contexthook: jest.fn(),
  ContextProvider: ({ children }) => <div>{children}</div>,
}));

describe("View component", () => {
  it("1--Renders submitted data correctly", () => {
    const mockentries = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "123456789",
        age: 30,
        country: "USA",
        age: "25",
        street: "st1",
        town: "tw1",
        postcode: "1234",
        visits: "34",
      },
      {
        firstName: "Alice",
        lastName: "Smith",
        email: "alice@example.com",
        phone: "987654321",
        age: 25,
        country: "Canada",
        street: "st1",
        town: "tw1",
        postcode: "1234",
        visits: "34",
      },
    ];

    Contexthook.mockReturnValue({
      state: { entries: mockentries },
    });

    const { container } = render(
      <ContextProvider>
        <View />
      </ContextProvider>
    );

    mockentries.forEach((data) =>
      [
        "firstName",
        "lastName",
        "email",
        "phone",
        "age",
        "country",
        "age",
        "street",
        "town",
        "postcode",
        "visits",
      ].forEach((field) =>
        expect(container).toHaveTextContent(data[field].toString())
      )
    );

    expect(container).toMatchSnapshot();
  });

  it("2--View component when no data is submitted  ", () => {
    Contexthook.mockReturnValue({
      state: { entries: [] },
    });

    const { container } = render(
      <ContextProvider>
        <View />
      </ContextProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
