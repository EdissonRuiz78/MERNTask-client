import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
  const [user, updateUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = user;

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
        <h1>Create An Account</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="input-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="First &#38; Last name"
              onChange={handleOnChange}
            />
          </div>
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
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm password"
              onChange={handleOnChange}
            />
          </div>
          <div className="input-form">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Create An Account"
            />
          </div>
        </form>
        <p className="pseudo">Or</p>
        <Link to={"/"} className="link-account">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
