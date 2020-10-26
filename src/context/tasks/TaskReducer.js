import {
  GET_TASKS,
  ADD_TASK,
  TASK_VALIDATION,
  REMOVE_TASK,
  TASK_STATE,
  TASK_EDIT,
  TASK_UPDATE,
} from "../../types/";

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        projecttask: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
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
        tasks: state.tasks.filter((task) => task.taskId !== action.payload),
      };

    case TASK_UPDATE:
    case TASK_STATE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.taskId === action.payload.taskId ? action.payload : task
        ),
        currenttask: null,
      };

    case TASK_EDIT:
      return {
        ...state,
        currenttask: action.payload,
      };

    default:
      return state;
  }
};
