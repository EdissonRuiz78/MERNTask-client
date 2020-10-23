import {
  FORM_NEWPROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  FORM_VALIDATION,
  CURRENT_PROJECT,
  REMOVE_PROJECT,
} from "../../types/";

export default (state, action) => {
  switch (action.type) {
    case FORM_NEWPROJECT:
      return {
        ...state,
        form: true,
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    case ADD_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects],
        form: false,
        errorform: false,
      };

    case FORM_VALIDATION:
      return {
        ...state,
        errorform: true,
      };

    case CURRENT_PROJECT:
      return {
        ...state,
        currentproject: state.projects.filter(
          (project) => project.id === action.payload
        ),
      };

    case REMOVE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
        currentproject: null,
      };

    default:
      return state;
  }
};
