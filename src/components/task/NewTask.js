import React, { useContext, useState, useEffect } from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";

const NewTask = () => {
  //Context from Projects
  const projectContext = useContext(ProjectContext);
  const { currentproject } = projectContext;

  //Context from Tasks
  const taskContext = useContext(TaskContext);
  const {
    errortask,
    currenttask,
    addTask,
    errorTask,
    getTasks,
    taskUpdate,
  } = taskContext;

  //Effect to edit current task
  useEffect(() => {
    if (currenttask !== null) {
      updateTask(currenttask);
    } else {
      updateTask({
        name: "",
      });
    }
  }, [currenttask]);

  //State Component
  const [task, updateTask] = useState({
    name: "",
  });

  //Destructuring the state component
  const { name } = task;

  //No project active ? don´t show anything
  if (!currentproject) {
    return null;
  }

  const [project] = currentproject;

  //Saving task name
  const handleOnChange = (e) => {
    updateTask({
      [e.target.name]: e.target.value,
    });
  };

  //Form validation
  const handleOnSubmit = (e) => {
    e.preventDefault();

    //Name empty? show error
    if (name.trim() === "") {
      errorTask();
      return;
    }

    //Check if we need new task o edit task
    if (currenttask === null) {
      //Adding new task
      task.projectId = project.id;
      task.state = false;
      addTask(task);
    } else {
      task.projectId = currenttask.projectId;
      task.state = currenttask.state;
      task.taskId = currenttask.taskId;
      taskUpdate(task);
    }

    //Get task
    getTasks(project.id);

    //Form reset
    updateTask({
      name: "",
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleOnSubmit}>
        <div className="container-input">
          <input
            className="input-text"
            type="text"
            name="name"
            value={name}
            placeholder="Task Name"
            onChange={handleOnChange}
          />
        </div>
        <div className="container-input">
          <input
            className="btn btn-primary btn-submit btn-block"
            type="submit"
            value={currenttask ? "Edit Task" : "Add Task"}
          />
        </div>
      </form>
      {errortask ? (
        <p className="message error">Task Name is required</p>
      ) : null}
    </div>
  );
};

export default NewTask;
