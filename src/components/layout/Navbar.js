import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/AuthContext";

const Navbar = () => {
  //User data from Context
  const authContext = useContext(AuthContext);
  const { user, getUser, userLogout } = authContext;

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  return (
    <header className="app-header">
      {user ? (
        <p className="user-name">
          Hello <span>{user.name}</span>
        </p>
      ) : null}
      <nav className="nav-principal">
        <button className="btn btn-blank log-out" onClick={() => userLogout()}>
          Log Out
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
