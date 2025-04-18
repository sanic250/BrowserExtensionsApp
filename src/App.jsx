import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="wrapper">
        <div className="title">
          <img src="./src/assets/images/logo.svg" className="logo" />
          <i class="fa-regular fa-sun"></i>
        </div>
        <div className="title-active">
          <h2>Extensions List</h2>
          <div className="buttons">
            <button className="button-active">All</button>
            <button className="button-active">Active</button>
            <button className="button-active">Inactive</button>
          </div>
        </div>
        <div className="main-section">
          <div>
            <div className="box">
              <img src="./src/assets/images/logo-devlens.svg" />
              <div className="text">
                <h3>DevLens</h3>
                <p>
                  Quickly inspect page layouts and visualize element boundaries.
                </p>
              </div>
            </div>
            <div>
              <button>Remove</button>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
