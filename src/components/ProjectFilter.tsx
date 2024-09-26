import { useState, useEffect } from "react";
import { RotateCcw } from "lucide-react";
import type { Project } from "../global";
import { TechLogoImage } from "./TechLogoImage";
import { technologies } from "../constants";

type ProjectFilterProps = {
  projects: Project[];
  setFilteredProjects: React.Dispatch<React.SetStateAction<Project[]>>;
};

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  projects,
  setFilteredProjects,
}) => {
  const techs = [
    ...new Set(
      projects.flatMap((project) =>
        project.techStack.map((tech) =>
          typeof tech === "string" ? tech : tech.name
        )
      )
    ),
  ];

  const updatedTechs = techs
    .map((tech, index) => {
      const foundTech = technologies.find(
        (technology) => technology.name === tech
      );

      return (
        foundTech || {
          key: index,
          name: tech,
          image: "",
          link: "",
          isLearning: false,
          type: "",
        }
      );
    })
    .sort((tech1, tech2) => tech1.key - tech2.key);

  const [checkedTechs, setCheckedTechs] = useState<string[]>([]);

  useEffect(() => {
    if (checkedTechs.length === 0) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project: Project) =>
          project.techStack.some((tech) =>
            checkedTechs.includes(typeof tech === "string" ? tech : tech.name)
          )
        )
      );
    }
  }, [checkedTechs, projects, setFilteredProjects]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === "all") {
      if (e.target.checked) {
        setCheckedTechs(techs);
      } else {
        setCheckedTechs([]);
      }
    } else {
      if (e.target.checked) {
        setCheckedTechs([...checkedTechs, value]);
      } else {
        setCheckedTechs(checkedTechs.filter((tech) => tech !== value));
      }
    }
  };

  const handleReset = () => {
    setFilteredProjects(projects);
    setCheckedTechs([]);
  };
  return (
    <div className="project-filter">
      <button
        className="icon-button"
        type="button"
        onClick={() => {
          handleReset();
        }}
      >
        <RotateCcw size={24} />
        <p>Reset</p>
      </button>
      <ul className="tech-checkbox-list">
        {updatedTechs.map((tech) => (
          <li key={tech.key} className="tech-checkbox-item">
            <input
              type="checkbox"
              id={tech.name}
              name={tech.name}
              value={tech.name}
              onChange={handleCheckboxChange}
              checked={checkedTechs.includes(tech.name)}
              className="tech-checkbox-input"
            />
            <TechLogoImage
              name={tech.name}
              link={tech.link}
              image={tech.image}
            />
            <label htmlFor={tech.name} className="tech-checkbox-label">
              {tech.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
