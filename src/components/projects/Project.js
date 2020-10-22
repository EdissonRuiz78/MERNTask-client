import React, { useContext } from "react";
import ProjectContext from "../../context/projects/ProjectContext";

const Project = ({ project }) => {
  const projectContext = useContext(ProjectContext);
  const { currentProject } = projectContext;
  const { name, id } = project;

  const handleOnClick = () => {
    currentProject(id);
  };

  return (
    <li>
      <button className="btn btn-blank" type="button" onClick={handleOnClick}>
        {name}
      </button>
    </li>
  );
};

export default Project;
