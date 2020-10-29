import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alerts/AlertContext";
import AuthContext from "../../context/auth/AuthContext";

const Login = (props) => {
  //State component
  const [user, updateUser] = useState({
    email: "",
    password: "",
  });

  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { auth, msg, userLogin } = authContext;

  useEffect(() => {
    if (auth) {
      props.history.push("/Projects");
    }

    if (msg) {
      showAlert(msg.msg, msg.category);
    }
  }, [msg, auth, props.history]);

  //Destructuring the state component
  const { email, password } = user;

  //Saving data of form
  const handleOnChange = (e) => {
    updateUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      showAlert("All fields are required", "alert-error");
      return;
    }

    userLogin({ email, password });
  };

  return (
    <div className="form-user">
      {alert ? (
        <div className={`alert ${alert.category}`}>{alert.msg}</div>
      ) : null}
      <div className="container-form shadow-dark">
        <h1>Log in</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="input-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Your email"
              onChange={handleOnChange}
            />
          </div>
          <div className="input-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Your password"
              onChange={handleOnChange}
            />
          </div>
          <div className="input-form">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Log In"
            />
          </div>
        </form>
        <p className="pseudo">Or</p>
        <Link to={"/NewAccount"} className="link-account">
          Create An Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
