import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TechList } from "./TechList";
import { BrowserRouter } from "react-router-dom";
import type { Tech } from "../../global";

const mockTechs: Tech[] = [
  {
    key: 1,
    name: "tech1",
    image: "image1",
    link: "link1",
  },
  {
    key: 2,
    name: "tech2",
    image: "image2",
    link: "link2",
  },
];

test("renders the TechList component with provided props", () => {
  render(
    <BrowserRouter>
      <TechList techs={mockTechs} />
    </BrowserRouter>
  );
  expect(screen.getByText("tech1")).toBeInTheDocument();
  expect(screen.getByText("tech2")).toBeInTheDocument();
  expect(screen.getAllByRole("img")).toHaveLength(2);
});

test("renders the TechList component with different text", () => {
  render(
    <BrowserRouter>
      <TechList
        techs={[
          {
            key: 1,
            name: "tech3",
            image: "image3",
            link: "link3",
          },
        ]}
      />
    </BrowserRouter>
  );
  expect(screen.getByText("tech3")).toBeInTheDocument();
});

test("fails to render the TechList component with missing props", () => {
  // @ts-ignore
  render(
    <BrowserRouter>
      <TechList />
    </BrowserRouter>
  );
  expect(screen.queryByText("tech1")).toBeNull();
});

test("renders the TechList component with tech-list class", () => {
  render(
    <BrowserRouter>
      <TechList techs={mockTechs} />
    </BrowserRouter>
  );
  expect(screen.getByRole("article")).toHaveClass("tech-list");
  expect(screen.getByRole("list")).toHaveClass("tech-logos");
});

test("renders the Techlist component with subHeading", () => {
  render(
    <BrowserRouter>
      <TechList techs={mockTechs} subHeading="subHeading" />
    </BrowserRouter>
  );
  expect(screen.getByText("subHeading")).toBeInTheDocument();
});
