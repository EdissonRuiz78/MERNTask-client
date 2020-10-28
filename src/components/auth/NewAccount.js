import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alerts/AlertContext";

const NewAccount = () => {
  //State from alerts
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  //State component
  const [user, updateUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //Destructuring the state component
  const { name, email, password, confirmPassword } = user;

  //Saving data of form
  const handleOnChange = (e) => {
    updateUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //Form validation
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      showAlert("All fields are required", "alert-error");
      return;
    }

    if (password.length < 6) {
      showAlert("Password minimum 6 characters", "alert-error");
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      showAlert("Password does not match", "alert-error");
      return;
    }
  };

  return (
    <div className="form-user">
      {alert ? (
        <div className={`alert ${alert.category}`}>{alert.msg}</div>
      ) : null}
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
