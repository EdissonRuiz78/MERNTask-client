import React, { useReducer } from "react";
import clientAxios from "../../config/axios";

import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer";

import {
  FORM_NEWPROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  FORM_VALIDATION,
  CURRENT_PROJECT,
  REMOVE_PROJECT,
  ERROR_PROJECT,
} from "../../types/";

const ProjectState = (props) => {
  const initialState = {
    projects: [],
    form: false,
    errorform: false,
    currentproject: null,
    errorproject: null,
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: FORM_NEWPROJECT,
    });
  };

  const getProjects = async () => {
    try {
      const response = await clientAxios.get("/api/projects");

      dispatch({
        type: GET_PROJECTS,
        payload: response.data.projects,
      });
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const addProject = async (project) => {
    try {
      const response = await clientAxios.post("/api/projects", project);
      dispatch({
        type: ADD_PROJECT,
        payload: response.data,
      });
    } catch (error) {
      const alert = {
        msg: "Something is not working",
        category: "alert-error",
      };
      dispatch({
        type: ERROR_PROJECT,
        payload: alert,
      });
    }
  };

  const showError = () => {
    dispatch({
      type: FORM_VALIDATION,
    });
  };

  const currentProject = (projectId) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId,
    });
  };

  const removeProject = async (projectId) => {
    try {
      await clientAxios.delete(`/api/projects/${projectId}`);
      dispatch({
        type: REMOVE_PROJECT,
        payload: projectId,
      });
    } catch (error) {
      const alert = {
        msg: "Something is not working",
        category: "alert-error",
      };
      dispatch({
        type: ERROR_PROJECT,
        payload: alert,
      });
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorform: state.errorform,
        currentproject: state.currentproject,
        errorproject: state.errorproject,
        showForm,
        getProjects,
        addProject,
        showError,
        currentProject,
        removeProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
