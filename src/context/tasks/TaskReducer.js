import {
  GET_TASKS,
  ADD_TASK,
  TASK_VALIDATION,
  REMOVE_TASK,
  TASK_EDIT,
  TASK_UPDATE,
  CLEAN_TASK,
} from "../../types/";

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        projecttask: action.payload,
      };

    case ADD_TASK:
      return {
        ...state,
        projecttask: [action.payload, ...state.projecttask],
        errortask: false,
      };

    case TASK_VALIDATION:
      return {
        ...state,
        errortask: true,
      };

    case REMOVE_TASK:
      return {
        ...state,
        projecttask: state.projecttask.filter(
          (task) => task._id !== action.payload
        ),
      };

    case TASK_UPDATE:
      return {
        ...state,
        projecttask: state.projecttask.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
        currenttask: null,
      };

    case TASK_EDIT:
      return {
        ...state,
        currenttask: action.payload,
      };

    case CLEAN_TASK:
      return {
        ...state,
        currenttask: null,
      };

    default:
      return state;
  }
};
