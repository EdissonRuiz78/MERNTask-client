import React, { useReducer } from "react";
import uuid from "uuid/dist/v4";
import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer";
import {
  FORM_NEWPROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  FORM_VALIDATION,
} from "../../types/";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "React" },
    { id: 2, name: "Angular" },
    { id: 3, name: "Vue Js" },
    { id: 4, name: "JavaScript" },
  ];

  const initialState = {
    projects: [],
    form: false,
    errorform: false,
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: FORM_NEWPROJECT,
    });
  };

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  const addProject = (project) => {
    project.id = uuid();

    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  const showError = () => {
    dispatch({
      type: FORM_VALIDATION,
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorform: state.errorform,
        showForm,
        getProjects,
        addProject,
        showError,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
