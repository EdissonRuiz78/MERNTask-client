import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, updateUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleOnChange = (e) => {
    updateUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-user">
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
