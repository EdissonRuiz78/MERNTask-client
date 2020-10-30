import React, { useContext } from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";

const Tasks = ({ task }) => {
  //Context form project
  const projectContext = useContext(ProjectContext);
  const { currentproject } = projectContext;

  //Destructuring current project
  const [project] = currentproject;

  //Context from task
  const taskContext = useContext(TaskContext);
  const { removeTask, getTasks, taskEdit, taskUpdate } = taskContext;

  //Destructuring state from props
  const { _id, name, state } = task;

  //Function to remove a task
  const handleOnDelete = (id) => {
    removeTask(id, project._id);
    getTasks(project._id);
  };

  //Function to change state of task
  const handleOnChange = (task) => {
    if (task.state) {
      task.state = false;
    } else {
      task.state = true;
    }
    taskUpdate(task);
  };

  //Function to edit tasks
  const handleOnEdit = (task) => {
    taskEdit(task);
  };

  return (
    <li className="task shadow">
      <p>{name}</p>
      <div className="state">
        {state ? (
          <button
            className="success"
            type="button"
            onClick={() => handleOnChange(task)}
          >
            Success
          </button>
        ) : (
          <button
            className="incomplete"
            type="button"
            onClick={() => handleOnChange(task)}
          >
            Incomplete
          </button>
        )}
      </div>
      <div className="actions">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => handleOnEdit(task)}
        >
          Edit
        </button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => handleOnDelete(_id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Tasks;
