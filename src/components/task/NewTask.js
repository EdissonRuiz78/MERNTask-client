import React from "react";

const NewTask = () => {
  return (
    <div className="form">
      <form>
        <div className="container-input">
          <input
            className="input-text"
            type="text"
            name="name"
            placeholder="Task Name"
          />
        </div>
        <div className="container-input">
          <input
            className="btn btn-primary btn-submit btn-block"
            type="submit"
            value="Add Task"
          />
        </div>
      </form>
    </div>
  );
};

export default NewTask;
