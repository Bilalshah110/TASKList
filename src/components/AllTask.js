import React from "react";
import { Link } from "react-router-dom";

function AllTask({ allTask, setAllTask }) {
  document.title = "TASKList - All Tasks";
  // EVENT HANDLER FOR DELETING TASK
  const deleteTask = (task) => {
    setAllTask(
      allTask.filter((e) => {
        return e !== task;
      })
    );
  };

  // EVENT HANDLER FOR EDITING TASK
  const editTask = ({ id, taskTitle, taskDetail }) => {
    // SET DATA TO LOCAL STORAGE
    localStorage.setItem("id", id);
    localStorage.setItem("taskTitle", taskTitle);
    localStorage.setItem("taskDetail", taskDetail);
  };

  // RENDERING
  return (
    <div className="container">
      <h3>All Tasks</h3>
      <hr />
      <br />
      {allTask.length === 0 ? (
        <h2 className="container">No Tasks</h2>
      ) : (
        allTask.map((task, i) => {
          return (
            <div key={i}>
              <div className="card text-bg-light mb-3">
                <div className="card-header">Task {i + 1}</div>
                <div className="card-body">
                  <h5 className="card-title">{task.taskTitle}</h5>
                  <p className="card-text">{task.taskDetail}</p>
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => deleteTask(task)}
                    className="btn btn-danger"
                  />

                  <Link to="/edittask">
                    <input
                      type="button"
                      value="Edit"
                      onClick={() => editTask(task)}
                      className="btn btn-secondary mx-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      )}
      <Link to="/newtask">
        <input
          type="button"
          value="ADD NEW TASK"
          className="btn btn-success form-control"
        />
      </Link>
    </div>
  );
}

export default AllTask;
