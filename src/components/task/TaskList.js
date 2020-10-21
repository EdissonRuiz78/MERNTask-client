import React, { Fragment } from "react";
import Tasks from "./Tasks";

const TaskList = () => {
  const tasks = [
    { name: "Plataform", state: true },
    { name: "Plataform2", state: true },
    { name: "Plataform3", state: false },
    { name: "Plataform4", state: true },
  ];
  return (
    <Fragment>
      <h2>Project: React</h2>
      <ul className="list-task">
        {tasks.length === 0 ? (
          <li className="task">
            <p>No task</p>
          </li>
        ) : (
          tasks.map((task) => <Tasks task={task} />)
        )}
      </ul>
      <button className="btn btn-primary" type="button">
        Remove Project &times;
      </button>
    </Fragment>
  );
};

export default TaskList;
