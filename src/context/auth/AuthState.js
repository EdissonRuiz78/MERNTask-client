import React, { useReducer } from "react";

import AuthContext from "../auth/AuthContext";
import AuthReducer from "../auth/AuthReducer";

import clientAxios from "../../config/axios";
import authToken from "../../config/authToken";

import {
  SUCCESS_REGISTER,
  WARNING_REGISTER,
  LOGIN,
  LOGOUT,
  WARNING_LOGIN,
  GET_USER,
} from "../../types";

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem("token"),
    auth: null,
    user: null,
    msg: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const createUser = async (data) => {
    try {
      const response = await clientAxios.post("/api/users", data);
      console.log(response);

      dispatch({
        type: SUCCESS_REGISTER,
        payload: response.data,
      });
      getUser();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alert-error",
      };

      dispatch({
        type: WARNING_REGISTER,
        payload: alert,
      });
    }
  };

  const getUser = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      authToken(token);
    }
    try {
      const response = await clientAxios.get("/api/auth");
      dispatch({
        type: GET_USER,
        payload: response.data.user,
      });
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({
        type: WARNING_LOGIN,
      });
    }
  };

  const userLogin = async (data) => {
    try {
      const response = await clientAxios.post("/api/auth", data);

      dispatch({
        type: LOGIN,
        payload: response.data,
      });
      getUser();
    } catch (error) {
      console.log(error.response.data.msg);
      const alert = {
        msg: error.response.data.msg,
        category: "alert-error",
      };

      dispatch({
        type: WARNING_LOGIN,
        payload: alert,
      });
    }
  };

  const userLogout = async () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        msg: state.msg,
        loading: state.loading,
        createUser,
        userLogin,
        getUser,
        userLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
