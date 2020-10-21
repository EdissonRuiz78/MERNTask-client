import { FORM_NEWPROJECT, GET_PROJECTS } from "../../types/";

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

    default:
      return state;
  }
};
