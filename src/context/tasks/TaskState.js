import React, { useReducer } from "react";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";
import { GET_TASKS, ADD_TASK, TASK_VALIDATION, REMOVE_TASK } from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { projectId: 1, taskId: 1, name: "Plataform", state: true },
      { projectId: 1, taskId: 2, name: "Plataform2", state: true },
      { projectId: 2, taskId: 3, name: "Plataform3", state: false },
      { projectId: 3, taskId: 4, name: "Plataform4", state: true },
    ],
    projecttask: null,
    errortask: false,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  //Function to get task by project id
  const getTasks = (projectId) => {
    dispatch({
      type: GET_TASKS,
      payload: projectId,
    });
  };

  //Function to add new task
  const addTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  //Task validation
  const errorTask = () => {
    dispatch({
      type: TASK_VALIDATION,
    });
  };

  const removeTask = (taskId) => {
    dispatch({
      type: REMOVE_TASK,
      payload: taskId,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        projecttask: state.projecttask,
        errortask: state.errortask,
        getTasks,
        addTask,
        errorTask,
        removeTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;