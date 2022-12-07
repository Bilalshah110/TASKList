import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function EditTask({ allTask }) {
  document.title = "TASKList - Edit Task";
  let history = useNavigate();

  //USESTATE FOR EDITING TASK DATA (ADDS PREVIOUS TASKS AND NEW TASK)
  let [editTaskTitle, setEditTaskTitle] = useState("");
  let [editTaskDetail, setEditTaskDetail] = useState("");
  let [editTaskId, setEditTaskId] = useState("");

  //GET THE INDEX OF ID (FOR DATA TO BE EDITED)
  let index = allTask
    .map((e) => {
      return e.id;
    })
    .indexOf(editTaskId);

  // EVENT HANDLER FOR SUBMITTING EDITED DATA
  const editHandler = (e) => {
    e.preventDefault();
    let editTask = allTask[index];
    editTask.taskTitle = editTaskTitle;
    editTask.taskDetail = editTaskDetail;
    history("/");
    alert("Task Edited");
  };
  useEffect(() => {
    // GET DATA FROM LOCAL STORAGE
    setEditTaskId(localStorage.getItem("id"));
    setEditTaskTitle(localStorage.getItem("taskTitle"));
    setEditTaskDetail(localStorage.getItem("taskDetail"));
  }, []);

  // RENDERING
  return (
    <div className="container py-4">
      <h1>Edit Task</h1>
      <hr />
      <br />

      <form onSubmit={editHandler}>
        <div className="form-group mb-3">
          <label htmlFor="editTaskTitle">Edit Task Title</label>
          <input
            type="text"
            className="form-control"
            value={editTaskTitle}
            onChange={(e) => setEditTaskTitle(e.target.value)}
            placeholder="Edit Task Name"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="editTaskDetail">Edit Task Details</label>
          <textarea
            type="text"
            cols="500"
            className="form-control"
            value={editTaskDetail}
            onChange={(e) => setEditTaskDetail(e.target.value)}
            placeholder="Edit Task Details"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          UPDATE
        </button>{" "}
        &nbsp;
        <Link to="/">
          <input type="button" value="Cancel" className="btn btn-light" />
        </Link>
      </form>
    </div>
  );
}

export default EditTask;
