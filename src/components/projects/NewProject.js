import React, { Fragment, useState } from "react";

const NewProject = () => {
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

  return (
    <Fragment>
      <button className="btn btn-primary btn-block" type="button">
        New Project
      </button>
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
    </Fragment>
  );
};

export default NewProject;
