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
        loading: false,
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
        loading: false,
      };

    case GET_USER:
      return {
        ...state,
        auth: true,
        user: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
