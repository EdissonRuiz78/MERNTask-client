import React, { useContext, useEffect } from "react";

import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import NewTask from "../task/NewTask";
import TaskList from "../task/TaskList";

import AuthContext from "../../context/auth/AuthContext";

const Projects = () => {
  const authContext = useContext(AuthContext);
  const { getUser } = authContext;

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container-app">
      <Sidebar />
      <div className="seccion-principal">
        <Navbar />
        <main>
          <NewTask />
          <div className="container-task">
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
