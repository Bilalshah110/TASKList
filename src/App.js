import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import AllTask from "./components/AllTask";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewTask from "./components/NewTask";
import About from "./components/About";
import "./assets/mystyle.css";
import EditTask from "./components/EditTask";
import ErrorPage from "./components/ErrorPage";

function App() {
  //USESTATE FOR ALL TASKS DATA (ADDS PREVIOUS TASKS AND NEW TASK)
  const [allTask, setAllTask] = useState([
    {
      id: "1",
      taskTitle: "Go to Work",
      taskDetail: "Don't get late today, get to the work on time",
    },
    {
      id: "2",
      taskTitle: "Meeting",
      taskDetail:
        "An important meeting is scheduled at 12 noon, do not miss it out",
    },
    {
      id: "3",
      taskTitle: "This time Coffee",
      taskDetail: "No tea today, coffee please",
    },
  ]);

  // RENDERING
  return (
    <div className="bg-light">
      <Header />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<AllTask allTask={allTask} setAllTask={setAllTask} />}
          />
          <Route
            path="/newtask"
            element={<NewTask allTask={allTask} setAllTask={setAllTask} />}
          />
          <Route path="/edittask" element={<EditTask allTask={allTask} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
