import React from "react";

const Tasks = ({ task }) => {
  return (
    <li className="task shadow">
      <p>{task.name}</p>
      <div className="state">
        {task.state ? (
          <button className="success" type="button">
            Success
          </button>
        ) : (
          <button className="incomplete" type="button">
            Incomplete
          </button>
        )}
      </div>
      <div className="actions">
        <button className="btn btn-primary" type="button">
          Edit
        </button>
        <button className="btn btn-secondary" type="button">
          Delet
        </button>
      </div>
    </li>
  );
};

export default Tasks;
