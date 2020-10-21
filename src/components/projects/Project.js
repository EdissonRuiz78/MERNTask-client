import React from "react";

const Project = ({ project }) => {
  const { name, id } = project;
  return (
    <li>
      <button className="btn btn-blank" type="button">
        {name}
      </button>
    </li>
  );
};

export default Project;
