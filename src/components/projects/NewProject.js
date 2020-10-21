import React, { Fragment, useState, useContext } from "react";
import ProjectContext from "../../context/projects/ProjectContext";

const NewProject = () => {
  const projectContext = useContext(ProjectContext);
  const { form, showForm } = projectContext;
  const [project, updateProject] = useState({
    name: "",
  });

  const { name } = project;

  const handleOnChange = (e) => {
    updateProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnClick = () => {
    showForm();
  };

  return (
    <Fragment>
      <button
        className="btn btn-primary btn-block"
        type="button"
        onClick={handleOnClick}
      >
        New Project
      </button>
      {form ? (
        <form className="form-new-project" onSubmit={handleOnSubmit}>
          <input
            className="input-text"
            type="text"
            placeholder="Project Name"
            name="name"
            value={name}
            onChange={handleOnChange}
          />
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Add Project"
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
