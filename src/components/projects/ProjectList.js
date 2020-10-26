import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProjectContext from "../../context/projects/ProjectContext";
import Project from "./Project";

const ProjectList = () => {
  //Context from projects
  const projectContext = useContext(ProjectContext);
  const { projects, getProjects } = projectContext;

  //Initial projects
  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, []);

  if (projects.length === 0) {
    return <p>There is not projects, Start now</p>;
  }

  return (
    <ul className="list-projects">
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition classNames="project" key={project.id} timeout={200}>
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectList;
