import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProjectFilter } from "./ProjectFilter";
import type { Project } from "../../global";
import { BrowserRouter } from "react-router-dom";

const mockProjects: Project[] = [
  {
    key: 1,
    name: "project1",
    techStack: ["tech1", "tech2"],
    image: "image1",
    status: "completed",
    deployedLink: "link1",
    repoLink: "link2",
    description: "description1",
  },
  {
    key: 2,
    name: "project2",
    techStack: ["tech3", "tech4"],
    image: "image2",
    status: "in progress",
    deployedLink: "link3",
    repoLink: "link4",
    description: "description2",
  },
];

const mockSetFilteredProjects = jest.fn();

test("renders the ProjectFilter component with provided props", () => {
  render(
    <BrowserRouter>
      <ProjectFilter
        projects={mockProjects}
        setFilteredProjects={mockSetFilteredProjects}
      />
    </BrowserRouter>
  );
  expect(screen.getAllByRole("checkbox")).toHaveLength(4);
  expect(screen.getAllByRole("img")).toHaveLength(4);
  expect(screen.getAllByRole("link")).toHaveLength(4);
});
