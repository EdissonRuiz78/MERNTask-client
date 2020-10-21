import React from "react";
import Project from "./Project";

const ProjectList = () => {
  const projects = [
    { name: "React", id: 1 },
    { name: "Angular", id: 2 },
    { name: "Vue Js", id: 3 },
  ];
  return (
    <ul className="list-projects">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
