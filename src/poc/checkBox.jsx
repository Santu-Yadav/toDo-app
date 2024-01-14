import React from "react";
import "./checkBox.css";

const CustomCheckboxes = () => {
  return (
    <div>
      <h5>Custom Checkboxes</h5>
      <label className="container">
        One
        <input type="checkbox" defaultChecked={true} />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        Two
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        Three
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        Four
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default CustomCheckboxes;
