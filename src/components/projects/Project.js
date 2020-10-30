import React, { useContext } from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";

const Project = ({ project }) => {
  //Context from Projects
  const projectContext = useContext(ProjectContext);
  const { currentProject } = projectContext;

  //Context from Tasks
  const taskContext = useContext(TaskContext);
  const { getTasks } = taskContext;

  //Destructuring project from props
  const { name } = project;

  //Function to select an active current project
  //and get task from active project
  const handleOnClick = (id) => {
    currentProject(id);
    getTasks(id);
  };

  return (
    <li>
      <button
        className="btn btn-blank"
        type="button"
        onClick={() => handleOnClick(project._id)}
      >
        {name}
      </button>
    </li>
  );
};

export default Project;
