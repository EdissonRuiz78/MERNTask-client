import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProjectContext from "../../context/projects/ProjectContext";
import AlertContext from "../../context/alerts/AlertContext";
import Project from "./Project";

const ProjectList = () => {
  //Context from projects
  const projectContext = useContext(ProjectContext);
  const { projects, errorproject, getProjects } = projectContext;

  //Context from alerts
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  //Initial projects
  useEffect(() => {
    if (errorproject) {
      showAlert(errorproject.msg, errorproject.category);
    }
    getProjects();
    // eslint-disable-next-line
  }, [errorproject]);

  if (projects.length === 0) {
    return <p>There is not projects, Start now</p>;
  }

  return (
    <ul className="list-projects">
      {alert ? (
        <div className={`alert ${alert.category}`}>{alert.msg}</div>
      ) : null}
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition classNames="project" key={project._id} timeout={200}>
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectList;
