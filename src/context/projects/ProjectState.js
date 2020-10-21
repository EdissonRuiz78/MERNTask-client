import React, { useReducer } from "react";
import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer";
import { FORM_NEWPROJECT, GET_PROJECTS, ADD_PROJECT } from "../../types/";

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

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        showForm,
        getProjects,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
