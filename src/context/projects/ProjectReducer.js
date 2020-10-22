import {
  FORM_NEWPROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  FORM_VALIDATION,
  CURRENT_PROJECT,
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
        projects: [...state.projects, action.payload],
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

    default:
      return state;
  }
};
