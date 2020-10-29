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
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        msg: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      return {};

    default:
      return state;
  }
};
