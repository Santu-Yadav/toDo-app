import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import MyForm from "./poc/form-radio.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <App />
      {/* <MyForm /> */}
    </div>
  </React.StrictMode>
);
