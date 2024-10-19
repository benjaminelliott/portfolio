import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LinkButton } from "./LinkButton";
import { BrowserRouter } from "react-router-dom";

test("renders the LinkButton component with provided props", () => {
  render(
    <BrowserRouter>
      <LinkButton link="/test" />
    </BrowserRouter>
  );
  expect(screen.getByRole("link")).toBeInTheDocument();
});

test("renders the LinkButton component with the project-link class", () => {
  render(
    <BrowserRouter>
      <LinkButton link="/test" />
    </BrowserRouter>
  );
  expect(screen.getByRole("link")).toHaveClass("project-link");
});

test("renders the LinkButton disabled", () => {
  render(
    <BrowserRouter>
      <LinkButton link="/test" disabled />
    </BrowserRouter>
  );
  expect(screen.getByRole("button")).toBeDisabled();
});
