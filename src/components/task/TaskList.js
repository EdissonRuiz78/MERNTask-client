import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";
import Tasks from "./Tasks";

const TaskList = () => {
  //Context form Projects
  const projectContext = useContext(ProjectContext);
  const { currentproject, removeProject } = projectContext;

  //Context form Tasks
  const taskContext = useContext(TaskContext);
  const { projecttask } = taskContext;

  //No project active ? don´t show anything
  if (!currentproject) {
    return <h2>Pick a Project</h2>;
  }

  //Array destructuring to show current project
  const [project] = currentproject;

  //Function to remove a project
  const handleOnClick = () => {
    removeProject(project.id);
  };

  return (
    <Fragment>
      <h2>Project: {project.name}</h2>
      <ul className="list-task">
        {projecttask.length === 0 ? (
          <li className="task">
            <p>No task</p>
          </li>
        ) : (
          <TransitionGroup>
            {projecttask.map((task) => (
              <CSSTransition classNames="task" key={task.taskId} timeout={200}>
                <Tasks task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button className="btn btn-primary" type="button" onClick={handleOnClick}>
        Remove Project &times;
      </button>
    </Fragment>
  );
};

export default TaskList;
