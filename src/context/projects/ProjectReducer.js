import {
  FORM_NEWPROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  FORM_VALIDATION,
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

    default:
      return state;
  }
};
