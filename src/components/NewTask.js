import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { v4 } from "uuid";

function NewTask({ setAllTask, allTask }) {
  document.title = "TASKList - Add Task";
  let history = useNavigate();
  let newTaskId = v4().slice(0, 3);

  //USESTATE FOR NEW TASK DATA (FORM DATA)
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDetail, setNewTaskDetail] = useState("");

  // EVENT HANDLER FOR FORM SUBMIT
  const submitHandler = (e) => {
    e.preventDefault();
    let newTask = {
      id: newTaskId,
      taskTitle: newTaskTitle,
      taskDetail: newTaskDetail,
    };
    setAllTask([...allTask, newTask]);
    setNewTaskTitle("");
    setNewTaskDetail("");
    history("/");
    alert("Task added");
  };

  // RENDERING
  return (
    <div className="container py-4">
      <h1>Add Task</h1>
      <hr />
      <br />
      <form onSubmit={submitHandler}>
        <div className="form-group mb-3">
          <label htmlFor="taskTitle">Task Title</label>
          <input
            type="text"
            className="form-control"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Enter Task Title"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="taskDetail">Task Details</label>
          <textarea
            type="text"
            cols="500"
            className="form-control"
            value={newTaskDetail}
            onChange={(e) => setNewTaskDetail(e.target.value)}
            placeholder="Enter Task Details"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          ADD
        </button>
        &nbsp;
        <Link to="/">
          <input type="button" value="Cancel" className="btn btn-light" />
        </Link>
      </form>
    </div>
  );
}

export default NewTask;
