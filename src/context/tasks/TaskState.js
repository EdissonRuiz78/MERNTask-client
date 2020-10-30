import React, { useReducer } from "react";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";
import clientAxios from "../../config/axios";
import {
  GET_TASKS,
  ADD_TASK,
  TASK_VALIDATION,
  REMOVE_TASK,
  TASK_EDIT,
  TASK_UPDATE,
  CLEAN_TASK,
} from "../../types";

const TaskState = (props) => {
  const initialState = {
    projecttask: [],
    errortask: false,
    currenttask: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  //Function to get task by project id
  const getTasks = async (project) => {
    try {
      const response = await clientAxios.get("api/tasks", {
        params: { project },
      });
      dispatch({
        type: GET_TASKS,
        payload: response.data.tasks,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Function to add new task
  const addTask = async (task) => {
    try {
      const response = await clientAxios.post("api/tasks", task);
      dispatch({
        type: ADD_TASK,
        payload: response.data.task,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  //Task validation
  const errorTask = () => {
    dispatch({
      type: TASK_VALIDATION,
    });
  };

  //Function to remove task
  const removeTask = async (id, project) => {
    try {
      await clientAxios.delete(`api/tasks/${id}`, { params: { project } });

      dispatch({
        type: REMOVE_TASK,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Function to change state of taks and update task
  const taskUpdate = async (task) => {
    console.log(task);
    try {
      const response = await clientAxios.put(`api/tasks/${task._id}`, task);
      dispatch({
        type: TASK_UPDATE,
        payload: response.data.currenttask,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  //Function to edit task
  const taskEdit = (task) => {
    console.log(task);
    dispatch({
      type: TASK_EDIT,
      payload: task,
    });
  };

  const cleanTask = () => {
    dispatch({
      type: CLEAN_TASK,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        projecttask: state.projecttask,
        errortask: state.errortask,
        currenttask: state.currenttask,
        getTasks,
        addTask,
        errorTask,
        removeTask,
        taskEdit,
        taskUpdate,
        cleanTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
