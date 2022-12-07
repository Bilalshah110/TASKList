import React from "react";

function About() {
  document.title = "TASKList - About";
  return (
    <div className="container my-3">
      <h3>About</h3>
      <hr />

      <h5>App info</h5>
      <hr />

      <h6>App Name</h6>
      <p>TASKList</p>
      <h6>App Type</h6>
      <p>Todo List App</p>
      <h6>App Features</h6>
      <ul>
        <li>Add Tasks</li>
        <li>Display Tasks</li>
        <li>Edit Tasks</li>
        <li>Delete Tasks</li>
      </ul>

      <h3>Development info</h3>
      <hr />
      <h6>Technologies</h6>
      <ul>
        <li>React JS - v18.2</li>
        <li>Bootstrap - v5.2</li>
      </ul>
      <h6>Released</h6>
      <p>14 Nov 2022</p>
      <h3>Developer info</h3>
      <hr />
      <h6>Name</h6>
      <p>Bilal Hassan</p>
      <h6>City</h6>
      <p>Rawalpindi/Islamabad</p>
      <h6>Email</h6>
      <p>bilalhassain14@gmail.com</p>
    </div>
  );
}

export default About;
