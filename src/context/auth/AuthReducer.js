import {
  SUCCESS_REGISTER,
  WARNING_REGISTER,
  LOGIN,
  LOGOUT,
  WARNING_LOGIN,
  GET_USER,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SUCCESS_REGISTER:
    case LOGIN:
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        auth: true,
        msg: null,
      };

    case WARNING_REGISTER:
    case WARNING_LOGIN:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        auth: null,
        user: null,
        msg: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        auth: true,
        user: action.payload,
      };

    default:
      return state;
  }
};
