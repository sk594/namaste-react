import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
  test("Should load contact-us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    // console.log("heading====>",heading)

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  test("Should load 2 input box on the COntact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
