import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PageTitle } from "./PageTitle";

test("renders the PageTitle component with provided text", () => {
  render(<PageTitle text="testing" />);
  expect(screen.getByText("testing")).toBeInTheDocument();
});

test("renders the PageTitle component with provided strongText", () => {
  render(<PageTitle text="testing" strongText="strongTesting" icon="❤️" />);
  expect(screen.getByText("strongTesting ❤️")).toBeInTheDocument();
});

test("renders the PageTitle component with main prop", () => {
  render(<PageTitle text="testing" main />);
  expect(screen.getByText("testing")).toHaveClass("title-strong");
});

test("renders the PageTitle component with icon", () => {
  render(<PageTitle text="testing" icon="❤️" />);
  expect(screen.getByText("undefined ❤️")).toBeInTheDocument();
});

test("renders the PageTitle component without main prop", () => {
  render(<PageTitle text="testing" />);
  expect(screen.getByText("testing")).not.toHaveClass("title-name");
});
