import React, { useContext, useEffect } from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import Project from "./Project";

const ProjectList = () => {
  const projectContext = useContext(ProjectContext);
  const { projects, getProjects } = projectContext;

  useEffect(() => {
    getProjects();
  }, []);

  if (projects.length === 0) {
    return null;
  }

  return (
    <ul className="list-projects">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
