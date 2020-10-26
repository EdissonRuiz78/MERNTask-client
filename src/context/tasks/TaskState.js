import React, { useReducer } from "react";
import uuid from "uuid/dist/v4";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";
import {
  GET_TASKS,
  ADD_TASK,
  TASK_VALIDATION,
  REMOVE_TASK,
  TASK_STATE,
  TASK_EDIT,
  TASK_UPDATE,
} from "../../types";

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
    currenttask: null,
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
    task.taskId = uuid();
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

  //Function to remove task
  const removeTask = (taskId) => {
    dispatch({
      type: REMOVE_TASK,
      payload: taskId,
    });
  };

  //Function to change state of taks
  const taskState = (task) => {
    dispatch({
      type: TASK_STATE,
      payload: task,
    });
  };

  //Function to edit task
  const taskEdit = (task) => {
    dispatch({
      type: TASK_EDIT,
      payload: task,
    });
  };

  //Function to update a task
  const taskUpdate = (task) => {
    dispatch({
      type: TASK_UPDATE,
      payload: task,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        projecttask: state.projecttask,
        errortask: state.errortask,
        currenttask: state.currenttask,
        getTasks,
        addTask,
        errorTask,
        removeTask,
        taskState,
        taskEdit,
        taskUpdate,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
