import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CustomCheckboxes from "./poc/checkBox.jsx";
// import FruitPicker from "./poc/selectPoc.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <App />
      {/* <FruitPicker /> */}
      {/* <CustomCheckboxes /> */}
    </div>
  </React.StrictMode>
);
