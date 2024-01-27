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
  it("renders submitted data correctly", () => {
    const mockSubmittedData = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "123456789",
        age: 30,
        country: "USA",
      },
      {
        firstName: "Alice",
        lastName: "Smith",
        email: "alice@example.com",
        phone: "987654321",
        age: 25,
        country: "Canada",
      },
    ];

    Contexthook.mockReturnValue({
      state: { submittedData: mockSubmittedData },
    });

    const { container } = render(
      <ContextProvider>
        <View />
      </ContextProvider>
    );

    // Verify that the component renders each data field
    mockSubmittedData.forEach((data) =>
      ["firstName", "lastName", "email", "phone", "age", "country"].forEach(
        (field) => expect(container).toHaveTextContent(data[field].toString())
      )
    );
  });

  it("renders without crashing when no data is submitted", () => {
    Contexthook.mockReturnValue({
      state: { submittedData: [] },
    });
  });
});
