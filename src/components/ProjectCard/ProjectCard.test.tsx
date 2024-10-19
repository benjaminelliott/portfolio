import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProjectCard } from "./ProjectCard";
import type { Project, Technology } from "../../global";
import { BrowserRouter } from "react-router-dom";

const mockProject: Project = {
  key: 1,
  name: "title1",
  description: "description1",
  image: "image1",
  status: "in progress",
  techStack: ["tech1", "tech2"],
  deployedLink: "github1",
  repoLink: "demo1",
};

const mockTechs: Technology[] = [
  {
    key: 1,
    name: "tech1",
    image: "logo1",
    type: "Frontend",
    isLearning: false,
    link: "link1",
  },
  {
    key: 2,
    name: "tech2",
    image: "logo2",
    type: "Backend",
    isLearning: false,
    link: "link2",
  },
];

test("renders the ProjectCard component with provided props", () => {
  render(
    <BrowserRouter>
      <ProjectCard project={mockProject} techs={mockTechs} />
    </BrowserRouter>
  );
  expect(screen.getByText("title1")).toBeInTheDocument();
  expect(screen.getByText("description1")).toBeInTheDocument();
  expect(screen.getByText("tech1")).toBeInTheDocument();
  expect(screen.getByText("tech2")).toBeInTheDocument();
  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(3);
});

test("renders the ProjectCard component with different text", () => {
  render(
    <BrowserRouter>
      <ProjectCard
        project={{
          key: 1,
          name: "title2",
          description: "description2",
          image: "image2",
          status: "in progress",
          techStack: ["tech3"],
          deployedLink: "github2",
          repoLink: "demo2",
        }}
        techs={[
          {
            key: 1,
            name: "tech3",
            image: "logo3",
            type: "Frontend",
            isLearning: false,
            link: "link3",
          },
        ]}
      />
    </BrowserRouter>
  );
  expect(screen.getByText("title2")).toBeInTheDocument();
  expect(screen.getByText("description2")).toBeInTheDocument();
  expect(screen.getByText("tech3")).toBeInTheDocument();
  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(2);
});
