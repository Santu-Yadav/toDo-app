import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FruitPicker from "./poc/selectPoc.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <App />
      {/* <FruitPicker /> */}
    </div>
  </React.StrictMode>
);
