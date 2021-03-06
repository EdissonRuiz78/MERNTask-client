import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";

import ProjectState from "./context/projects/ProjectState";
import TaskState from "./context/tasks/TaskState";
import AlertState from "./context/alerts/AlertState";
import AuthState from "./context/auth/AuthState";

import authToken from "./config/authToken";
import PrivateRoute from "./components/routes/PrivateRoute";

const token = localStorage.getItem("token");
if (token) {
  authToken(token);
}

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/NewAccount" component={NewAccount} />
                <PrivateRoute exact path="/Projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
